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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Progress,
} from '@chakra-ui/react'
import { 
  Search, 
  Plus, 
  MoreVertical, 
  Eye, 
  Download,
  DollarSign,
  CreditCard,
  Receipt,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  FileText,
  Calculator
} from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'

const transactionsData = [
  {
    id: 'TRX-2025-001',
    documentId: 'BC16-2025-001',
    type: 'BEA_MASUK',
    description: 'Import Duty - Electronics',
    amount: 125000000,
    currency: 'IDR',
    status: 'PAID',
    paymentMethod: 'BANK_TRANSFER',
    paymentDate: '2025-01-15',
    dueDate: '2025-01-20',
    company: 'PT. Java Logistics',
    officer: 'John Doe',
    reference: 'PAY-001-2025',
  },
  {
    id: 'TRX-2025-002',
    documentId: 'BC23-2025-002',
    type: 'PPN',
    description: 'VAT - Textile Import',
    amount: 35000000,
    currency: 'IDR',
    status: 'PENDING',
    paymentMethod: 'E_WALLET',
    paymentDate: null,
    dueDate: '2025-01-18',
    company: 'PT. Global Trade',
    officer: 'Jane Smith',
    reference: 'PAY-002-2025',
  },
  {
    id: 'TRX-2025-003',
    documentId: 'BC27-2025-003',
    type: 'CUKAI',
    description: 'Excise Tax - Tobacco',
    amount: 75000000,
    currency: 'IDR',
    status: 'OVERDUE',
    paymentMethod: 'BANK_TRANSFER',
    paymentDate: null,
    dueDate: '2025-01-10',
    company: 'PT. Excise Handlers',
    officer: 'Mike Johnson',
    reference: 'PAY-003-2025',
  },
  {
    id: 'TRX-2025-004',
    documentId: 'BC16-2025-004',
    type: 'PPH',
    description: 'Income Tax - Services',
    amount: 15000000,
    currency: 'IDR',
    status: 'PAID',
    paymentMethod: 'VIRTUAL_ACCOUNT',
    paymentDate: '2025-01-14',
    dueDate: '2025-01-25',
    company: 'PT. Service Pro',
    officer: 'Sarah Wilson',
    reference: 'PAY-004-2025',
  },
  {
    id: 'TRX-2025-005',
    documentId: 'BC11-2025-005',
    type: 'BMKITE',
    description: 'BMKITE - Manufacturing',
    amount: 45000000,
    currency: 'IDR',
    status: 'PROCESSING',
    paymentMethod: 'BANK_TRANSFER',
    paymentDate: null,
    dueDate: '2025-01-22',
    company: 'PT. Manufacturing Inc',
    officer: 'David Brown',
    reference: 'PAY-005-2025',
  },
]

const paymentMethodsData = [
  {
    method: 'BANK_TRANSFER',
    name: 'Bank Transfer',
    count: 145,
    amount: 2350000000,
    percentage: 45,
    color: 'blue',
  },
  {
    method: 'VIRTUAL_ACCOUNT',
    name: 'Virtual Account',
    count: 89,
    amount: 1450000000,
    percentage: 28,
    color: 'green',
  },
  {
    method: 'E_WALLET',
    name: 'E-Wallet',
    count: 67,
    amount: 890000000,
    percentage: 17,
    color: 'purple',
  },
  {
    method: 'CREDIT_CARD',
    name: 'Credit Card',
    count: 32,
    amount: 520000000,
    percentage: 10,
    color: 'orange',
  },
]

const statsData = [
  {
    label: 'Total Revenue',
    value: '₹5.2B',
    change: '+15.3%',
    changeType: 'increase',
    icon: DollarSign,
    color: 'green',
  },
  {
    label: 'Paid Transactions',
    value: '1,234',
    change: '+8.5%',
    changeType: 'increase',
    icon: CheckCircle,
    color: 'blue',
  },
  {
    label: 'Pending Payment',
    value: '₹89M',
    change: '+12%',
    changeType: 'increase',
    icon: Clock,
    color: 'orange',
  },
  {
    label: 'Overdue Amount',
    value: '₹23M',
    change: '-5.2%',
    changeType: 'decrease',
    icon: AlertTriangle,
    color: 'red',
  },
]

