'use client'

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Heading,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  useBreakpointValue,
} from '@chakra-ui/react'
import {
  FiMenu,
} from 'react-icons/fi'
import { ReactText } from 'react'

interface LinkItemProps {
  name: string;
  href: string; // Added href property
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', href: '/homepage' },
  { name: 'Resources', href: '/resources' },
  { name: 'Discord', href: '/discord' },
]

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="1vh" position="relative">
      {/* Sidebar for larger screens */}
      <SidebarContent
        onClose={onClose}
        display={{ base: 'none', md: 'block' }}
        position="fixed"
        top={0}
        left={0}
        h="full"
      />

      {/* Drawer for mobile screens */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* Mobile nav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('gray.600', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.600', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" as="a" href="/">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  children: ReactText
  href: string
}

const NavItem = ({ children, href, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href={href}
      color={'gray.300'}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        <Heading
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          color={useColorModeValue('gray.400', 'gray.300')}
          fontSize="xl"
          fontFamily="body"
        >
        {children}
        </Heading>
      </Flex>
    </Box>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('gray.600', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  )
}
