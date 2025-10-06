'use client'

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
  useColorModeValue,
  Flex,
  Spacer,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Progress,
  Avatar,
} from '@chakra-ui/react'
import { 
  Search, 
  Plus, 
  MoreVertical, 
  Eye, 
  Download, 
  FileText,
  Archive,
  Clock,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Calendar
} from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'

const documentsData = [
  {
    id: 'DOC-001',
    type: 'BC 1.1',
    title: 'Pemberitahuan Impor Barang',
    referenceNumber: 'IMP2025001234',
    submissionDate: '2025-01-15',
    expiryDate: '2025-03-15',
    status: 'APPROVED',
    company: 'PT. ABC Logistics',
    officer: 'John Doe',
    description: 'Import electronic components from China',
  },
  {
    id: 'DOC-002',
    type: 'BC 1.6',
    title: 'Pengeluaran Barang dari Kawasan Berikat',
    referenceNumber: 'KBR2025001122',
    submissionDate: '2025-01-14',
    expiryDate: '2025-02-14',
    status: 'PENDING',
    company: 'PT. Java Logistics',
    officer: 'Jane Smith',
    description: 'Release goods from bonded zone to distribution center',
  },
  {
    id: 'DOC-003',
    type: 'BC 2.3',
    title: 'Pemberitahuan Impor untuk Dipakai',
    referenceNumber: 'IPD2025000987',
    submissionDate: '2025-01-13',
    expiryDate: '2025-04-13',
    status: 'PROCESSING',
    company: 'PT. Global Trade',
    officer: 'Mike Johnson',
    description: 'Import raw materials for manufacturing',
  },
  {
    id: 'DOC-004',
    type: 'BC 2.7',
    title: 'Pemberitahuan Ekspor',
    referenceNumber: 'EXP2025000456',
    submissionDate: '2025-01-12',
    expiryDate: '2025-03-12',
    status: 'REJECTED',
    company: 'PT. Export Masters',
    officer: 'Sarah Wilson',
    description: 'Export finished goods to Singapore',
  },
  {
    id: 'DOC-005',
    type: 'BC 1.1',
    title: 'Pemberitahuan Impor Barang',
    referenceNumber: 'IMP2025001789',
    submissionDate: '2025-01-11',
    expiryDate: '2025-05-11',
    status: 'EXPIRED',
    company: 'PT. Import Solutions',
    officer: 'David Brown',
    description: 'Import machinery parts from Germany',
  },
  {
    id: 'DOC-006',
    type: 'BC 4.0',
    title: 'Pemberitahuan Cukai',
    referenceNumber: 'CUK2025000123',
    submissionDate: '2025-01-10',
    expiryDate: '2025-02-10',
    status: 'APPROVED',
    company: 'PT. Excise Handlers',
    officer: 'Lisa Anderson',
    description: 'Excise declaration for tobacco products',
  },
]

const statsData = [
  {
    label: 'Total Documents',
    value: '156',
    change: '+12%',
    changeType: 'increase',
    icon: FileText,
    color: 'blue',
  },
  {
    label: 'Pending Approval',
    value: '23',
    change: '+5%',
    changeType: 'increase',
    icon: Clock,
    color: 'orange',
  },
  {
    label: 'Approved',
    value: '98',
    change: '+8%',
    changeType: 'increase',
    icon: CheckCircle,
    color: 'green',
  },
  {
    label: 'Rejected/Expired',
    value: '35',
    change: '-3%',
    changeType: 'decrease',
    icon: XCircle,
    color: 'red',
  },
]

