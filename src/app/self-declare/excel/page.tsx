'use client'

import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
  Icon,
  useColorModeValue,
  Progress,
  Flex,
  Center,
} from '@chakra-ui/react'
import { Upload, Download, FileText, CheckCircle, AlertTriangle } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'

function ExcelUploadContent() {
  const searchParams = useSearchParams()
  const referenceNumber = searchParams?.get('ref') || 'PT. JAVA LOGISTICS'
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle')
  const [isDragOver, setIsDragOver] = useState(false)
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.300', 'gray.600')
  const hoverBorderColor = useColorModeValue('blue.400', 'blue.300')

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const files = Array.from(e.dataTransfer.files)
    handleFileUpload(files)
  }

  const handleFileUpload = (files: File[]) => {
    if (files.length > 0 && files[0].name.endsWith('.xlsx')) {
      setUploadStatus('uploading')
      // Simulate upload
      setTimeout(() => {
        setUploadStatus('success')
      }, 2000)
    } else {
      setUploadStatus('error')
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    handleFileUpload(files)
  }

  return (
    <MainLayout>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Card bg={cardBg} shadow="sm">
          <CardBody>
            <HStack justify="space-between" align="start">
              <Box>
                <Heading size="lg" color="gray.700">
                  BC 1.6 - Upload Excel
                </Heading>
                <Text color="gray.600" mt={2}>
                  Reference Number: <Badge colorScheme="blue">{referenceNumber}</Badge>
                </Text>
                <Text color="gray.500" fontSize="sm" mt={1}>
                  Upload file Excel untuk import data secara bulk
                </Text>
              </Box>
              <Badge colorScheme="orange" size="lg">
                DRAFT
              </Badge>
            </HStack>
          </CardBody>
        </Card>

        {/* Download Template */}
        <Card bg={cardBg} shadow="sm">
          <CardBody>
            <HStack justify="space-between">
              <VStack align="start" spacing={2}>
                <HStack>
                  <Icon as={FileText} color="blue.500" />
                  <Heading size="md" color="gray.700">
                    Template Excel
                  </Heading>
                </HStack>
                <Text color="gray.600" fontSize="sm">
                  Download template Excel untuk format yang sesuai dengan sistem BC 1.6
                </Text>
              </VStack>
              <Button
                leftIcon={<Download size={16} />}
                colorScheme="blue"
                variant="outline"
              >
                Download Template
              </Button>
            </HStack>
          </CardBody>
        </Card>

        {/* Upload Area */}
        <Card bg={cardBg} shadow="sm">
          <CardBody>
            <VStack spacing={6}>
              <HStack>
                <Icon as={Upload} color="green.500" />
                <Heading size="md" color="gray.700">
                  Upload File Excel
                </Heading>
              </HStack>

              {uploadStatus === 'idle' && (
                <Box
                  w="100%"
                  h="300px"
                  border="3px dashed"
                  borderColor={isDragOver ? hoverBorderColor : borderColor}
                  borderRadius="lg"
                  bg={isDragOver ? 'blue.50' : 'gray.50'}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  transition="all 0.2s"
                  cursor="pointer"
                  _hover={{
                    borderColor: hoverBorderColor,
                    bg: 'blue.50',
                  }}
                >
                  <Center h="100%">
                    <VStack spacing={4}>
                      <Icon 
                        as={Upload} 
                        size={64} 
                        color={isDragOver ? 'blue.500' : 'gray.400'} 
                      />
                      <VStack spacing={2}>
                        <Text 
                          fontSize="lg" 
                          fontWeight="semibold" 
                          color={isDragOver ? 'blue.600' : 'gray.600'}
                        >
                          Drag and drop file disini atau klik disini untuk memilih file
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                          Format yang didukung: .xlsx (max 10MB)
                        </Text>
                      </VStack>
                      <Button
                        colorScheme="blue"
                        size="lg"
                        onClick={() => document.getElementById('file-upload')?.click()}
                      >
                        Pilih File
                      </Button>
                      <input
                        id="file-upload"
                        type="file"
                        accept=".xlsx"
                        style={{ display: 'none' }}
                        onChange={handleFileSelect}
                      />
                    </VStack>
                  </Center>
                </Box>
              )}

              {uploadStatus === 'uploading' && (
                <Box
                  w="100%"
                  h="300px"
                  border="2px solid"
                  borderColor="blue.300"
                  borderRadius="lg"
                  bg="blue.50"
                >
                  <Center h="100%">
                    <VStack spacing={4}>
                      <Box
                        w={16}
                        h={16}
                        bg="blue.500"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        animation="pulse 1s infinite"
                      >
                        <Icon as={Upload} color="white" size={32} />
                      </Box>
                      <Text fontSize="lg" fontWeight="semibold" color="blue.600">
                        Mengupload file...
                      </Text>
                      <Progress
                        value={75}
                        colorScheme="blue"
                        size="lg"
                        w="200px"
                        borderRadius="full"
                      />
                    </VStack>
                  </Center>
                </Box>
              )}

              {uploadStatus === 'success' && (
                <Box
                  w="100%"
                  h="300px"
                  border="2px solid"
                  borderColor="green.300"
                  borderRadius="lg"
                  bg="green.50"
                >
                  <Center h="100%">
                    <VStack spacing={4}>
                      <Icon as={CheckCircle} color="green.500" size={64} />
                      <Text fontSize="lg" fontWeight="semibold" color="green.600">
                        File berhasil diupload!
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        Data Excel telah diproses dan siap untuk review
                      </Text>
                      <HStack spacing={3}>
                        <Button
                          colorScheme="green"
                          onClick={() => setUploadStatus('idle')}
                        >
                          Upload File Lain
                        </Button>
                        <Button colorScheme="blue" variant="outline">
                          Review Data
                        </Button>
                      </HStack>
                    </VStack>
                  </Center>
                </Box>
              )}

              {uploadStatus === 'error' && (
                <Box
                  w="100%"
                  h="300px"
                  border="2px solid"
                  borderColor="red.300"
                  borderRadius="lg"
                  bg="red.50"
                >
                  <Center h="100%">
                    <VStack spacing={4}>
                      <Icon as={AlertTriangle} color="red.500" size={64} />
                      <Text fontSize="lg" fontWeight="semibold" color="red.600">
                        Upload gagal!
                      </Text>
                      <Text fontSize="sm" color="gray.600" textAlign="center">
                        File yang diupload tidak valid atau terjadi kesalahan.
                        <br />
                        Pastikan file berformat .xlsx dan menggunakan template yang benar.
                      </Text>
                      <Button
                        colorScheme="red"
                        variant="outline"
                        onClick={() => setUploadStatus('idle')}
                      >
                        Coba Lagi
                      </Button>
                    </VStack>
                  </Center>
                </Box>
              )}
            </VStack>
          </CardBody>
        </Card>

        {/* Instructions */}
        <Card bg={cardBg} shadow="sm">
          <CardBody>
            <VStack align="stretch" spacing={4}>
              <Heading size="md" color="gray.700">
                Petunjuk Penggunaan
              </Heading>
              
              <VStack align="start" spacing={2}>
                <HStack align="start">
                  <Text color="blue.500" fontWeight="bold">1.</Text>
                  <Text color="gray.600">
                    Download template Excel terlebih dahulu untuk mendapatkan format yang sesuai
                  </Text>
                </HStack>
                <HStack align="start">
                  <Text color="blue.500" fontWeight="bold">2.</Text>
                  <Text color="gray.600">
                    Isi data sesuai dengan kolom yang tersedia di template
                  </Text>
                </HStack>
                <HStack align="start">
                  <Text color="blue.500" fontWeight="bold">3.</Text>
                  <Text color="gray.600">
                    Pastikan format data sudah benar (tanggal, angka, kode HS, dll.)
                  </Text>
                </HStack>
                <HStack align="start">
                  <Text color="blue.500" fontWeight="bold">4.</Text>
                  <Text color="gray.600">
                    Upload file Excel yang telah diisi
                  </Text>
                </HStack>
                <HStack align="start">
                  <Text color="blue.500" fontWeight="bold">5.</Text>
                  <Text color="gray.600">
                    Review dan validasi data sebelum mengirim ke CEISA
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </CardBody>
        </Card>

        {/* Action Buttons */}
        <Card bg={cardBg} shadow="sm">
          <CardBody>
            <Flex justify="space-between">
              <Button variant="outline">
                Kembali
              </Button>
              
              <HStack spacing={2}>
                <Button variant="outline" colorScheme="gray">
                  Save Draft
                </Button>
                <Button 
                  colorScheme="blue" 
                  isDisabled={uploadStatus !== 'success'}
                >
                  Continue to Review
                </Button>
              </HStack>
            </Flex>
          </CardBody>
        </Card>
      </VStack>
    </MainLayout>
  )
}

export default function ExcelUploadPage() {
  return (
    <Suspense fallback={
      <MainLayout>
        <Box p={8} textAlign="center">
          <Text>Loading...</Text>
        </Box>
      </MainLayout>
    }>
      <ExcelUploadContent />
    </Suspense>
  )
}
