import { db, doc, setDoc, getDoc } from '../app/firebase/config';

export const saveProgress = async (userId: string, page: string) => {
  await setDoc(doc(db, 'userProgress', userId), { currentPage: page });
};

export const getProgress = async (userId: string) => {
  const docSnap = await getDoc(doc(db, 'userProgress', userId));
  if (docSnap.exists()) {
    return docSnap.data().currentPage;
  } else {
    return 'page1'; // Default page if no progress is found
  }
};
