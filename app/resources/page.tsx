/* eslint-disable react/no-unescaped-entities */
import { Flex, Heading, Text, Box, ChakraProvider, Link, AspectRatio } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar2 from '@/components/navbar2';
import Sidebar from '@/components/sidebar';


interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <Box id={id} py={10} px={6} maxW="800px" mx="auto">
      <Heading as="h2" size="lg" mb={4} color="gray.300">
        {title}
      </Heading>
      <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
        {children}
      </Box>
    </Box>
  );
}

export default function ResourcesPage() {
  return (
    <ChakraProvider>
      <Navbar2 />
      <Sidebar />
      <Flex bg="gray.700" p={8} direction="column" align="center">
        <Section id="section1" title="Advanced Web Development">
          <Text mb={4}>
            Dive deeper into web development by learning frameworks like{' '}
            <Link href="https://reactjs.org/" color="teal.500" isExternal>React</Link>,{' '}
            <Link href="https://nextjs.org/" color="teal.500" isExternal>Next.js</Link>, or{' '}
            <Link href="https://vuejs.org/" color="teal.500" isExternal>Vue</Link>. Explore advanced topics such as{' '}
            <Link href="/resources" color="teal.500">state management</Link>, authentication, and performance optimization.
          </Text>
          <AspectRatio ratio={16 / 9} maxW="560px" mb={4}>
            <iframe
              src="https://www.youtube.com/embed/RVFAyFWO4go?si=Vhc310Lv4nYQ3_9G"
              allowFullScreen
              title="React - Complete Guide"
            />
          </AspectRatio>
          <AspectRatio ratio={16 / 9} maxW="560px">
            <iframe
              src="https://www.youtube.com/embed/843nec-IvW0?si=aKpsXK_Vw9NZ2ULv"
              allowFullScreen
              title="Next.js Crash Course"
            />
          </AspectRatio>
        </Section>

        <Section id="section2" title="Full-Stack Development">
          <Text mb={4}>
            Expand your skillset by learning back-end technologies like{' '}
            <Link href="https://nodejs.org/" color="teal.500" isExternal>Node.js</Link>,{' '}
            <Link href="https://expressjs.com/" color="teal.500" isExternal>Express</Link>, and databases such as{' '}
            <Link href="https://www.mongodb.com/" color="teal.500" isExternal>MongoDB</Link> or{' '}
            <Link href="https://www.postgresql.org/" color="teal.500" isExternal>PostgreSQL</Link>. Learn how to build and deploy full-stack applications.
          </Text>
          <AspectRatio ratio={16 / 9} maxW="560px" mb={4}>
            <iframe
              src="https://www.youtube.com/embed/Oe421EPjeBE?si=pOHwlWmt23lIWsF-"
              allowFullScreen
              title="Full-Stack Development Crash Course"
            />
          </AspectRatio>
        </Section>

        <Section id="section3" title="App Development">
          <Text mb={4}>
            If you're interested in mobile development, explore frameworks like{' '}
            <Link href="https://reactnative.dev/" color="teal.500" isExternal>React Native</Link>,{' '}
            <Link href="https://flutter.dev/" color="teal.500" isExternal>Flutter</Link>, or{' '}
            <Link href="https://developer.apple.com/swift/" color="teal.500" isExternal>Swift</Link> to build apps for iOS and Android.
          </Text>
          <AspectRatio ratio={16 / 9} maxW="560px" mb={4}>
            <iframe
              src="https://www.youtube.com/embed/ZBCUegTZF7M?si=jiThDFV3QZzdQJMu"
              allowFullScreen
              title="App Development with Flutter"
            />
          </AspectRatio>
        </Section>

        <Section id="section4" title="Data Science and Machine Learning">
          <Text mb={4}>
            Interested in data? Start learning{' '}
            <Link href="https://www.python.org/" color="teal.500" isExternal>Python</Link> and dive into data science and machine learning. Explore frameworks like{' '}
            <Link href="https://www.tensorflow.org/" color="teal.500" isExternal>TensorFlow</Link> and{' '}
            <Link href="https://pytorch.org/" color="teal.500" isExternal>PyTorch</Link>.
          </Text>
          <AspectRatio ratio={16 / 9} maxW="560px" mb={4}>
            <iframe
              src="https://www.youtube.com/embed/tPYj3fFJGjk?si=OgVzw4fkUo9ysw08"
              allowFullScreen
              title="Machine Learning Crash Course"
            />
          </AspectRatio>
        </Section>
      </Flex>
    </ChakraProvider>
  );
}
