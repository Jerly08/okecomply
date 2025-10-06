'use client'

import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Progress,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Badge,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'
import {
  FileText,
  Building,
  Package,
  Truck,
  Archive,
  DollarSign,
  ShoppingCart,
  Calculator,
  CheckCircle,
  Plus,
  Search,
} from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'

const tabs = [
  { name: 'Header', icon: FileText, color: 'blue.500' },
  { name: 'Entitas', icon: Building, color: 'green.500' },
  { name: 'Dokumen', icon: Archive, color: 'purple.500' },
  { name: 'Pengangkut', icon: Truck, color: 'orange.500' },
  { name: 'Kemasan dan Peti Kemas', icon: Package, color: 'cyan.500' },
  { name: 'Transaksi', icon: DollarSign, color: 'yellow.500' },
  { name: 'Barang', icon: ShoppingCart, color: 'red.500' },
  { name: 'Pungutan', icon: Calculator, color: 'pink.500' },
  { name: 'Pernyataan', icon: CheckCircle, color: 'teal.500' },
]

function DeclarationFormContent() {
  const searchParams = useSearchParams()
  const referenceNumber = searchParams?.get('ref') || 'PT. JAVA LOGISTICS'
  const [activeTab, setActiveTab] = useState(0)
  const cardBg = useColorModeValue('white', 'gray.800')
  
  const progress = ((activeTab + 1) / tabs.length) * 100

  const handleNext = () => {
    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1)
    }
  }

  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1)
    }
  }

  return (
    <MainLayout>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Card bg={cardBg} shadow="sm">
          <CardBody>
            <VStack spacing={4} align="stretch">
              <HStack justify="space-between">
                <Box>
                  <Heading size="lg" color="gray.700">
                    BC 1.6 - PEMBERITAHUAN PABEAN PENGELUARAN BARANG DARI KAWASAN PABEAN UNTUK DITIMBUN DI PUSAT LOGISTIK BERIKAT
                  </Heading>
                  <Text color="gray.600" mt={2}>
                    Reference Number: <Badge colorScheme="blue">{referenceNumber}</Badge>
                  </Text>
                </Box>
                <VStack align="end">
                  <Badge colorScheme="orange" size="lg">
                    DRAFT
                  </Badge>
                  <Text fontSize="sm" color="gray.500">
                    Step {activeTab + 1} of {tabs.length}
                  </Text>
                </VStack>
              </HStack>
              
              <Progress
                value={progress}
                colorScheme="blue"
                size="sm"
                borderRadius="full"
              />
            </VStack>
          </CardBody>
        </Card>

        {/* Form Tabs */}
        <Tabs index={activeTab} onChange={setActiveTab} variant="enclosed" isLazy>
          <TabList overflowX="auto" flexWrap="nowrap">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                minW="fit-content"
                whiteSpace="nowrap"
                _selected={{
                  color: tab.color,
                  borderColor: tab.color,
                }}
              >
                <HStack spacing={2}>
                  <Icon as={tab.icon} size={16} />
                  <Text fontSize="sm">{tab.name}</Text>
                  {index <= activeTab && (
                    <Icon as={CheckCircle} size={14} color="green.500" />
                  )}
                </HStack>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {/* Header Tab */}
            <TabPanel p={0} mt={4}>
              <Card bg={cardBg} shadow="sm">
                <CardBody>
                  <Heading size="md" mb={6} color="gray.700">
                    Header Information
                  </Heading>
                  
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                    <Box>
                      <Text fontWeight="semibold" mb={4} color="blue.600">
                        PEMBERITAHU
                      </Text>
                      <VStack align="stretch" spacing={4}>
                        <FormControl>
                          <FormLabel>Nomor Pengajuan</FormLabel>
                          <Input defaultValue="000002834727220223026656" isReadOnly bg="gray.50" />
                        </FormControl>
                      </VStack>
                    </Box>
                    
                    <Box>
                      <Text fontWeight="semibold" mb={4} color="green.600">
                        KANTOR PABEAN
                      </Text>
                      <VStack align="stretch" spacing={4}>
                        <FormControl>
                          <FormLabel>Pemberitahuan Pengawas</FormLabel>
                          <Select>
                            <option value="kppbc-tanjung-priok">KPPBC TMP TANJUNG PRIOK</option>
                          </Select>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Kantor Pelayanan Pengawas</FormLabel>
                          <Input placeholder="Masukkan kantor pelayanan" />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Kantor Pengawas</FormLabel>
                          <Select>
                            <option value="040301">040301 TMP KOTA TANJUNG PRIOK</option>
                          </Select>
                        </FormControl>
                      </VStack>
                    </Box>
                    
                    <Box>
                      <Text fontWeight="semibold" mb={4} color="purple.600">
                        KETERANGAN LAIN
                      </Text>
                      <VStack align="stretch" spacing={4}>
                        <FormControl>
                          <FormLabel>Kode Gudang HH</FormLabel>
                          <Input defaultValue="001-0163" />
                        </FormControl>
                      </VStack>
                    </Box>
                  </SimpleGrid>
                </CardBody>
              </Card>
            </TabPanel>

            {/* Other tabs with placeholder content */}
            {tabs.slice(1).map((tab, index) => (
              <TabPanel key={index + 1} p={0} mt={4}>
                <Card bg={cardBg} shadow="sm">
                  <CardBody>
                    <VStack spacing={6} align="stretch">
                      <HStack>
                        <Icon as={tab.icon} color={tab.color} size={24} />
                        <Heading size="md" color="gray.700">
                          {tab.name}
                        </Heading>
                      </HStack>
                      
                      <Box
                        p={12}
                        textAlign="center"
                        border="2px dashed"
                        borderColor="gray.300"
                        borderRadius="lg"
                        bg="gray.50"
                      >
                        <VStack spacing={4}>
                          <Icon as={tab.icon} size={48} color="gray.400" />
                          <Text color="gray.600" fontSize="lg" fontWeight="medium">
                            Form {tab.name}
                          </Text>
                          <Text color="gray.500" fontSize="sm">
                            Content for {tab.name} will be implemented here
                          </Text>
                        </VStack>
                      </Box>
                    </VStack>
                  </CardBody>
                </Card>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>

        {/* Navigation Buttons */}
        <Card bg={cardBg} shadow="sm">
          <CardBody>
            <HStack justify="space-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                isDisabled={activeTab === 0}
              >
                Previous
              </Button>
              
              <HStack spacing={2}>
                <Button variant="outline" colorScheme="gray">
                  Save Draft
                </Button>
                {activeTab === tabs.length - 1 ? (
                  <Button colorScheme="green">
                    Complete Declaration
                  </Button>
                ) : (
                  <Button
                    colorScheme="blue"
                    onClick={handleNext}
                  >
                    Next Step
                  </Button>
                )}
              </HStack>
            </HStack>
          </CardBody>
        </Card>
      </VStack>
    </MainLayout>
  )
}

export default function DeclarationFormPage() {
  return (
    <Suspense fallback={
      <MainLayout>
        <Box p={8} textAlign="center">
          <Text>Loading...</Text>
        </Box>
      </MainLayout>
    }>
      <DeclarationFormContent />
    </Suspense>
  )
}
