'use client'

import {
  Box,
  Flex,
  Heading,
  IconButton,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons'

export default function Navbar1() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.800', 'blue.900')}
        color={useColorModeValue('white', 'blue.700')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.700', 'blue.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Heading
            as={'a'} variant={'link'} href={'/'} textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.500', 'gray.500')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {'<div></devs>'}  {/* Escape the brackets */}
          </Heading>
        </Flex>


      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {/* No mobile navigation items */}
      </Collapse>
    </Box>
  )
}
