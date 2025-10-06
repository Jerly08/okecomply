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
  useDisclosure,
} from '@chakra-ui/react'
import { Search, Plus, MoreVertical, Eye, Edit, Download, Send } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import Link from 'next/link'

const orderData = [
  {
    referenceNumber: 'OKECOMPLYTEST012025',
    submissionNumber: 'PEMBERITAHUANPENGELUARANBARANG',
    createdDate: 'Feb-19-25',
    orderStatus: 'DRAFT',
    docStatus: 'In Process New Declaration',
    orderNumber: 'OKN-020525',
    action: 'Draft',
    lastUpdated: '8h',
  },
  {
    referenceNumber: 'OKECOMPLYTEST012024',
    submissionNumber: 'PEMBERITAHUANPENGELUARANBARANG',
    createdDate: 'Feb-18-25',
    orderStatus: 'COMPLETED',
    docStatus: 'PT. Solusi Maju Logistikc',
    orderNumber: 'OKN-020524',
    action: 'Done',
    lastUpdated: '1d',
  },
  {
    referenceNumber: 'OKECOMPLYTEST012023',
    submissionNumber: 'PEMBERITAHUANPENGELUARANBARANG',
    createdDate: 'Feb-17-25',
    orderStatus: 'DRAFT',
    docStatus: 'PT. Solusi Maju Logistikc',
    orderNumber: 'OKN-020523',
    action: 'Edit',
    lastUpdated: '2d',
  },
  {
    referenceNumber: 'OKECOMPLYTEST012022',
    submissionNumber: 'PEMBERITAHUANPENGELUARANBARANG',
    createdDate: 'Feb-16-25',
    orderStatus: 'DRAFT',
    docStatus: 'In Process',
    orderNumber: 'OKN-020522',
    action: 'Draft',
    lastUpdated: '3d',
  },
  {
    referenceNumber: 'OKECOMPLYTEST012021',
    submissionNumber: 'PEMBERITAHUANPENGELUARANBARANG',
    createdDate: 'Feb-15-25',
    orderStatus: 'DRAFT',
    docStatus: 'PT. Solusi Maju Logistikc',
    orderNumber: 'OKN-020521',
    action: 'Draft',
    lastUpdated: '4d',
  },
  {
    referenceNumber: 'OKECOMPLYTEST012020',
    submissionNumber: 'PEMBERITAHUANPENGELUARANBARANG',
    createdDate: 'Feb-14-25',
    orderStatus: 'DRAFT',
    docStatus: 'In Process',
    orderNumber: 'OKN-020520',
    action: 'Draft',
    lastUpdated: '5d',
  },
]

