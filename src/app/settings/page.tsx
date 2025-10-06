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
  FormControl,
  FormLabel,
  Input,
  Select,
  Switch,
  useColorModeValue,
  Flex,
  Spacer,
  Icon,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Divider,
  Textarea,
  Alert,
  AlertIcon,
  useToast,
} from '@chakra-ui/react'
import { 
  User,
  Building,
  Shield,
  Bell,
  Palette,
  Globe,
  Key,
  Download,
  Upload,
  RefreshCw,
  Save,
  Settings as SettingsIcon,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Database
} from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import { useState } from 'react'

const userProfile = {
  name: 'Kensington',
  email: 'kensington@company.com',
  phone: '+62-21-1234567',
  role: 'Administrator',
  department: 'Customs Operations',
  joinDate: '2023-01-15',
  lastLogin: '2025-01-15T09:30:00Z',
  avatar: '',
}

const companyInfo = {
  name: 'PT. Java Logistics Indonesia',
  address: 'Jl. Raya Tanjung Priok No. 123, Jakarta Utara 14310',
  phone: '+62-21-4567890',
  email: 'info@javalogstics.co.id',
  npwp: '01.234.567.8-901.000',
  nib: '1234567890123456',
  customsLicense: 'PPJK-001/2024',
  businessType: 'Freight Forwarding',
}

