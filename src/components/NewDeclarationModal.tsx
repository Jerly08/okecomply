'use client'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  VStack,
  HStack,
  Button,
  Input,
  Text,
  Box,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { FileText, Upload, Sparkles } from 'lucide-react'
import { useState } from 'react'

interface NewDeclarationModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectMethod: (method: 'form' | 'excel', referenceNumber: string) => void
}

export default function NewDeclarationModal({
  isOpen,
  onClose,
  onSelectMethod,
}: NewDeclarationModalProps) {
  const [referenceNumber, setReferenceNumber] = useState('PT. JAVA LOGISTICS')
  const cardBg = useColorModeValue('white', 'gray.700')
  const hoverBg = useColorModeValue('gray.50', 'gray.600')

  const handleMethodSelect = (method: 'form' | 'excel') => {
    if (referenceNumber.trim()) {
      onSelectMethod(method, referenceNumber)
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" color="blue.600">
            OkeCOMPLY
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        
        <ModalBody>
          <VStack spacing={6}>
            {/* Reference Number Input */}
            <Box width="100%">
              <Input
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
                placeholder="Enter Reference Number"
                size="lg"
                textAlign="center"
                bg="gray.50"
                border="2px solid"
                borderColor="gray.200"
                _focus={{
                  borderColor: 'blue.500',
                  bg: 'white',
                }}
              />
            </Box>

            {/* Title */}
            <Text fontSize="lg" fontWeight="semibold" color="gray.700" textAlign="center">
              Mulai Dari Mana ?
            </Text>

            {/* Method Selection Cards */}
            <HStack spacing={4} width="100%">
              {/* Generate AI Card */}
              <Box
                flex={1}
                bg={cardBg}
                border="2px solid"
                borderColor="blue.200"
                borderRadius="xl"
                p={6}
                cursor="not-allowed"
                opacity={0.6}
                textAlign="center"
              >
                <VStack spacing={3}>
                  <Box
                    p={3}
                    bg="blue.100"
                    borderRadius="full"
                  >
                    <Icon as={Sparkles} color="blue.500" size={24} />
                  </Box>
                  <Text fontWeight="semibold" color="gray.700">
                    GENERATIVE AI
                  </Text>
                  <Text fontSize="sm" color="red.500">
                    Coming Soon
                  </Text>
                </VStack>
              </Box>

              {/* Create Form Card */}
              <Box
                flex={1}
                bg={cardBg}
                border="2px solid"
                borderColor="orange.200"
                borderRadius="xl"
                p={6}
                cursor="pointer"
                _hover={{
                  bg: hoverBg,
                  transform: 'translateY(-2px)',
                  shadow: 'md',
                  borderColor: 'orange.400',
                }}
                transition="all 0.2s"
                textAlign="center"
                onClick={() => handleMethodSelect('form')}
              >
                <VStack spacing={3}>
                  <Box
                    p={3}
                    bg="orange.100"
                    borderRadius="full"
                  >
                    <Icon as={FileText} color="orange.500" size={24} />
                  </Box>
                  <Text fontWeight="semibold" color="gray.700">
                    CREATE FORM
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Manual input
                  </Text>
                </VStack>
              </Box>

              {/* Upload Excel Card */}
              <Box
                flex={1}
                bg={cardBg}
                border="2px solid"
                borderColor="green.200"
                borderRadius="xl"
                p={6}
                cursor="pointer"
                _hover={{
                  bg: hoverBg,
                  transform: 'translateY(-2px)',
                  shadow: 'md',
                  borderColor: 'green.400',
                }}
                transition="all 0.2s"
                textAlign="center"
                onClick={() => handleMethodSelect('excel')}
              >
                <VStack spacing={3}>
                  <Box
                    p={3}
                    bg="green.100"
                    borderRadius="full"
                  >
                    <Icon as={Upload} color="green.500" size={24} />
                  </Box>
                  <Text fontWeight="semibold" color="gray.700">
                    UPLOAD EXCEL
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Bulk import
                  </Text>
                </VStack>
              </Box>
            </HStack>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}