export default function DocumentsPage() {
  const cardBg = useColorModeValue('white', 'gray.800')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return 'green'
      case 'PENDING':
        return 'orange'
      case 'PROCESSING':
        return 'blue'
      case 'REJECTED':
        return 'red'
      case 'EXPIRED':
        return 'gray'
      default:
        return 'gray'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return CheckCircle
      case 'PENDING':
        return Clock
      case 'PROCESSING':
        return Archive
      case 'REJECTED':
        return XCircle
      case 'EXPIRED':
        return AlertTriangle
      default:
        return FileText
    }
  }

  return (
    <MainLayout>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="lg" mb={2} color="gray.700">
            Document Pabean
          </Heading>
          <Text color="gray.600">
            Kelola dokumen kepabeanan dan lihat status persetujuan
          </Text>
        </Box>

        {/* Stats Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {statsData.map((stat, index) => (
            <Card key={index} bg={cardBg} shadow="sm" borderRadius="xl">
              <CardBody>
                <HStack spacing={4}>
                  <Box
                    p={3}
                    bg={`${stat.color}.50`}
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={stat.icon} color={`${stat.color}.500`} size={24} />
                  </Box>
                  <Stat>
                    <StatLabel fontSize="sm" color="gray.600">
                      {stat.label}
                    </StatLabel>
                    <StatNumber fontSize="2xl" fontWeight="bold" color="gray.800">
                      {stat.value}
                    </StatNumber>
                    <StatHelpText fontSize="xs" color={stat.changeType === 'increase' ? 'green.500' : 'red.500'}>
                      {stat.change} from last month
                    </StatHelpText>
                  </Stat>
                </HStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {/* Filters and Actions */}
        <Card bg={cardBg} shadow="sm">
          <CardBody>
            <Flex gap={4} align="center" wrap="wrap">
              <InputGroup maxW="300px">
                <InputLeftElement pointerEvents="none">
                  <Icon as={Search} color="gray.400" />
                </InputLeftElement>
                <Input placeholder="Search documents..." />
              </InputGroup>
              
              <Select maxW="200px" placeholder="All Types">
                <option value="bc11">BC 1.1</option>
                <option value="bc16">BC 1.6</option>
                <option value="bc23">BC 2.3</option>
                <option value="bc27">BC 2.7</option>
                <option value="bc40">BC 4.0</option>
              </Select>

              <Select maxW="200px" placeholder="All Status">
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="rejected">Rejected</option>
                <option value="expired">Expired</option>
              </Select>
              
              <Spacer />
              
              <Button
                leftIcon={<Plus size={16} />}
                colorScheme="blue"
                size="md"
              >
                Add Document
              </Button>
            </Flex>
          </CardBody>
        </Card>

        {/* Documents Table */}
        <Card bg={cardBg} shadow="sm">
          <CardHeader>
            <Heading size="md" color="gray.700">
              Recent Documents
            </Heading>
          </CardHeader>
          <CardBody p={0}>
            <Box overflowX="auto">
              <Table variant="simple">
                <Thead bg="gray.50">
                  <Tr>
                    <Th>Document</Th>
                    <Th>Reference</Th>
                    <Th>Company</Th>
                    <Th>Submission Date</Th>
                    <Th>Expiry Date</Th>
                    <Th>Status</Th>
                    <Th>Officer</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {documentsData.map((doc) => {
                    const StatusIcon = getStatusIcon(doc.status)
                    return (
                      <Tr key={doc.id} _hover={{ bg: 'gray.50' }}>
                        <Td>
                          <VStack align="start" spacing={1}>
                            <HStack>
                              <Badge colorScheme="purple" size="sm">
                                {doc.type}
                              </Badge>
                              <Text fontWeight="medium" fontSize="sm">
                                {doc.id}
                              </Text>
                            </HStack>
                            <Text fontSize="xs" color="gray.600" maxW="200px" isTruncated>
                              {doc.title}
                            </Text>
                          </VStack>
                        </Td>
                        <Td>
                          <Text fontSize="sm" fontFamily="mono">
                            {doc.referenceNumber}
                          </Text>
                        </Td>
                        <Td>
                          <Text fontSize="sm" maxW="120px" isTruncated>
                            {doc.company}
                          </Text>
                        </Td>
                        <Td>
                          <HStack>
                            <Icon as={Calendar} size={14} color="gray.400" />
                            <Text fontSize="sm">
                              {new Date(doc.submissionDate).toLocaleDateString('id-ID')}
                            </Text>
                          </HStack>
                        </Td>
                        <Td>
                          <Text fontSize="sm" color="gray.600">
                            {new Date(doc.expiryDate).toLocaleDateString('id-ID')}
                          </Text>
                        </Td>
                        <Td>
                          <HStack>
                            <Icon as={StatusIcon} size={14} color={`${getStatusColor(doc.status)}.500`} />
                            <Badge
                              colorScheme={getStatusColor(doc.status)}
                              variant="subtle"
                              size="sm"
                            >
                              {doc.status}
                            </Badge>
                          </HStack>
                        </Td>
                        <Td>
                          <HStack>
                            <Avatar size="xs" name={doc.officer} />
                            <Text fontSize="sm">{doc.officer}</Text>
                          </HStack>
                        </Td>
                        <Td>
                          <Menu>
                            <MenuButton
                              as={Button}
                              variant="ghost"
                              size="sm"
                              rightIcon={<MoreVertical size={14} />}
                            >
                              Actions
                            </MenuButton>
                            <MenuList>
                              <MenuItem icon={<Eye size={14} />}>
                                View Details
                              </MenuItem>
                              <MenuItem icon={<Download size={14} />}>
                                Download PDF
                              </MenuItem>
                              <MenuItem icon={<Archive size={14} />}>
                                Archive Document
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            </Box>
          </CardBody>
        </Card>

        {/* Quick Actions */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          <Card bg="blue.50" borderLeft="4px solid" borderColor="blue.500">
            <CardBody>
              <VStack align="start" spacing={3}>
                <HStack>
                  <Icon as={FileText} color="blue.500" size={20} />
                  <Text fontWeight="semibold" color="blue.700">
                    Document Templates
                  </Text>
                </HStack>
                <Text fontSize="sm" color="blue.600">
                  Download template dokumen untuk berbagai jenis BC
                </Text>
                <Button size="sm" colorScheme="blue" variant="outline">
                  View Templates
                </Button>
              </VStack>
            </CardBody>
          </Card>

          <Card bg="green.50" borderLeft="4px solid" borderColor="green.500">
            <CardBody>
              <VStack align="start" spacing={3}>
                <HStack>
                  <Icon as={CheckCircle} color="green.500" size={20} />
                  <Text fontWeight="semibold" color="green.700">
                    Bulk Processing
                  </Text>
                </HStack>
                <Text fontSize="sm" color="green.600">
                  Proses multiple dokumen sekaligus untuk efisiensi
                </Text>
                <Button size="sm" colorScheme="green" variant="outline">
                  Start Bulk Process
                </Button>
              </VStack>
            </CardBody>
          </Card>

          <Card bg="orange.50" borderLeft="4px solid" borderColor="orange.500">
            <CardBody>
              <VStack align="start" spacing={3}>
                <HStack>
                  <Icon as={Archive} color="orange.500" size={20} />
                  <Text fontWeight="semibold" color="orange.700">
                    Archive Manager
                  </Text>
                </HStack>
                <Text fontSize="sm" color="orange.600">
                  Kelola dokumen yang sudah diarsipkan
                </Text>
                <Button size="sm" colorScheme="orange" variant="outline">
                  Manage Archive
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>

        {/* Pagination */}
        <Flex justify="center" mt={4}>
          <HStack spacing={2}>
            <Button variant="outline" size="sm">Previous</Button>
            <Button colorScheme="blue" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </HStack>
        </Flex>
      </VStack>
    </MainLayout>
  )
}