export default function TransactionsPage() {
  const cardBg = useColorModeValue('white', 'gray.800')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PAID':
        return 'green'
      case 'PENDING':
        return 'orange'
      case 'PROCESSING':
        return 'blue'
      case 'OVERDUE':
        return 'red'
      case 'CANCELLED':
        return 'gray'
      default:
        return 'gray'
    }
  }

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'BANK_TRANSFER':
        return Receipt
      case 'VIRTUAL_ACCOUNT':
        return CreditCard
      case 'E_WALLET':
        return DollarSign
      case 'CREDIT_CARD':
        return CreditCard
      default:
        return Receipt
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value)
  }

  const formatShortCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `Rp${(value / 1000000000).toFixed(1)}B`
    } else if (value >= 1000000) {
      return `Rp${(value / 1000000).toFixed(1)}M`
    } else if (value >= 1000) {
      return `Rp${(value / 1000).toFixed(1)}K`
    }
    return formatCurrency(value)
  }

  return (
    <MainLayout>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="lg" mb={2} color="gray.700">
            Transaksi
          </Heading>
          <Text color="gray.600">
            Kelola pembayaran, invoice, dan data keuangan
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
                      {stat.change} this month
                    </StatHelpText>
                  </Stat>
                </HStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {/* Tabs */}
        <Tabs variant="enclosed" colorScheme="blue">
          <TabList>
            <Tab>
              <HStack spacing={2}>
                <Icon as={Receipt} size={16} />
                <Text>All Transactions</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack spacing={2}>
                <Icon as={CreditCard} size={16} />
                <Text>Payment Methods</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack spacing={2}>
                <Icon as={TrendingUp} size={16} />
                <Text>Revenue Analytics</Text>
              </HStack>
            </Tab>
          </TabList>

          <TabPanels>
            {/* Transactions Tab */}
            <TabPanel p={0} mt={4}>
              <VStack spacing={6} align="stretch">
                {/* Filters */}
                <Card bg={cardBg} shadow="sm">
                  <CardBody>
                    <Flex gap={4} align="center" wrap="wrap">
                      <InputGroup maxW="300px">
                        <InputLeftElement pointerEvents="none">
                          <Icon as={Search} color="gray.400" />
                        </InputLeftElement>
                        <Input placeholder="Search transactions..." />
                      </InputGroup>
                      
                      <Select maxW="200px" placeholder="All Types">
                        <option value="bea_masuk">Bea Masuk</option>
                        <option value="ppn">PPN</option>
                        <option value="cukai">Cukai</option>
                        <option value="pph">PPH</option>
                        <option value="bmkite">BMKITE</option>
                      </Select>

                      <Select maxW="200px" placeholder="All Status">
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="overdue">Overdue</option>
                      </Select>

                      <Select maxW="200px" placeholder="This Month">
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="year">This Year</option>
                      </Select>
                      
                      <Spacer />
                      
                      <Button
                        leftIcon={<Plus size={16} />}
                        colorScheme="blue"
                        size="md"
                      >
                        New Payment
                      </Button>
                    </Flex>
                  </CardBody>
                </Card>

                {/* Transactions Table */}
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      Transaction History
                    </Heading>
                  </CardHeader>
                  <CardBody p={0}>
                    <Box overflowX="auto">
                      <Table variant="simple">
                        <Thead bg="gray.50">
                          <Tr>
                            <Th>Transaction</Th>
                            <Th>Document</Th>
                            <Th>Company</Th>
                            <Th>Amount</Th>
                            <Th>Payment Method</Th>
                            <Th>Status</Th>
                            <Th>Due Date</Th>
                            <Th>Actions</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {transactionsData.map((transaction) => {
                            const PaymentIcon = getPaymentMethodIcon(transaction.paymentMethod)
                            return (
                              <Tr key={transaction.id} _hover={{ bg: 'gray.50' }}>
                                <Td>
                                  <VStack align="start" spacing={1}>
                                    <Text fontWeight="medium" fontSize="sm">
                                      {transaction.id}
                                    </Text>
                                    <Badge colorScheme="blue" size="xs">
                                      {transaction.type}
                                    </Badge>
                                    <Text fontSize="xs" color="gray.500" maxW="200px" isTruncated>
                                      {transaction.description}
                                    </Text>
                                  </VStack>
                                </Td>
                                <Td>
                                  <Text fontSize="sm" fontFamily="mono">
                                    {transaction.documentId}
                                  </Text>
                                </Td>
                                <Td>
                                  <VStack align="start" spacing={1}>
                                    <Text fontSize="sm" maxW="120px" isTruncated>
                                      {transaction.company}
                                    </Text>
                                    <HStack>
                                      <Avatar size="xs" name={transaction.officer} />
                                      <Text fontSize="xs" color="gray.500">
                                        {transaction.officer}
                                      </Text>
                                    </HStack>
                                  </VStack>
                                </Td>
                                <Td>
                                  <Text fontSize="sm" fontWeight="bold" color="gray.800">
                                    {formatCurrency(transaction.amount)}
                                  </Text>
                                  <Text fontSize="xs" color="gray.500">
                                    {transaction.currency}
                                  </Text>
                                </Td>
                                <Td>
                                  <HStack>
                                    <Icon as={PaymentIcon} size={14} color="gray.500" />
                                    <Text fontSize="sm">
                                      {transaction.paymentMethod.replace('_', ' ')}
                                    </Text>
                                  </HStack>
                                </Td>
                                <Td>
                                  <Badge
                                    colorScheme={getStatusColor(transaction.status)}
                                    variant="subtle"
                                  >
                                    {transaction.status}
                                  </Badge>
                                </Td>
                                <Td>
                                  <VStack align="start" spacing={0}>
                                    <HStack>
                                      <Icon as={Calendar} size={12} color="gray.400" />
                                      <Text fontSize="sm">
                                        {new Date(transaction.dueDate).toLocaleDateString('id-ID')}
                                      </Text>
                                    </HStack>
                                    {transaction.paymentDate && (
                                      <Text fontSize="xs" color="green.500">
                                        Paid: {new Date(transaction.paymentDate).toLocaleDateString('id-ID')}
                                      </Text>
                                    )}
                                  </VStack>
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
                                        Download Receipt
                                      </MenuItem>
                                      {transaction.status === 'PENDING' && (
                                        <MenuItem icon={<DollarSign size={14} />}>
                                          Process Payment
                                        </MenuItem>
                                      )}
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
              </VStack>
            </TabPanel>

            {/* Payment Methods Tab */}
            <TabPanel p={0} mt={4}>
              <VStack spacing={6} align="stretch">
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      Payment Method Distribution
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                      {paymentMethodsData.map((method, index) => {
                        const MethodIcon = getPaymentMethodIcon(method.method)
                        return (
                          <Card key={index} bg={`${method.color}.50`} borderRadius="lg">
                            <CardBody>
                              <VStack align="stretch" spacing={4}>
                                <HStack justify="space-between">
                                  <HStack>
                                    <Icon as={MethodIcon} color={`${method.color}.600`} size={20} />
                                    <Text fontWeight="bold" fontSize="lg" color={`${method.color}.700`}>
                                      {method.name}
                                    </Text>
                                  </HStack>
                                  <Badge colorScheme={method.color} variant="solid">
                                    {method.percentage}%
                                  </Badge>
                                </HStack>
                                <Progress 
                                  value={method.percentage} 
                                  colorScheme={method.color} 
                                  size="lg" 
                                  borderRadius="full"
                                />
                                <HStack justify="space-between">
                                  <VStack align="start" spacing={0}>
                                    <Text fontSize="sm" color="gray.600">Transactions</Text>
                                    <Text fontSize="xl" fontWeight="bold" color={`${method.color}.600`}>
                                      {method.count}
                                    </Text>
                                  </VStack>
                                  <VStack align="end" spacing={0}>
                                    <Text fontSize="sm" color="gray.600">Total Amount</Text>
                                    <Text fontSize="xl" fontWeight="bold" color={`${method.color}.600`}>
                                      {formatShortCurrency(method.amount)}
                                    </Text>
                                  </VStack>
                                </HStack>
                              </VStack>
                            </CardBody>
                          </Card>
                        )
                      })}
                    </SimpleGrid>
                  </CardBody>
                </Card>
              </VStack>
            </TabPanel>

            {/* Revenue Analytics Tab */}
            <TabPanel p={0} mt={4}>
              <VStack spacing={6} align="stretch">
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      Revenue Analytics
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Box
                      w="full"
                      h="400px"
                      border="2px dashed"
                      borderColor="gray.300"
                      borderRadius="lg"
                      bg="gray.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <VStack spacing={4}>
                        <Icon as={TrendingUp} size={64} color="gray.400" />
                        <Text color="gray.600" fontSize="lg" textAlign="center">
                          Revenue Chart & Analytics
                        </Text>
                        <Text color="gray.500" fontSize="sm" textAlign="center">
                          Chart komponen akan diimplementasikan dengan Chart.js atau Recharts
                        </Text>
                      </VStack>
                    </Box>
                  </CardBody>
                </Card>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* Quick Actions */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          <Card bg="blue.50" borderLeft="4px solid" borderColor="blue.500">
            <CardBody>
              <VStack align="start" spacing={3}>
                <HStack>
                  <Icon as={FileText} color="blue.500" size={20} />
                  <Text fontWeight="semibold" color="blue.700">
                    Generate Invoice
                  </Text>
                </HStack>
                <Text fontSize="sm" color="blue.600">
                  Buat invoice untuk transaksi yang tertunda
                </Text>
                <Button size="sm" colorScheme="blue" variant="outline">
                  Create Invoice
                </Button>
              </VStack>
            </CardBody>
          </Card>

          <Card bg="green.50" borderLeft="4px solid" borderColor="green.500">
            <CardBody>
              <VStack align="start" spacing={3}>
                <HStack>
                  <Icon as={Calculator} color="green.500" size={20} />
                  <Text fontWeight="semibold" color="green.700">
                    Tax Calculator
                  </Text>
                </HStack>
                <Text fontSize="sm" color="green.600">
                  Hitung pajak dan bea untuk transaksi baru
                </Text>
                <Button size="sm" colorScheme="green" variant="outline">
                  Open Calculator
                </Button>
              </VStack>
            </CardBody>
          </Card>

          <Card bg="purple.50" borderLeft="4px solid" borderColor="purple.500">
            <CardBody>
              <VStack align="start" spacing={3}>
                <HStack>
                  <Icon as={Download} color="purple.500" size={20} />
                  <Text fontWeight="semibold" color="purple.700">
                    Export Data
                  </Text>
                </HStack>
                <Text fontSize="sm" color="purple.600">
                  Export laporan transaksi ke Excel atau PDF
                </Text>
                <Button size="sm" colorScheme="purple" variant="outline">
                  Export Report
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </VStack>
    </MainLayout>
  )
}