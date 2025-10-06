'use client'

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Select,
  Button,
  HStack,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Badge,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { TrendingUp, BarChart3, PieChart as PieChartIcon, Calendar, Download, RefreshCw } from 'lucide-react'
import { useState } from 'react'

// Sample data
const monthlyData = [
  { month: 'Jan', orders: 45, completed: 40, revenue: 2400000 },
  { month: 'Feb', orders: 52, completed: 48, revenue: 2800000 },
  { month: 'Mar', orders: 38, completed: 35, revenue: 2100000 },
  { month: 'Apr', orders: 61, completed: 58, revenue: 3200000 },
  { month: 'May', orders: 55, completed: 52, revenue: 2900000 },
  { month: 'Jun', orders: 48, completed: 45, revenue: 2600000 },
]

const documentTypeData = [
  { name: 'BC 1.6', value: 35, color: '#3182CE' },
  { name: 'BC 2.3', value: 25, color: '#38A169' },
  { name: 'BC 2.6.2', value: 20, color: '#D69E2E' },
  { name: 'BC 2.7', value: 15, color: '#E53E3E' },
  { name: 'BC 4.0', value: 5, color: '#805AD5' },
]

const weeklyActivityData = [
  { day: 'Sen', morning: 12, afternoon: 18, evening: 8 },
  { day: 'Sel', morning: 15, afternoon: 22, evening: 10 },
  { day: 'Rab', morning: 8, afternoon: 14, evening: 6 },
  { day: 'Kam', morning: 20, afternoon: 25, evening: 12 },
  { day: 'Jum', morning: 18, afternoon: 24, evening: 11 },
  { day: 'Sab', morning: 5, afternoon: 8, evening: 3 },
  { day: 'Min', morning: 2, afternoon: 4, evening: 1 },
]

const statusData = [
  { status: 'Completed', value: 65, color: '#38A169' },
  { status: 'Processing', value: 20, color: '#D69E2E' },
  { status: 'Draft', value: 10, color: '#3182CE' },
  { status: 'Rejected', value: 5, color: '#E53E3E' },
]

