'use client'

import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  useColorModeValue,
  Divider,
  Flex,
  Avatar,
  Badge,
} from '@chakra-ui/react'
import { 
  Home, 
  FileText, 
  Package, 
  Ship, 
  DollarSign, 
  Settings, 
  User,
  Truck,
  Archive
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Dashboard', icon: Home, href: '/', color: 'blue.500' },
  { name: 'Self Declare', icon: FileText, href: '/self-declare', color: 'green.500' },
  { name: 'Document Pabean', icon: Archive, href: '/documents', color: 'purple.500' },
  { name: 'Pengangkut', icon: Truck, href: '/transport', color: 'orange.500' },
  { name: 'Barang', icon: Package, href: '/goods', color: 'red.500' },
  { name: 'Transaksi', icon: DollarSign, href: '/transactions', color: 'yellow.500' },
  { name: 'Pengaturan', icon: Settings, href: '/settings', color: 'gray.500' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  
  return (
    <Box
      w={{ base: "full", lg: "280px" }}
      h="100vh"
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      position="fixed"
      left={0}
      top={0}
      overflowY="auto"
      zIndex={1000}
      display={{ base: "none", lg: "block" }}
    >
      {/* Logo & Brand */}
      <Box p={6}>
        <HStack spacing={3}>
          <Box
            w={10}
            h={10}
            bg="gradient-to-r from-blue-500 to-blue-600"
            rounded="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Ship color="white" size={20} />
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" color="blue.600">
              OkeComply
            </Text>
            <Text fontSize="xs" color="gray.500">
              Self Declare System
            </Text>
          </Box>
        </HStack>
      </Box>
      
      <Divider />
      
      {/* User Profile */}
      <Box p={4}>
        <HStack spacing={3}>
          <Avatar size="sm" name="Kensington User" bg="blue.500" />
          <Box flex={1}>
            <Text fontSize="sm" fontWeight="medium">
              Kensington
            </Text>
            <Text fontSize="xs" color="gray.500">
              Administrator
            </Text>
          </Box>
          <Badge colorScheme="green" size="sm">
            Online
          </Badge>
        </HStack>
      </Box>
      
      <Divider />
      
      {/* Navigation Menu */}
      <VStack spacing={1} align="stretch" p={4}>
        {menuItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== '/' && pathname.startsWith(item.href))
          
          return (
            <Link key={item.name} href={item.href}>
              <HStack
                p={3}
                rounded="lg"
                bg={isActive ? 'blue.50' : 'transparent'}
                borderLeft={isActive ? '3px solid' : '3px solid transparent'}
                borderColor={isActive ? 'blue.500' : 'transparent'}
                _hover={{
                  bg: 'blue.50',
                  transform: 'translateX(2px)',
                  transition: 'all 0.2s',
                }}
                cursor="pointer"
                transition="all 0.2s"
              >
                <Icon
                  as={item.icon}
                  size={18}
                  color={isActive ? 'blue.500' : 'gray.600'}
                />
                <Text
                  fontSize="sm"
                  fontWeight={isActive ? 'semibold' : 'medium'}
                  color={isActive ? 'blue.600' : 'gray.700'}
                >
                  {item.name}
                </Text>
              </HStack>
            </Link>
          )
        })}
      </VStack>
      
      <Divider mt={4} />
      
      {/* Footer Info */}
      <Box p={4} mt="auto">
        <Text fontSize="xs" color="gray.400" textAlign="center">
          BC 1.6 - Kawasan Berikat
        </Text>
        <Text fontSize="xs" color="gray.400" textAlign="center" mt={1}>
          Version 2.1.0
        </Text>
      </Box>
    </Box>
  )
}