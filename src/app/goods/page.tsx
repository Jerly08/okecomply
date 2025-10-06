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
  Image,
} from '@chakra-ui/react'
import { 
  Search, 
  Plus, 
  MoreVertical, 
  Eye, 
  Edit,
  Package,
  Archive,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Tag,
  Barcode,
  Calculator,
  FileText
} from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'

const goodsData = [
  {
    id: 'GOODS-001',
    hsCode: '8471.30.00',
    name: 'Laptop Computer',
    description: 'Portable automatic data processing machines weighing not more than 10 kg',
    category: 'Electronics',
    unit: 'UNIT',
    tariff: '0%',
    origin: 'China',
    brand: 'Dell',
    model: 'Latitude 5520',
    stock: 150,
    value: 12500000,
    lastUpdated: '2025-01-15',
    status: 'ACTIVE',
  },
  {
    id: 'GOODS-002',
    hsCode: '6203.42.00',
    name: 'Cotton Trousers',
    description: 'Men\'s or boys\' trousers, bib and brace overalls, of cotton',
    category: 'Textile',
    unit: 'PCS',
    tariff: '15%',
    origin: 'Vietnam',
    brand: 'Uniqlo',
    model: 'Slim Fit Chino',
    stock: 500,
    value: 350000,
    lastUpdated: '2025-01-14',
    status: 'ACTIVE',
  },
  {
    id: 'GOODS-003',
    hsCode: '8517.12.00',
    name: 'Smartphone',
    description: 'Telephones for cellular networks or for other wireless networks',
    category: 'Electronics',
    unit: 'UNIT',
    tariff: '7.5%',
    origin: 'South Korea',
    brand: 'Samsung',
    model: 'Galaxy S24',
    stock: 75,
    value: 15000000,
    lastUpdated: '2025-01-13',
    status: 'LIMITED',
  },
  {
    id: 'GOODS-004',
    hsCode: '9403.10.00',
    name: 'Office Chair',
    description: 'Metal furniture of a kind used in offices',
    category: 'Furniture',
    unit: 'UNIT',
    tariff: '20%',
    origin: 'Malaysia',
    brand: 'Herman Miller',
    model: 'Aeron Chair',
    stock: 25,
    value: 8500000,
    lastUpdated: '2025-01-12',
    status: 'LOW_STOCK',
  },
  {
    id: 'GOODS-005',
    hsCode: '3004.90.00',
    name: 'Vitamin Supplement',
    description: 'Other medicaments consisting of mixed or unmixed products',
    category: 'Pharmaceutical',
    unit: 'BOTTLE',
    tariff: '5%',
    origin: 'USA',
    brand: 'Nature Made',
    model: 'Multivitamin',
    stock: 0,
    value: 250000,
    lastUpdated: '2025-01-10',
    status: 'OUT_OF_STOCK',
  },
]

const categoriesData = [
  {
    name: 'Electronics',
    count: 1250,
    value: 18750000000,
    change: '+15%',
    color: 'blue',
  },
  {
    name: 'Textile',
    count: 3200,
    value: 5600000000,
    change: '+8%',
    color: 'purple',
  },
  {
    name: 'Furniture',
    count: 450,
    value: 3200000000,
    change: '-2%',
    color: 'orange',
  },
  {
    name: 'Pharmaceutical',
    count: 800,
    value: 1200000000,
    change: '+25%',
    color: 'green',
  },
]

const statsData = [
  {
    label: 'Total Items',
    value: '5,234',
    change: '+124',
    changeType: 'increase',
    icon: Package,
    color: 'blue',
  },
  {
    label: 'Active Products',
    value: '4,890',
    change: '+98',
    changeType: 'increase',
    icon: CheckCircle,
    color: 'green',
  },
  {
    label: 'Low Stock',
    value: '45',
    change: '+12',
    changeType: 'increase',
    icon: AlertTriangle,
    color: 'orange',
  },
  {
    label: 'Out of Stock',
    value: '23',
    change: '-5',
    changeType: 'decrease',
    icon: TrendingDown,
    color: 'red',
  },
]