export default function SettingsPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const toast = useToast()
  const [loading, setLoading] = useState(false)

  const handleSave = async (section: string) => {
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
    
    toast({
      title: 'Settings Updated',
      description: `${section} settings have been saved successfully.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <MainLayout>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="lg" mb={2} color="gray.700">
            Pengaturan
          </Heading>
          <Text color="gray.600">
            Kelola profil pengguna, pengaturan sistem, dan konfigurasi aplikasi
          </Text>
        </Box>

        {/* Tabs */}
        <Tabs variant="enclosed" colorScheme="blue">
          <TabList overflowX="auto">
            <Tab>
              <HStack spacing={2}>
                <Icon as={User} size={16} />
                <Text>Profile</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack spacing={2}>
                <Icon as={Building} size={16} />
                <Text>Company</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack spacing={2}>
                <Icon as={Shield} size={16} />
                <Text>Security</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack spacing={2}>
                <Icon as={Bell} size={16} />
                <Text>Notifications</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack spacing={2}>
                <Icon as={SettingsIcon} size={16} />
                <Text>System</Text>
              </HStack>
            </Tab>
          </TabList>

          <TabPanels>
            {/* Profile Tab */}
            <TabPanel p={0} mt={4}>
              <VStack spacing={6} align="stretch">
                {/* Profile Info */}
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <HStack spacing={4}>
                      <Avatar size="lg" name={userProfile.name} bg="blue.500" />
                      <VStack align="start" spacing={1}>
                        <Heading size="md" color="gray.700">
                          {userProfile.name}
                        </Heading>
                        <Text color="gray.600">{userProfile.role}</Text>
                        <Badge colorScheme="green">Active</Badge>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardBody>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                      <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input defaultValue={userProfile.name} />
                      </FormControl>
                      
                      <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input defaultValue={userProfile.email} type="email" />
                      </FormControl>
                      
                      <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                        <Input defaultValue={userProfile.phone} />
                      </FormControl>
                      
                      <FormControl>
                        <FormLabel>Department</FormLabel>
                        <Select defaultValue={userProfile.department}>
                          <option value="Customs Operations">Customs Operations</option>
                          <option value="Finance">Finance</option>
                          <option value="Logistics">Logistics</option>
                          <option value="Administration">Administration</option>
                        </Select>
                      </FormControl>
                      
                      <FormControl>
                        <FormLabel>Join Date</FormLabel>
                        <Input 
                          defaultValue={userProfile.joinDate} 
                          type="date"
                          isReadOnly 
                          bg="gray.50"
                        />
                      </FormControl>
                      
                      <FormControl>
                        <FormLabel>Last Login</FormLabel>
                        <Input 
                          defaultValue={new Date(userProfile.lastLogin).toLocaleString('id-ID')}
                          isReadOnly 
                          bg="gray.50"
                        />
                      </FormControl>
                    </SimpleGrid>
                    
                    <Flex mt={6}>
                      <Spacer />
                      <Button 
                        colorScheme="blue" 
                        leftIcon={<Save size={16} />}
                        onClick={() => handleSave('Profile')}
                        isLoading={loading}
                      >
                        Save Profile
                      </Button>
                    </Flex>
                  </CardBody>
                </Card>
              </VStack>
            </TabPanel>

            {/* Company Tab */}
            <TabPanel p={0} mt={4}>
              <VStack spacing={6} align="stretch">
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      Company Information
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <VStack spacing={6} align="stretch">
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                        <FormControl>
                          <FormLabel>Company Name</FormLabel>
                          <Input defaultValue={companyInfo.name} />
                        </FormControl>
                        
                        <FormControl>
                          <FormLabel>Business Type</FormLabel>
                          <Select defaultValue={companyInfo.businessType}>
                            <option value="Freight Forwarding">Freight Forwarding</option>
                            <option value="Import/Export">Import/Export</option>
                            <option value="Customs Broker">Customs Broker</option>
                            <option value="Logistics">Logistics</option>
                          </Select>
                        </FormControl>
                        
                        <FormControl>
                          <FormLabel>Email</FormLabel>
                          <Input defaultValue={companyInfo.email} type="email" />
                        </FormControl>
                        
                        <FormControl>
                          <FormLabel>Phone</FormLabel>
                          <Input defaultValue={companyInfo.phone} />
                        </FormControl>
                        
                        <FormControl>
                          <FormLabel>NPWP</FormLabel>
                          <Input defaultValue={companyInfo.npwp} />
                        </FormControl>
                        
                        <FormControl>
                          <FormLabel>NIB</FormLabel>
                          <Input defaultValue={companyInfo.nib} />
                        </FormControl>
                        
                        <FormControl>
                          <FormLabel>Customs License</FormLabel>
                          <Input defaultValue={companyInfo.customsLicense} />
                        </FormControl>
                        
                        <FormControl>
                          <FormLabel>License Expiry</FormLabel>
                          <Input type="date" defaultValue="2025-12-31" />
                        </FormControl>
                      </SimpleGrid>
                      
                      <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Textarea defaultValue={companyInfo.address} rows={3} />
                      </FormControl>
                      
                      <Flex>
                        <Spacer />
                        <Button 
                          colorScheme="blue" 
                          leftIcon={<Save size={16} />}
                          onClick={() => handleSave('Company')}
                          isLoading={loading}
                        >
                          Save Company Info
                        </Button>
                      </Flex>
                    </VStack>
                  </CardBody>
                </Card>
              </VStack>
            </TabPanel>

            {/* Security Tab */}
            <TabPanel p={0} mt={4}>
              <VStack spacing={6} align="stretch">
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      Security Settings
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <VStack spacing={6} align="stretch">
                      <Alert status="info" borderRadius="md">
                        <AlertIcon />
                        <VStack align="start" spacing={1}>
                          <Text fontWeight="medium">Security Recommendation</Text>
                          <Text fontSize="sm">
                            Update your password regularly and enable two-factor authentication for better security.
                          </Text>
                        </VStack>
                      </Alert>

                      <Divider />

                      <VStack spacing={4} align="stretch">
                        <Heading size="sm" color="gray.700">
                          Change Password
                        </Heading>
                        
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                          <FormControl>
                            <FormLabel>Current Password</FormLabel>
                            <Input type="password" placeholder="Enter current password" />
                          </FormControl>
                          
                          <FormControl>
                            <FormLabel>New Password</FormLabel>
                            <Input type="password" placeholder="Enter new password" />
                          </FormControl>
                        </SimpleGrid>
                        
                        <FormControl maxW="md">
                          <FormLabel>Confirm New Password</FormLabel>
                          <Input type="password" placeholder="Confirm new password" />
                        </FormControl>
                        
                        <Button 
                          colorScheme="blue" 
                          maxW="200px"
                          leftIcon={<Key size={16} />}
                        >
                          Update Password
                        </Button>
                      </VStack>

                      <Divider />

                      <VStack spacing={4} align="stretch">
                        <Heading size="sm" color="gray.700">
                          Two-Factor Authentication
                        </Heading>
                        
                        <HStack justify="space-between" p={4} bg="gray.50" borderRadius="md">
                          <VStack align="start" spacing={1}>
                            <Text fontWeight="medium">SMS Authentication</Text>
                            <Text fontSize="sm" color="gray.600">
                              Receive verification codes via SMS
                            </Text>
                          </VStack>
                          <Switch size="lg" colorScheme="blue" />
                        </HStack>
                        
                        <HStack justify="space-between" p={4} bg="gray.50" borderRadius="md">
                          <VStack align="start" spacing={1}>
                            <Text fontWeight="medium">Email Authentication</Text>
                            <Text fontSize="sm" color="gray.600">
                              Receive verification codes via email
                            </Text>
                          </VStack>
                          <Switch size="lg" colorScheme="blue" isChecked />
                        </HStack>
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              </VStack>
            </TabPanel>

            {/* Notifications Tab */}
            <TabPanel p={0} mt={4}>
              <VStack spacing={6} align="stretch">
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      Notification Preferences
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <VStack spacing={6} align="stretch">
                      <VStack spacing={4} align="stretch">
                        <Heading size="sm" color="gray.700">
                          Email Notifications
                        </Heading>
                        
                        <HStack justify="space-between" p={4} bg="gray.50" borderRadius="md">
                          <VStack align="start" spacing={1}>
                            <Text fontWeight="medium">Document Status Updates</Text>
                            <Text fontSize="sm" color="gray.600">
                              Get notified when document status changes
                            </Text>
                          </VStack>
                          <Switch size="lg" colorScheme="blue" isChecked />
                        </HStack>
                        
                        <HStack justify="space-between" p={4} bg="gray.50" borderRadius="md">
                          <VStack align="start" spacing={1}>
                            <Text fontWeight="medium">Payment Reminders</Text>
                            <Text fontSize="sm" color="gray.600">
                              Receive payment due date reminders
                            </Text>
                          </VStack>
                          <Switch size="lg" colorScheme="blue" isChecked />
                        </HStack>
                        
                        <HStack justify="space-between" p={4} bg="gray.50" borderRadius="md">
                          <VStack align="start" spacing={1}>
                            <Text fontWeight="medium">System Maintenance</Text>
                            <Text fontSize="sm" color="gray.600">
                              Get notified about system updates and maintenance
                            </Text>
                          </VStack>
                          <Switch size="lg" colorScheme="blue" />
                        </HStack>
                      </VStack>

                      <Divider />

                      <VStack spacing={4} align="stretch">
                        <Heading size="sm" color="gray.700">
                          Push Notifications
                        </Heading>
                        
                        <HStack justify="space-between" p={4} bg="gray.50" borderRadius="md">
                          <VStack align="start" spacing={1}>
                            <Text fontWeight="medium">Real-time Alerts</Text>
                            <Text fontSize="sm" color="gray.600">
                              Instant notifications for urgent matters
                            </Text>
                          </VStack>
                          <Switch size="lg" colorScheme="blue" isChecked />
                        </HStack>
                        
                        <HStack justify="space-between" p={4} bg="gray.50" borderRadius="md">
                          <VStack align="start" spacing={1}>
                            <Text fontWeight="medium">Weekly Summary</Text>
                            <Text fontSize="sm" color="gray.600">
                              Weekly report of your activities
                            </Text>
                          </VStack>
                          <Switch size="lg" colorScheme="blue" />
                        </HStack>
                      </VStack>
                      
                      <Flex>
                        <Spacer />
                        <Button 
                          colorScheme="blue" 
                          leftIcon={<Save size={16} />}
                          onClick={() => handleSave('Notification')}
                          isLoading={loading}
                        >
                          Save Preferences
                        </Button>
                      </Flex>
                    </VStack>
                  </CardBody>
                </Card>
              </VStack>
            </TabPanel>

            {/* System Tab */}
            <TabPanel p={0} mt={4}>
              <VStack spacing={6} align="stretch">
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      System Configuration
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <VStack spacing={6} align="stretch">
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                        <FormControl>
                          <FormLabel>Language</FormLabel>
                          <Select defaultValue="id">
                            <option value="id">Bahasa Indonesia</option>
                            <option value="en">English</option>
                          </Select>
                        </FormControl>
                        
                        <FormControl>
                          <FormLabel>Timezone</FormLabel>
                          <Select defaultValue="Asia/Jakarta">
                            <option value="Asia/Jakarta">Asia/Jakarta (WIB)</option>
                            <option value="Asia/Makassar">Asia/Makassar (WITA)</option>
                            <option value="Asia/Jayapura">Asia/Jayapura (WIT)</option>
                          </Select>
                        </FormControl>
                        
                        <FormControl>
                          <FormLabel>Date Format</FormLabel>
                          <Select defaultValue="DD/MM/YYYY">
                            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                          </Select>
                        </FormControl>
                        
                        <FormControl>
                          <FormLabel>Currency</FormLabel>
                          <Select defaultValue="IDR">
                            <option value="IDR">Indonesian Rupiah (IDR)</option>
                            <option value="USD">US Dollar (USD)</option>
                          </Select>
                        </FormControl>
                      </SimpleGrid>
                      
                      <Divider />
                      
                      <VStack spacing={4} align="stretch">
                        <Heading size="sm" color="gray.700">
                          Data Management
                        </Heading>
                        
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
                          <Button 
                            leftIcon={<Download size={16} />}
                            variant="outline"
                            colorScheme="blue"
                          >
                            Export Data
                          </Button>
                          
                          <Button 
                            leftIcon={<Upload size={16} />}
                            variant="outline"
                            colorScheme="green"
                          >
                            Import Data
                          </Button>
                          
                          <Button 
                            leftIcon={<RefreshCw size={16} />}
                            variant="outline"
                            colorScheme="orange"
                          >
                            Refresh Cache
                          </Button>
                          
                          <Button 
                            leftIcon={<Database size={16} />}
                            variant="outline"
                            colorScheme="purple"
                          >
                            Backup System
                          </Button>
                        </SimpleGrid>
                      </VStack>
                      
                      <Flex>
                        <Spacer />
                        <Button 
                          colorScheme="blue" 
                          leftIcon={<Save size={16} />}
                          onClick={() => handleSave('System')}
                          isLoading={loading}
                        >
                          Save Configuration
                        </Button>
                      </Flex>
                    </VStack>
                  </CardBody>
                </Card>

                {/* System Info */}
                <Card bg={cardBg} shadow="sm">
                  <CardHeader>
                    <Heading size="md" color="gray.700">
                      System Information
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                      <VStack align="start" spacing={2}>
                        <Text fontSize="sm" color="gray.600">Version</Text>
                        <Text fontWeight="bold">2.1.0</Text>
                      </VStack>
                      
                      <VStack align="start" spacing={2}>
                        <Text fontSize="sm" color="gray.600">Last Update</Text>
                        <Text fontWeight="bold">15 Jan 2025</Text>
                      </VStack>
                      
                      <VStack align="start" spacing={2}>
                        <Text fontSize="sm" color="gray.600">Server Status</Text>
                        <Badge colorScheme="green">Online</Badge>
                      </VStack>
                      
                      <VStack align="start" spacing={2}>
                        <Text fontSize="sm" color="gray.600">API Status</Text>
                        <Badge colorScheme="green">Connected</Badge>
                      </VStack>
                    </SimpleGrid>
                  </CardBody>
                </Card>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </MainLayout>
  )
}