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
        as={'a'}  href={'/webdev'}
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
              'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
            Web Development
          </Heading>
          <Text color={'gray.400'}>
          Explore the world of web development by learning how to create interactive websites using HTML, CSS, and JavaScript. 
          You will gain hands-on experience with responsive design, web frameworks, and deploying websites live on the internet. 
          </Text>
        </Stack>
        
      </Box>
    </Center>
  )
}