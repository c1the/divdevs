'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function Landing() {
  return (
    <Flex
      w={'full'}
      h={'90vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '5xl', md: '6xl' })}>
            Start your CS journey!
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
            Build real-world tech skills through our 
            project-based learning approach, and connect with a community dedicated to supporting you in your tech journey!
          </Text>
          <Stack direction={'row'}>
            <Button
              as={'a'}  href={'/homepage'} bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Get Started 
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}