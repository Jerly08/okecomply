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
  Avatar,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import { 
  Search, 
  Plus, 
  MoreVertical, 
  Eye, 
  Edit, 
  Truck,
  Ship,
  Plane,
  Train,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  Users,
  Package
} from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'

const carriersData = [
  {
    id: 'CAR-001',
    name: 'PT. Logistics Express',
    type: 'TRUCKING',
    license: 'LIC-2024-001',
    contact: 'Andi Wijaya',
    phone: '+62-21-1234567',
    email: 'andi@logisticsexpress.co.id',
    status: 'ACTIVE',
    vehicles: 25,
    rating: 4.8,
    lastActivity: '2025-01-15',
  },
  {
    id: 'CAR-002',
    name: 'Ocean Freight Solutions',
    type: 'SHIPPING',
    license: 'LIC-2024-002',
    contact: 'Sari Dewi',
    phone: '+62-21-2345678',
    email: 'sari@oceanfreight.co.id',
    status: 'ACTIVE',
    vehicles: 8,
    rating: 4.9,
    lastActivity: '2025-01-14',
  },
  {
    id: 'CAR-003',
    name: 'Air Cargo International',
    type: 'AIRLINE',
    license: 'LIC-2024-003',
    contact: 'Budi Santoso',
    phone: '+62-21-3456789',
    email: 'budi@aircargo.co.id',
    status: 'SUSPENDED',
    vehicles: 12,
    rating: 4.2,
    lastActivity: '2024-12-28',
  },
]

const vehiclesData = [
  {
    id: 'VEH-001',
    plateNumber: 'B 1234 ABC',
    type: 'TRUCK',
    model: 'Mitsubishi Fuso',
    capacity: '10 Ton',
    carrier: 'PT. Logistics Express',
    driver: 'Joko Susilo',
    status: 'ACTIVE',
    location: 'Jakarta Utara',
    lastMaintenance: '2024-12-15',
    nextMaintenance: '2025-03-15',
  },
  {
    id: 'VEH-002',
    plateNumber: 'MV Ocean Star',
    type: 'VESSEL',
    model: 'Container Ship',
    capacity: '5000 TEU',
    carrier: 'Ocean Freight Solutions',
    driver: 'Kapten Surya',
    status: 'IN_TRANSIT',
    location: 'Pelabuhan Tanjung Priok',
    lastMaintenance: '2024-11-30',
    nextMaintenance: '2025-05-30',
  },
  {
    id: 'VEH-003',
    plateNumber: 'PK-ABC',
    type: 'AIRCRAFT',
    model: 'Boeing 737 Cargo',
    capacity: '20 Ton',
    carrier: 'Air Cargo International',
    driver: 'Pilot Rendra',
    status: 'MAINTENANCE',
    location: 'Bandara Soekarno-Hatta',
    lastMaintenance: '2025-01-10',
    nextMaintenance: '2025-04-10',
  },
]

const statsData = [
  {
    label: 'Total Carriers',
    value: '45',
    change: '+3',
    changeType: 'increase',
    icon: Users,
    color: 'blue',
  },
  {
    label: 'Active Vehicles',
    value: '128',
    change: '+12',
    changeType: 'increase',
    icon: Truck,
    color: 'green',
  },
  {
    label: 'In Transit',
    value: '23',
    change: '+5',
    changeType: 'increase',
    icon: Package,
    color: 'orange',
  },
  {
    label: 'Maintenance',
    value: '7',
    change: '-2',
    changeType: 'decrease',
    icon: AlertTriangle,
    color: 'red',
  },
]

