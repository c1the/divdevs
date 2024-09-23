'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Navbar2 from '@/components/navbar2'
import Sidebar from '@/components/sidebar'

export default function Discord() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.800')} minH="100vh" margin="0">
      <Navbar2 />
      <Sidebar />
      <Flex
        bg="gray.700"
        direction="column"
        align="center"
        justify="center"
        minH="calc(110vh - 64px)" // Adjust height to account for Navbar height
        p={8}
        w="full"
        margin="0" // Ensure no extra margins are causing the issue
      >
        <Box 
          maxW="800px" 
          width="full" 
          p={6} 
          bg="gray.300" 
          borderRadius="md" 
          boxShadow="md"
          ml={{ base: 4, md: 8 }} // Adjust margin-left to move content to the right
          mt={{ base: 6, md: 12 }} // Adjust margin-top to move content lower
        >
          <Heading as="h1" size="xl" mb={4}>
            Join Our Discord Community!
          </Heading>
          <Text fontSize="lg" mb={6}>
            Connect with other learners, get help, and stay updated with the latest news. Our Discord server is a great place to ask questions, share your progress, and get support from a community of like-minded individuals.
          </Text>
          <Button
            as="a"
            href="https://discord.gg/pX75aMcn" // Replace with your actual Discord invite link
            colorScheme="blue"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Now
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

