import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../app/firebase/config';
import { getProgress } from '../app/firebase/firestore';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const checkProgress = async () => {
      if (user) {
        const progress = await getProgress();
        router.push(`/intro/${progress}`); // Redirect to the correct page
      } else if (!loading) {
        router.push('/login'); // Redirect to login if user is not authenticated
      }
    };

    checkProgress();
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // Optional: Show a loading indicator
  }

  return <Component {...pageProps} />;
}

export default MyApp;
