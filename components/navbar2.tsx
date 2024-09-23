'use client'

import {
  Box,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Stack,
  Heading
} from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
  children: React.ReactNode
}


export default function Navbar2() {
  return (
    <>
      <Box 
        bg={useColorModeValue('gray.800', 'blue.900')} 
        px={4}
        position="fixed" // Makes the navbar fixed
        top={0} // Aligns the navbar to the top of the viewport
        width="100%" // Ensures the navbar spans the full width of the viewport
        zIndex={1000} // Keeps the navbar above other content
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

          <Heading
            as={'a'} variant={'link'} href={'/'} textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.500', 'gray.500')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {'<div></devs>'}  {/* Escape the brackets */}
          </Heading>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>


            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