export default function GoodsPage() {
  const cardBg = useColorModeValue('white', 'gray.800')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'green'
      case 'LIMITED':
        return 'blue'
      case 'LOW_STOCK':
        return 'orange'
      case 'OUT_OF_STOCK':
        return 'red'
      case 'DISCONTINUED':
        return 'gray'
      default:
        return 'gray'
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value)
  }

  const formatLargeCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(1)}M`
    } else if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}K`
    }
    return formatCurrency(value)
  }

  return (
    <MainLayout>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="lg" mb={2} color="gray.700">
            Barang
          </Heading>
          <Text color="gray.600">
            Kelola master data barang, HS Code, dan inventori
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
                <Icon as={Package} size={16} />
                <Text>All Products</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack spacing={2}>
                <Icon as={Tag} size={16} />
                <Text>Categories</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack spacing={2}>
                <Icon as={Barcode} size={16} />
                <Text>HS Code Lookup</Text>
              </HStack>
            </Tab>
          </TabList>

          <TabPanels>
            {/* Products Tab */}
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
                        <Input placeholder="Search products..." />
                      </InputGroup>
                      
                      <Select maxW="200px" placeholder="All Categories">
                        <option value="electronics">Electronics</option>
                        <option value="textile">Textile</option>
                        <option value="furniture">Furniture</option>
                        <option value="pharmaceutical">Pharmaceutical</option>
                      </Select>

                      <Select maxW="200px" placeholder="All Status">
                        <option value="active">Active</option>
                        <option value="limited">Limited</option>
                        <option value="low_stock">Low Stock</option>
                        <option value="out_of_stock">Out of Stock</option>
                      </Select>
                      
                      <Spacer />
                      
                      <Button
                        leftIcon={<Plus size={16} />}
                        colorScheme="blue"
                        size="md"
                      >
                        Add Product
                      </Button>
                    </Flex>
                  </CardBody>
                </Card>

                {/* Products Table */}
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      Product Catalog
                    </Heading>
                  </CardHeader>
                  <CardBody p={0}>
                    <Box overflowX="auto">
                      <Table variant="simple">
                        <Thead bg="gray.50">
                          <Tr>
                            <Th>Product</Th>
                            <Th>HS Code</Th>
                            <Th>Category</Th>
                            <Th>Origin</Th>
                            <Th>Stock</Th>
                            <Th>Value</Th>
                            <Th>Tariff</Th>
                            <Th>Status</Th>
                            <Th>Actions</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {goodsData.map((item) => (
                            <Tr key={item.id} _hover={{ bg: 'gray.50' }}>
                              <Td>
                                <VStack align="start" spacing={1}>
                                  <Text fontWeight="medium" fontSize="sm">
                                    {item.name}
                                  </Text>
                                  <Text fontSize="xs" color="gray.600" maxW="200px" isTruncated>
                                    {item.brand} - {item.model}
                                  </Text>
                                  <Text fontSize="xs" color="gray.500" maxW="250px" isTruncated>
                                    {item.description}
                                  </Text>
                                </VStack>
                              </Td>
                              <Td>
                                <VStack align="start" spacing={1}>
                                  <Text fontSize="sm" fontFamily="mono" fontWeight="bold">
                                    {item.hsCode}
                                  </Text>
                                  <Badge size="xs" colorScheme="gray">
                                    {item.unit}
                                  </Badge>
                                </VStack>
                              </Td>
                              <Td>
                                <Badge colorScheme="purple" variant="subtle">
                                  {item.category}
                                </Badge>
                              </Td>
                              <Td>
                                <Text fontSize="sm">
                                  {item.origin}
                                </Text>
                              </Td>
                              <Td>
                                <VStack align="start" spacing={0}>
                                  <Text fontSize="sm" fontWeight="bold">
                                    {item.stock.toLocaleString()}
                                  </Text>
                                  <Text fontSize="xs" color="gray.500">
                                    {item.unit.toLowerCase()}
                                  </Text>
                                </VStack>
                              </Td>
                              <Td>
                                <Text fontSize="sm" fontWeight="medium">
                                  {formatCurrency(item.value)}
                                </Text>
                              </Td>
                              <Td>
                                <Badge 
                                  colorScheme={item.tariff === '0%' ? 'green' : 'orange'}
                                  variant="solid"
                                  size="sm"
                                >
                                  {item.tariff}
                                </Badge>
                              </Td>
                              <Td>
                                <Badge
                                  colorScheme={getStatusColor(item.status)}
                                  variant="subtle"
                                >
                                  {item.status.replace('_', ' ')}
                                </Badge>
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
                                    <MenuItem icon={<Edit size={14} />}>
                                      Edit Product
                                    </MenuItem>
                                    <MenuItem icon={<Archive size={14} />}>
                                      Update Stock
                                    </MenuItem>
                                    <MenuItem icon={<Calculator size={14} />}>
                                      Calculate Duties
                                    </MenuItem>
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
              </VStack>
            </TabPanel>

            {/* Categories Tab */}
            <TabPanel p={0} mt={4}>
              <VStack spacing={6} align="stretch">
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      Product Categories
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                      {categoriesData.map((category, index) => (
                        <Card key={index} bg={`${category.color}.50`} borderRadius="lg">
                          <CardBody>
                            <VStack align="stretch" spacing={4}>
                              <HStack justify="space-between">
                                <Text fontWeight="bold" fontSize="lg" color={`${category.color}.700`}>
                                  {category.name}
                                </Text>
                                <Badge 
                                  colorScheme={category.change.startsWith('+') ? 'green' : 'red'}
                                  variant="solid"
                                >
                                  {category.change}
                                </Badge>
                              </HStack>
                              <HStack justify="space-between">
                                <VStack align="start" spacing={0}>
                                  <Text fontSize="sm" color="gray.600">Products</Text>
                                  <Text fontSize="xl" fontWeight="bold" color={`${category.color}.600`}>
                                    {category.count.toLocaleString()}
                                  </Text>
                                </VStack>
                                <VStack align="end" spacing={0}>
                                  <Text fontSize="sm" color="gray.600">Total Value</Text>
                                  <Text fontSize="xl" fontWeight="bold" color={`${category.color}.600`}>
                                    {formatLargeCurrency(category.value)}
                                  </Text>
                                </VStack>
                              </HStack>
                            </VStack>
                          </CardBody>
                        </Card>
                      ))}
                    </SimpleGrid>
                  </CardBody>
                </Card>
              </VStack>
            </TabPanel>

            {/* HS Code Lookup Tab */}
            <TabPanel p={0} mt={4}>
              <VStack spacing={6} align="stretch">
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      HS Code Search
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <VStack spacing={6}>
                      <HStack w="full" spacing={4}>
                        <InputGroup flex={1}>
                          <InputLeftElement pointerEvents="none">
                            <Icon as={Search} color="gray.400" />
                          </InputLeftElement>
                          <Input 
                            placeholder="Search by HS Code, product name, or description..." 
                            size="lg"
                          />
                        </InputGroup>
                        <Button colorScheme="blue" size="lg">
                          Search HS Code
                        </Button>
                      </HStack>

                      <Box
                        w="full"
                        h="300px"
                        border="2px dashed"
                        borderColor="gray.300"
                        borderRadius="lg"
                        bg="gray.50"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <VStack spacing={4}>
                          <Icon as={Barcode} size={64} color="gray.400" />
                          <Text color="gray.600" fontSize="lg" textAlign="center">
                            Search for HS Codes and tariff information
                          </Text>
                          <Text color="gray.500" fontSize="sm" textAlign="center">
                            Enter product name, description, or existing HS code to find classification
                          </Text>
                        </VStack>
                      </Box>
                    </VStack>
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
                    Import Data
                  </Text>
                </HStack>
                <Text fontSize="sm" color="blue.600">
                  Import product data dari file Excel atau CSV
                </Text>
                <Button size="sm" colorScheme="blue" variant="outline">
                  Import Products
                </Button>
              </VStack>
            </CardBody>
          </Card>

          <Card bg="green.50" borderLeft="4px solid" borderColor="green.500">
            <CardBody>
              <VStack align="start" spacing={3}>
                <HStack>
                  <Icon as={TrendingUp} color="green.500" size={20} />
                  <Text fontWeight="semibold" color="green.700">
                    Stock Report
                  </Text>
                </HStack>
                <Text fontSize="sm" color="green.600">
                  Laporan stok dan analisis inventory
                </Text>
                <Button size="sm" colorScheme="green" variant="outline">
                  Generate Report
                </Button>
              </VStack>
            </CardBody>
          </Card>

          <Card bg="purple.50" borderLeft="4px solid" borderColor="purple.500">
            <CardBody>
              <VStack align="start" spacing={3}>
                <HStack>
                  <Icon as={Calculator} color="purple.500" size={20} />
                  <Text fontWeight="semibold" color="purple.700">
                    Duty Calculator
                  </Text>
                </HStack>
                <Text fontSize="sm" color="purple.600">
                  Hitung bea masuk dan pajak untuk produk
                </Text>
                <Button size="sm" colorScheme="purple" variant="outline">
                  Open Calculator
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </VStack>
    </MainLayout>
  )
}