export default function AnalyticsCharts() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const toast = useToast()
  const [selectedPeriod, setSelectedPeriod] = useState('6months')
  const [isRefreshing, setIsRefreshing] = useState(false)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value)
  }

  const handleExport = () => {
    toast({
      title: 'Export Berhasil',
      description: 'Data analytics telah diexport ke file Excel',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsRefreshing(false)
    toast({
      title: 'Data Diperbarui',
      description: 'Analytics data berhasil diperbarui',
      status: 'info',
      duration: 3000,
      isClosable: true,
    })
  }

  const calculateGrowth = () => {
    const currentMonth = monthlyData[monthlyData.length - 1]
    const previousMonth = monthlyData[monthlyData.length - 2]
    const growth = ((currentMonth.orders - previousMonth.orders) / previousMonth.orders) * 100
    return growth.toFixed(1)
  }

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <VStack align="start" spacing={1}>
          <Heading size="md" color="gray.700">
            Analytics Dashboard
          </Heading>
          <HStack spacing={4}>
            <Badge colorScheme="green" variant="subtle">
              +{calculateGrowth()}% dari bulan lalu
            </Badge>
            <Text fontSize="sm" color="gray.500">
              Terakhir diperbarui: {new Date().toLocaleString('id-ID')}
            </Text>
          </HStack>
        </VStack>
        <HStack spacing={3}>
          <Select 
            w="150px" 
            size="sm" 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="7days">7 Hari</option>
            <option value="1month">1 Bulan</option>
            <option value="3months">3 Bulan</option>
            <option value="6months">6 Bulan</option>
            <option value="1year">1 Tahun</option>
          </Select>
          <Button 
            size="sm" 
            leftIcon={<RefreshCw size={16} />} 
            variant="outline"
            onClick={handleRefresh}
            isLoading={isRefreshing}
          >
            Refresh
          </Button>
          <Button 
            size="sm" 
            leftIcon={<Download size={16} />} 
            colorScheme="blue"
            onClick={handleExport}
          >
            Export
          </Button>
        </HStack>
      </Flex>

      {/* Key Metrics Cards */}
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={6}>
        <Card bg={cardBg} shadow="sm" size="sm">
          <CardBody>
            <Stat>
              <StatLabel fontSize="xs" color="gray.600">Total Orders</StatLabel>
              <StatNumber fontSize="lg" color="blue.500">324</StatNumber>
              <StatHelpText fontSize="xs">
                <TrendingUp size={12} style={{ display: 'inline', marginRight: '4px' }} />
                +12.5%
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>
        <Card bg={cardBg} shadow="sm" size="sm">
          <CardBody>
            <Stat>
              <StatLabel fontSize="xs" color="gray.600">Revenue</StatLabel>
              <StatNumber fontSize="lg" color="green.500">15.8M</StatNumber>
              <StatHelpText fontSize="xs">
                <TrendingUp size={12} style={{ display: 'inline', marginRight: '4px' }} />
                +8.2%
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>
        <Card bg={cardBg} shadow="sm" size="sm">
          <CardBody>
            <Stat>
              <StatLabel fontSize="xs" color="gray.600">Success Rate</StatLabel>
              <StatNumber fontSize="lg" color="green.500">94.2%</StatNumber>
              <StatHelpText fontSize="xs">
                <TrendingUp size={12} style={{ display: 'inline', marginRight: '4px' }} />
                +2.1%
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>
        <Card bg={cardBg} shadow="sm" size="sm">
          <CardBody>
            <Stat>
              <StatLabel fontSize="xs" color="gray.600">Avg. Processing</StatLabel>
              <StatNumber fontSize="lg" color="blue.500">2.4h</StatNumber>
              <StatHelpText fontSize="xs" color="red.500">
                +0.3h from last month
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={6}>
        {/* Monthly Orders Trend */}
        <Card bg={cardBg} shadow="sm" border="1px" borderColor={borderColor}>
          <CardHeader pb={3}>
            <HStack spacing={2}>
              <TrendingUp size={20} color="#3182CE" />
              <Heading size="sm" color="gray.700">
                Trend Order Bulanan
              </Heading>
            </HStack>
          </CardHeader>
          <CardBody pt={0}>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#718096' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#718096' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                  labelFormatter={(value) => `Bulan ${value}`}
                />
                <Area
                  type="monotone"
                  dataKey="orders"
                  stroke="#3182CE"
                  fill="#3182CE"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="completed"
                  stroke="#38A169"
                  fill="#38A169"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        {/* Revenue Chart */}
        <Card bg={cardBg} shadow="sm" border="1px" borderColor={borderColor}>
          <CardHeader pb={3}>
            <HStack spacing={2}>
              <BarChart3 size={20} color="#38A169" />
              <Heading size="sm" color="gray.700">
                Revenue Bulanan
              </Heading>
            </HStack>
          </CardHeader>
          <CardBody pt={0}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#718096' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#718096' }}
                  tickFormatter={(value) => `${value / 1000000}M`}
                />
                <Tooltip
                  formatter={(value: number) => [formatCurrency(value), 'Revenue']}
                  labelFormatter={(value) => `Bulan ${value}`}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Bar 
                  dataKey="revenue" 
                  fill="#38A169" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
        {/* Document Types Distribution */}
        <Card bg={cardBg} shadow="sm" border="1px" borderColor={borderColor}>
          <CardHeader pb={3}>
            <HStack spacing={2}>
              <PieChartIcon size={20} color="#D69E2E" />
              <Heading size="sm" color="gray.700">
                Distribusi Tipe Dokumen
              </Heading>
            </HStack>
          </CardHeader>
          <CardBody pt={0}>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={documentTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {documentTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                  wrapperStyle={{ fontSize: '12px' }}
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        {/* Weekly Activity */}
        <Card bg={cardBg} shadow="sm" border="1px" borderColor={borderColor}>
          <CardHeader pb={3}>
            <Heading size="sm" color="gray.700">
              Aktivitas Mingguan
            </Heading>
          </CardHeader>
          <CardBody pt={0}>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={weeklyActivityData} barCategoryGap="20%">
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#718096' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#718096' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    fontSize: '12px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="morning" stackId="a" fill="#3182CE" name="Pagi" />
                <Bar dataKey="afternoon" stackId="a" fill="#38A169" name="Siang" />
                <Bar dataKey="evening" stackId="a" fill="#D69E2E" name="Sore" />
              </BarChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        {/* Status Overview */}
        <Card bg={cardBg} shadow="sm" border="1px" borderColor={borderColor}>
          <CardHeader pb={3}>
            <Heading size="sm" color="gray.700">
              Status Overview
            </Heading>
          </CardHeader>
          <CardBody pt={0}>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                  wrapperStyle={{ fontSize: '12px' }}
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  )
}