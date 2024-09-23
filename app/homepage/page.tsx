import Appcard from '@/components/appcard';
import Webcard from '@/components/webcard';
import Introcard from '@/components/introcard';
import Navbar2 from '@/components/navbar2';
import Sidebar from '@/components/sidebar';
import { ChakraProvider, Stack, Box } from '@chakra-ui/react';

export default function Homepage() {
  return (
    <ChakraProvider>
      <Box bg='gray.700' minH="100vh">
        <Navbar2 />
        <Sidebar />
        <Box
          mx="auto"
          maxW="fit-content"
          py={12}
          px={6}
          pl={{ base: -50, md: 60 }} // Add padding-left to shift all content to the right
        >
          <Stack spacing={5}>
            <Box
              display="flex"
              justifyContent="center"
              mb={6} // Margin-bottom to create space above the single card
            >
              <Stack
                direction={{ base: 'column', md: 'row' }} // Horizontal layout for larger screens
                spacing={5}
                alignItems={'center'}
              >
                <Introcard />
                <Box ml={{ base: 20, md: 30 }}> {/* Adjust margin-left for Webcard */} 
                  <Webcard />
                </Box>
              </Stack>
            </Box>
            <Box display="flex" justifyContent="center">
              <Appcard /> {/* This card will appear below the other two */}
            </Box>
          </Stack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
