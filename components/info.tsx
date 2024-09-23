'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { CiApple, CiUser, CiRepeat  } from "react-icons/ci";

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'gray.800'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text color={'gray.500'}fontWeight={600}>{title}</Text>
      <Text color={'gray.400'}>{text}</Text>
    </Stack>
  )
}

export default function Info() {
  return (
    <Box p={4} bg={'gray.700'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={CiApple } w={10} h={10} />}
          title={'Project-Based Learning'}
          text={
            'Build real-world applications and gain practical experience through projects.'
          }
        />
        <Feature
          icon={<Icon as={CiUser} w={10} h={10} />}
          title={'Supportive Community'}
          text={
            'Join our Discord server to connect with a community of peers. Get mentorship, share knowledge, and ask questions in a supportive environment!'
          }
        />
        <Feature
          icon={<Icon as={CiRepeat} w={10} h={10} />}
          title={'Continued Learning Resources'}
          text={
            'See resources to continue your learning journey after completing each project.'
          }
        />
      </SimpleGrid>
    </Box>
  )
}