export default function SelfDeclarePage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'green'
      case 'DRAFT':
        return 'orange'
      case 'SENT':
        return 'blue'
      default:
        return 'gray'
    }
  }

  return (
    <MainLayout>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="lg" mb={2} color="gray.700">
            BC 1.6 - PEMBERITAHUAN PABEAN PENGELUARAN BARANG DARI KAWASAN PABEAN UNTUK DITIMBUN DI PUSAT LOGISTIK BERIKAT
          </Heading>
          <Text color="gray.600">
            Kelola dokumen self declare untuk kawasan berikat
          </Text>
        </Box>

        {/* Stats Cards */}
        <HStack spacing={6}>
          <Card bg="blue.50" borderLeft="4px solid" borderColor="blue.500" flex={1}>
            <CardBody>
              <HStack>
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" color="blue.600">6</Text>
                  <Text fontSize="sm" color="blue.600">TOTAL</Text>
                </Box>
              </HStack>
            </CardBody>
          </Card>
          
          <Card bg="orange.50" borderLeft="4px solid" borderColor="orange.500" flex={1}>
            <CardBody>
              <HStack>
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" color="orange.600">5</Text>
                  <Text fontSize="sm" color="orange.600">DRAFT</Text>
                </Box>
              </HStack>
            </CardBody>
          </Card>
          
          <Card bg="green.50" borderLeft="4px solid" borderColor="green.500" flex={1}>
            <CardBody>
              <HStack>
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" color="green.600">1</Text>
                  <Text fontSize="sm" color="green.600">TERKIRIM</Text>
                </Box>
              </HStack>
            </CardBody>
          </Card>
          
          <Card bg="red.50" borderLeft="4px solid" borderColor="red.500" flex={1}>
            <CardBody>
              <HStack>
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" color="red.600">0</Text>
                  <Text fontSize="sm" color="red.600">WAITING BG</Text>
                </Box>
              </HStack>
            </CardBody>
          </Card>
        </HStack>

        {/* Controls */}
        <Card bg={cardBg} shadow="sm">
          <CardBody>
            <Flex gap={4} align="center" wrap="wrap">
              <InputGroup maxW="300px">
                <InputLeftElement pointerEvents="none">
                  <Icon as={Search} color="gray.400" />
                </InputLeftElement>
                <Input placeholder="Search orders..." />
              </InputGroup>
              
              <Select maxW="200px" placeholder="All Status">
                <option value="draft">Draft</option>
                <option value="completed">Completed</option>
                <option value="sent">Sent</option>
              </Select>
              
              <Spacer />
              
              <Link href="/self-declare/new">
                <Button
                  colorScheme="blue"
                  leftIcon={<Plus size={16} />}
                  size="md"
                >
                  New Declaration
                </Button>
              </Link>
            </Flex>
          </CardBody>
        </Card>

        {/* Orders Table */}
        <Card bg={cardBg} shadow="sm">
          <CardBody p={0}>
            <Box overflowX="auto">
              <Table variant="simple">
                <Thead bg="gray.50">
                  <Tr>
                    <Th>Order Number</Th>
                    <Th>Reference Number</Th>
                    <Th>Submission Number</Th>
                    <Th>Created Date</Th>
                    <Th>Order Status</Th>
                    <Th>Doc Status</Th>
                    <Th>Updated</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {orderData.map((order, index) => (
                    <Tr key={index} _hover={{ bg: 'gray.50' }}>
                      <Td>
                        <Text fontWeight="medium" color="blue.600">
                          {order.orderNumber}
                        </Text>
                      </Td>
                      <Td>
                        <Text fontSize="sm">
                          {order.referenceNumber}
                        </Text>
                      </Td>
                      <Td>
                        <Text fontSize="sm" maxW="200px" isTruncated>
                          {order.submissionNumber}
                        </Text>
                      </Td>
                      <Td>
                        <Text fontSize="sm">
                          {order.createdDate}
                        </Text>
                      </Td>
                      <Td>
                        <Badge
                          colorScheme={getStatusColor(order.orderStatus)}
                          variant="subtle"
                        >
                          {order.orderStatus}
                        </Badge>
                      </Td>
                      <Td>
                        <Text fontSize="sm" maxW="150px" isTruncated>
                          {order.docStatus}
                        </Text>
                      </Td>
                      <Td>
                        <Text fontSize="sm" color="gray.500">
                          {order.lastUpdated}
                        </Text>
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
                            {order.orderStatus === 'DRAFT' && (
                              <Link href={`/self-declare/edit/${order.orderNumber}`}>
                                <MenuItem icon={<Edit size={14} />}>
                                  Continue Edit
                                </MenuItem>
                              </Link>
                            )}
                            {order.orderStatus === 'COMPLETED' && (
                              <>
                                <MenuItem icon={<Send size={14} />}>
                                  Send to CEISA
                                </MenuItem>
                                <MenuItem icon={<Download size={14} />}>
                                  Download Form
                                </MenuItem>
                              </>
                            )}
                          </MenuList>
                        </Menu>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </CardBody>
        </Card>

        {/* Pagination */}
        <Flex justify="center" mt={4}>
          <HStack spacing={2}>
            <Button variant="outline" size="sm">Previous</Button>
            <Button colorScheme="blue" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">Next</Button>
          </HStack>
        </Flex>
      </VStack>
    </MainLayout>
  )
}