'use client'

import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Introcard() {
  return (
    <Center py={6}>
      <Box 
      as={'a'}  href={'/intro'}
        maxW={'445px'}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('gray.700', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image
            src={
              'https://images.unsplash.com/photo-1644792863360-40fa85ea52e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            fill
            alt="Example"
          />
        </Box>
        <Stack>

          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.500', 'gray.500')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Intro to Programming
          </Heading>
          <Text color={'gray.400'}>
          Learn the fundamentals of programming with an easy-to-follow introduction to coding. 
          This section covers core concepts like variables, loops, and functions, 
          helping you build a strong foundation for future projects.
          </Text>
        </Stack>
        
      </Box>
    </Center>
  )
}