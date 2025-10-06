'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useDisclosure } from '@chakra-ui/react'
import MainLayout from '@/components/layout/MainLayout'
import NewDeclarationModal from '@/components/NewDeclarationModal'

export default function NewDeclarationPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    onOpen()
  }, [onOpen])

  const handleSelectMethod = (method: 'form' | 'excel', referenceNumber: string) => {
    if (method === 'form') {
      router.push(`/self-declare/form?ref=${encodeURIComponent(referenceNumber)}`)
    } else if (method === 'excel') {
      router.push(`/self-declare/excel?ref=${encodeURIComponent(referenceNumber)}`)
    }
  }

  const handleClose = () => {
    onClose()
    router.back()
  }

  return (
    <MainLayout>
      <NewDeclarationModal
        isOpen={isOpen}
        onClose={handleClose}
        onSelectMethod={handleSelectMethod}
      />
    </MainLayout>
  )
}