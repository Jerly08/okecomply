'use client'

import {
  Box,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Progress,
  Flex,
  Divider,
} from '@chakra-ui/react'
import { FileText, Package, TrendingUp, Clock, CheckCircle, AlertTriangle } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import AnalyticsCharts from '@/components/dashboard/AnalyticsCharts'
import Link from 'next/link'

const statsData = [
  {
    label: 'Total Order',
    value: '6',
    helpText: 'Active orders',
    icon: FileText,
    color: 'blue.500',
    bgColor: 'blue.50',
  },
  {
    label: 'Draft',
    value: '5',
    helpText: 'Pending completion',
    icon: Clock,
    color: 'orange.500',
    bgColor: 'orange.50',
  },
  {
    label: 'Terkirim',
    value: '1',
    helpText: 'Successfully sent',
    icon: CheckCircle,
    color: 'green.500',
    bgColor: 'green.50',
  },
  {
    label: 'Waiting BG',
    value: '0',
    helpText: 'Bank guarantee pending',
    icon: AlertTriangle,
    color: 'red.500',
    bgColor: 'red.50',
  },
]

const documentTypes = [
  {
    title: 'Document BC 2.3',
    subtitle: 'Impor untuk dipakai',
    status: 'Coming Soon',
    color: 'purple',
  },
  {
    title: 'Document BC 2.6.2',
    subtitle: 'Impor sementara',
    status: 'Coming Soon',
    color: 'pink',
  },
  {
    title: 'Document BC 1.6',
    subtitle: 'Kawasan berikat',
    status: 'Active',
    color: 'blue',
    href: '/self-declare',
  },
  {
    title: 'Document BC 2.6.1',
    subtitle: 'Ekspor sementara',
    status: 'Coming Soon',
    color: 'teal',
  },
  {
    title: 'Document BC 2.7',
    subtitle: 'Ekspor definitif',
    status: 'Coming Soon',
    color: 'cyan',
  },
  {
    title: 'Document BC 4.0',
    subtitle: 'Cukai',
    status: 'Coming Soon',
    color: 'green',
  },
]

export default function Dashboard() {
  const cardBg = useColorModeValue('white', 'gray.800')
  
  return (
    <MainLayout>
      <VStack spacing={8} align="stretch">
        {/* Welcome Header */}
        <Box>
          <Heading size="lg" mb={2} color="gray.700">
            Halo, Kensington 👋
          </Heading>
          <Text color="gray.600">
            Welcome again! Jangan Lupa Senyum
          </Text>
        </Box>
        
        {/* Statistics Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {statsData.map((stat, index) => (
            <Card key={index} bg={cardBg} shadow="sm" borderRadius="xl">
              <CardBody>
                <HStack spacing={4}>
                  <Box
                    p={3}
                    bg={stat.bgColor}
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={stat.icon} color={stat.color} size={24} />
                  </Box>
                  <Stat>
                    <StatLabel fontSize="sm" color="gray.600">
                      {stat.label}
                    </StatLabel>
                    <StatNumber fontSize="2xl" fontWeight="bold" color="gray.800">
                      {stat.value}
                    </StatNumber>
                    <StatHelpText fontSize="xs" color="gray.500">
                      {stat.helpText}
                    </StatHelpText>
                  </Stat>
                </HStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
        
        {/* Analytics Charts Section */}
        <AnalyticsCharts />
        
        <Divider />
        
        {/* Document Types Grid */}
        <Box>
          <Heading size="md" mb={6} color="gray.700">
            Kawasan Berikat
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {documentTypes.map((doc, index) => (
              <Card
                key={index}
                bg={cardBg}
                shadow="sm"
                borderRadius="xl"
                _hover={{
                  transform: doc.status === 'Active' ? 'translateY(-2px)' : 'none',
                  shadow: doc.status === 'Active' ? 'md' : 'sm',
                  transition: 'all 0.2s',
                }}
                cursor={doc.status === 'Active' ? 'pointer' : 'default'}
                opacity={doc.status === 'Coming Soon' ? 0.6 : 1}
              >
                <CardBody>
                  <VStack align="stretch" spacing={4}>
                    <HStack justify="space-between">
                      <Badge
                        colorScheme={doc.color}
                        variant={doc.status === 'Active' ? 'solid' : 'subtle'}
                      >
                        {doc.status}
                      </Badge>
                      {doc.status === 'Active' && (
                        <Icon as={CheckCircle} color="green.500" size={16} />
                      )}
                    </HStack>
                    <Box>
                      <Text fontWeight="semibold" color="gray.800" fontSize="lg">
                        {doc.title}
                      </Text>
                      <Text color="gray.600" fontSize="sm" mt={1}>
                        {doc.subtitle}
                      </Text>
                    </Box>
                    {doc.status === 'Active' && doc.href && (
                      <Link href={doc.href}>
                        <Button
                          colorScheme="blue"
                          size="sm"
                          width="full"
                          mt={2}
                        >
                          Mulai Deklarasi
                        </Button>
                      </Link>
                    )}
                    {doc.status === 'Coming Soon' && (
                      <Button
                        size="sm"
                        width="full"
                        mt={2}
                        isDisabled
                        variant="outline"
                      >
                        Coming Soon
                      </Button>
                    )}
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
        
        {/* Recent Activity */}
        <Card bg={cardBg} shadow="sm" borderRadius="xl">
          <CardHeader>
            <Heading size="md" color="gray.700">
              Recent Activity
            </Heading>
          </CardHeader>
          <CardBody>
            <VStack align="stretch" spacing={4}>
              <HStack justify="space-between" p={3} bg="blue.50" borderRadius="md">
                <HStack spacing={3}>
                  <Icon as={FileText} color="blue.500" />
                  <Box>
                    <Text fontWeight="medium" color="gray.800">
                      BC 1.6 - PEMBERITAHUAN PABEAN PENGELUARAN BARANG
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Reference: OKECOMPLYTEST012025
                    </Text>
                  </Box>
                </HStack>
                <Badge colorScheme="blue">DRAFT</Badge>
              </HStack>
              
              <HStack justify="space-between" p={3} bg="green.50" borderRadius="md">
                <HStack spacing={3}>
                  <Icon as={CheckCircle} color="green.500" />
                  <Box>
                    <Text fontWeight="medium" color="gray.800">
                      BC 1.6 - PEMBERITAHUAN PABEAN PENGELUARAN BARANG
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Reference: OKECOMPLYTEST012024
                    </Text>
                  </Box>
                </HStack>
                <Badge colorScheme="green">COMPLETED</Badge>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </MainLayout>
  )
}