export default function TransportPage() {
  const cardBg = useColorModeValue('white', 'gray.800')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'green'
      case 'IN_TRANSIT':
        return 'blue'
      case 'MAINTENANCE':
        return 'orange'
      case 'SUSPENDED':
        return 'red'
      case 'INACTIVE':
        return 'gray'
      default:
        return 'gray'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'TRUCKING':
      case 'TRUCK':
        return Truck
      case 'SHIPPING':
      case 'VESSEL':
        return Ship
      case 'AIRLINE':
      case 'AIRCRAFT':
        return Plane
      case 'RAIL':
        return Train
      default:
        return Truck
    }
  }

  return (
    <MainLayout>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="lg" mb={2} color="gray.700">
            Pengangkut
          </Heading>
          <Text color="gray.600">
            Kelola data pengangkut, kendaraan, dan status transportasi
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

        {/* Tabs for Carriers and Vehicles */}
        <Tabs variant="enclosed" colorScheme="blue">
          <TabList>
            <Tab>
              <HStack spacing={2}>
                <Icon as={Users} size={16} />
                <Text>Carriers</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack spacing={2}>
                <Icon as={Truck} size={16} />
                <Text>Vehicles</Text>
              </HStack>
            </Tab>
          </TabList>

          <TabPanels>
            {/* Carriers Tab */}
            <TabPanel p={0} mt={4}>
              <VStack spacing={6} align="stretch">
                {/* Carriers Filters */}
                <Card bg={cardBg} shadow="sm">
                  <CardBody>
                    <Flex gap={4} align="center" wrap="wrap">
                      <InputGroup maxW="300px">
                        <InputLeftElement pointerEvents="none">
                          <Icon as={Search} color="gray.400" />
                        </InputLeftElement>
                        <Input placeholder="Search carriers..." />
                      </InputGroup>
                      
                      <Select maxW="200px" placeholder="All Types">
                        <option value="trucking">Trucking</option>
                        <option value="shipping">Shipping</option>
                        <option value="airline">Airline</option>
                        <option value="rail">Rail</option>
                      </Select>

                      <Select maxW="200px" placeholder="All Status">
                        <option value="active">Active</option>
                        <option value="suspended">Suspended</option>
                        <option value="inactive">Inactive</option>
                      </Select>
                      
                      <Spacer />
                      
                      <Button
                        leftIcon={<Plus size={16} />}
                        colorScheme="blue"
                        size="md"
                      >
                        Add Carrier
                      </Button>
                    </Flex>
                  </CardBody>
                </Card>

                {/* Carriers Table */}
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      Registered Carriers
                    </Heading>
                  </CardHeader>
                  <CardBody p={0}>
                    <Box overflowX="auto">
                      <Table variant="simple">
                        <Thead bg="gray.50">
                          <Tr>
                            <Th>Carrier Info</Th>
                            <Th>Contact</Th>
                            <Th>License</Th>
                            <Th>Vehicles</Th>
                            <Th>Rating</Th>
                            <Th>Status</Th>
                            <Th>Last Activity</Th>
                            <Th>Actions</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {carriersData.map((carrier) => {
                            const TypeIcon = getTypeIcon(carrier.type)
                            return (
                              <Tr key={carrier.id} _hover={{ bg: 'gray.50' }}>
                                <Td>
                                  <VStack align="start" spacing={1}>
                                    <HStack>
                                      <Icon as={TypeIcon} color="blue.500" size={16} />
                                      <Text fontWeight="medium" fontSize="sm">
                                        {carrier.name}
                                      </Text>
                                    </HStack>
                                    <Badge colorScheme="purple" size="xs">
                                      {carrier.type}
                                    </Badge>
                                  </VStack>
                                </Td>
                                <Td>
                                  <VStack align="start" spacing={1}>
                                    <Text fontSize="sm" fontWeight="medium">
                                      {carrier.contact}
                                    </Text>
                                    <Text fontSize="xs" color="gray.600">
                                      {carrier.phone}
                                    </Text>
                                    <Text fontSize="xs" color="blue.600">
                                      {carrier.email}
                                    </Text>
                                  </VStack>
                                </Td>
                                <Td>
                                  <Text fontSize="sm" fontFamily="mono">
                                    {carrier.license}
                                  </Text>
                                </Td>
                                <Td>
                                  <Badge colorScheme="gray" variant="solid">
                                    {carrier.vehicles} units
                                  </Badge>
                                </Td>
                                <Td>
                                  <HStack>
                                    <Text fontSize="sm" fontWeight="bold">
                                      {carrier.rating}
                                    </Text>
                                    <Text fontSize="xs" color="gray.500">
                                      ⭐
                                    </Text>
                                  </HStack>
                                </Td>
                                <Td>
                                  <Badge
                                    colorScheme={getStatusColor(carrier.status)}
                                    variant="subtle"
                                  >
                                    {carrier.status}
                                  </Badge>
                                </Td>
                                <Td>
                                  <HStack>
                                    <Icon as={Calendar} size={14} color="gray.400" />
                                    <Text fontSize="sm">
                                      {new Date(carrier.lastActivity).toLocaleDateString('id-ID')}
                                    </Text>
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
                                      <MenuItem icon={<Edit size={14} />}>
                                        Edit Carrier
                                      </MenuItem>
                                      <MenuItem icon={<Truck size={14} />}>
                                        View Vehicles
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
              </VStack>
            </TabPanel>

            {/* Vehicles Tab */}
            <TabPanel p={0} mt={4}>
              <VStack spacing={6} align="stretch">
                {/* Vehicles Filters */}
                <Card bg={cardBg} shadow="sm">
                  <CardBody>
                    <Flex gap={4} align="center" wrap="wrap">
                      <InputGroup maxW="300px">
                        <InputLeftElement pointerEvents="none">
                          <Icon as={Search} color="gray.400" />
                        </InputLeftElement>
                        <Input placeholder="Search vehicles..." />
                      </InputGroup>
                      
                      <Select maxW="200px" placeholder="All Vehicle Types">
                        <option value="truck">Truck</option>
                        <option value="vessel">Vessel</option>
                        <option value="aircraft">Aircraft</option>
                        <option value="train">Train</option>
                      </Select>

                      <Select maxW="200px" placeholder="All Status">
                        <option value="active">Active</option>
                        <option value="in_transit">In Transit</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="inactive">Inactive</option>
                      </Select>
                      
                      <Spacer />
                      
                      <Button
                        leftIcon={<Plus size={16} />}
                        colorScheme="blue"
                        size="md"
                      >
                        Add Vehicle
                      </Button>
                    </Flex>
                  </CardBody>
                </Card>

                {/* Vehicles Table */}
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      Fleet Management
                    </Heading>
                  </CardHeader>
                  <CardBody p={0}>
                    <Box overflowX="auto">
                      <Table variant="simple">
                        <Thead bg="gray.50">
                          <Tr>
                            <Th>Vehicle Info</Th>
                            <Th>Carrier</Th>
                            <Th>Driver/Operator</Th>
                            <Th>Capacity</Th>
                            <Th>Location</Th>
                            <Th>Status</Th>
                            <Th>Maintenance</Th>
                            <Th>Actions</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {vehiclesData.map((vehicle) => {
                            const TypeIcon = getTypeIcon(vehicle.type)
                            return (
                              <Tr key={vehicle.id} _hover={{ bg: 'gray.50' }}>
                                <Td>
                                  <VStack align="start" spacing={1}>
                                    <HStack>
                                      <Icon as={TypeIcon} color="blue.500" size={16} />
                                      <Text fontWeight="medium" fontSize="sm">
                                        {vehicle.plateNumber}
                                      </Text>
                                    </HStack>
                                    <Text fontSize="xs" color="gray.600">
                                      {vehicle.model}
                                    </Text>
                                    <Badge colorScheme="blue" size="xs">
                                      {vehicle.type}
                                    </Badge>
                                  </VStack>
                                </Td>
                                <Td>
                                  <Text fontSize="sm" maxW="150px" isTruncated>
                                    {vehicle.carrier}
                                  </Text>
                                </Td>
                                <Td>
                                  <HStack>
                                    <Avatar size="xs" name={vehicle.driver} />
                                    <Text fontSize="sm">{vehicle.driver}</Text>
                                  </HStack>
                                </Td>
                                <Td>
                                  <Badge colorScheme="gray" variant="outline">
                                    {vehicle.capacity}
                                  </Badge>
                                </Td>
                                <Td>
                                  <HStack>
                                    <Icon as={MapPin} size={14} color="gray.400" />
                                    <Text fontSize="sm" maxW="120px" isTruncated>
                                      {vehicle.location}
                                    </Text>
                                  </HStack>
                                </Td>
                                <Td>
                                  <Badge
                                    colorScheme={getStatusColor(vehicle.status)}
                                    variant="subtle"
                                  >
                                    {vehicle.status.replace('_', ' ')}
                                  </Badge>
                                </Td>
                                <Td>
                                  <VStack align="start" spacing={0}>
                                    <Text fontSize="xs" color="gray.500">
                                      Last: {new Date(vehicle.lastMaintenance).toLocaleDateString('id-ID')}
                                    </Text>
                                    <Text fontSize="xs" color="blue.600">
                                      Next: {new Date(vehicle.nextMaintenance).toLocaleDateString('id-ID')}
                                    </Text>
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
                                      <MenuItem icon={<Edit size={14} />}>
                                        Edit Vehicle
                                      </MenuItem>
                                      <MenuItem icon={<MapPin size={14} />}>
                                        Track Location
                                      </MenuItem>
                                      <MenuItem icon={<Clock size={14} />}>
                                        Schedule Maintenance
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
                  <Icon as={MapPin} color="blue.500" size={20} />
                  <Text fontWeight="semibold" color="blue.700">
                    Live Tracking
                  </Text>
                </HStack>
                <Text fontSize="sm" color="blue.600">
                  Monitor kendaraan secara real-time dengan GPS tracking
                </Text>
                <Button size="sm" colorScheme="blue" variant="outline">
                  Open Map
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
                    Performance Report
                  </Text>
                </HStack>
                <Text fontSize="sm" color="green.600">
                  Laporan kinerja pengangkut dan analisis efisiensi
                </Text>
                <Button size="sm" colorScheme="green" variant="outline">
                  Generate Report
                </Button>
              </VStack>
            </CardBody>
          </Card>

          <Card bg="orange.50" borderLeft="4px solid" borderColor="orange.500">
            <CardBody>
              <VStack align="start" spacing={3}>
                <HStack>
                  <Icon as={Clock} color="orange.500" size={20} />
                  <Text fontWeight="semibold" color="orange.700">
                    Maintenance Schedule
                  </Text>
                </HStack>
                <Text fontSize="sm" color="orange.600">
                  Kelola jadwal perawatan dan reminder maintenance
                </Text>
                <Button size="sm" colorScheme="orange" variant="outline">
                  View Schedule
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </VStack>
    </MainLayout>
  )
}