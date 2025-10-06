'use client'

import { Box } from '@chakra-ui/react'
import Sidebar from './Sidebar'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box minH="100vh" bg="gray.50">
      <Sidebar />
      <Box ml={{ base: 0, lg: "280px" }} p={{ base: 4, md: 6 }}>
        {children}
      </Box>
    </Box>
  )
}