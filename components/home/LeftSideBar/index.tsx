import { Box, Flex, VStack, Heading, Text, HStack, Progress, SimpleGrid, Button } from '@chakra-ui/react'
import React from 'react'
import { FiDownload, FiTwitter, FiMail, FiPhone } from 'react-icons/fi'

const SKILLS = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Nodejs', 'Reactjs', 'React Native', 'MySQL', 'MongoDB', 'Nestjs', 'Docker'];

const LeftSideBar = () => {
  return (
    <Flex w="full" h="auto" overflow="auto" bg="brand.white" px="20px" py="20px" direction="column">

       <VStack w="full" h="250px" spacing={3} py="20px" borderBottomWidth="2px" borderBottomColor="brand.grey">
            <Box w="100px" h="100px" rounded="full" bg="brand.grey" />
            <Heading as ='h4' size="md">Daniel Emmanuel</Heading>
            <Text fontSize="14px" color="grey">Fullstack Software Engineer</Text>

            <HStack spacing={3}>
                <HStack align="center" justify="center" w="30px" h="30px" bg="brand.grey" rounded="full">
                    <FiTwitter size={15} color="black" />
                </HStack>
                <HStack align="center" justify="center" w="30px" h="30px" bg="brand.grey" rounded="full">
                    <FiPhone size={15} color="black" />
                </HStack>
                <HStack align="center" justify="center" w="30px" h="30px" bg="brand.grey" rounded="full">
                    <FiMail size={15} color="black" />
                </HStack>
            </HStack>
       </VStack>

       <VStack w="full" spacing={5} py="20px" borderBottomWidth="2px" borderBottomColor="brand.grey">

            <HStack justify="space-between" w="full">
                <Text fontSize="15px">Age</Text>
                <Text>25</Text>
            </HStack>

            <HStack justify="space-between" w="full">
                <Text fontSize="15px">Residence</Text>
                <Text fontSize="14px" color="grey">Ada George</Text>
            </HStack>

            <HStack justify="space-between" w="full">
                <Text fontSize="15px">Freelance</Text>
                <Text fontSize="14px" color="green.400">Available</Text>
            </HStack>

            <HStack justify="space-between" w="full">
                <Text fontSize="15px">Address</Text>
                <Text fontSize="14px" color="grey">Camp David Street, Aluu</Text>
            </HStack>

       </VStack>

       <VStack align="flex-start" py="20px" w="full" borderBottomWidth="2px" borderBottomColor="brand.grey">
            <Heading size="md" as="h5">Languages</Heading>

            <HStack justify="space-between" w="full">
                <Text fontSize="15px" color="grey">English</Text>
                <Text fontSize="14px" color="grey">85%</Text>    
            </HStack>
            <Progress colorScheme="yellow" value={85} w="full" size="sm" />
       </VStack>

       <VStack w="full" align="flex-start" py="20px" borderBottomWidth="2px" borderBottomColor="brand.grey" maxH="190px" overflow="auto"> 
        <HStack justify="space-between" align="center" w="full">
            <Heading size="md" as="h5">Skills</Heading>
            <Button variant="solid" bg="brand.grey" mt="20px" borderRadius={0}>
                <Text mr="10px" fontSize="12px">DOWNLOAD CV</Text>
                <FiDownload size={20} color="black" />
            </Button>
        </HStack>
        <SimpleGrid columns={2} w="full">
            {SKILLS.map((item, index) => (
                <Text key={index.toString()} my="10px" bg="brand.grey" mx="4px" p="10px" fontSize="14px" color="grey">{item}</Text>
            ))}
        </SimpleGrid>
       </VStack>

       
    
    </Flex>
  )
}

export default LeftSideBar
