import { Box, Flex, VStack, Heading, Text, HStack, Progress, SimpleGrid, Button } from '@chakra-ui/react'
import React from 'react'
import { FiDownload, FiTwitter, FiMail, FiPhone } from 'react-icons/fi'

const SKILLS = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Nodejs', 'Reactjs', 'React Native', 'MySQL', 'MongoDB', 'Nestjs', 'Docker'];

const LeftSideBar = () => {
  return (
    <Flex w="full" h="full" bg="brand.white" px="20px" py="20px" direction="column">

       <VStack w="full" h="250px" spacing={3} py="20px" borderBottomWidth="2px" borderBottomColor="brand.grey">
            <Box w="100px" h="100px" rounded="full" bg="brand.grey" />
            <Heading as ='h4' size="md">Daniel Emmanuel</Heading>
            <Text>Fullstack Software Engineer</Text>

            <HStack spacing={3}>
                <HStack align="center" justify="center" w="30px" h="30px" bg="brand.yellow" rounded="full">
                    <FiTwitter size={15} color="black" />
                </HStack>
                <HStack align="center" justify="center" w="30px" h="30px" bg="brand.yellow" rounded="full">
                    <FiPhone size={15} color="black" />
                </HStack>
                <HStack align="center" justify="center" w="30px" h="30px" bg="brand.yellow" rounded="full">
                    <FiMail size={15} color="black" />
                </HStack>
            </HStack>
       </VStack>

       <VStack w="full" spacing={5} py="20px" borderBottomWidth="2px" borderBottomColor="brand.grey">

            <HStack justify="space-between" w="full">
                <Text bg="brand.yellow" fontSize="lg">Age:</Text>
                <Text>25</Text>
            </HStack>

            <HStack justify="space-between" w="full">
                <Text bg="brand.yellow" fontSize="lg">Residence</Text>
                <Text>Ada George</Text>
            </HStack>

            <HStack justify="space-between" w="full">
                <Text bg="brand.yellow" fontSize="lg">Freelance</Text>
                <Text color="green.400">Available</Text>
            </HStack>

            <HStack justify="space-between" w="full">
                <Text bg="brand.yellow" fontSize="lg">Address</Text>
                <Text>Camp David Street, Aluu</Text>
            </HStack>

       </VStack>

       <VStack align="flex-start" py="20px" w="full" borderBottomWidth="2px" borderBottomColor="brand.grey">
            <Heading size="md" as="h5">Languages</Heading>

            <HStack justify="space-between" w="full">
                <Text fontSize="lg">English</Text>
                <Text>85%</Text>    
            </HStack>
            <Progress colorScheme="yellow" value={85} w="full" size="sm" />
       </VStack>

       <VStack w="full" align="flex-start" py="20px" borderBottomWidth="2px" borderBottomColor="brand.grey" maxH="200px" overflow="auto"> 
        <Heading size="md" as="h5">Skills</Heading>
        <SimpleGrid columns={2} w="full">
            {SKILLS.map((item, index) => (
                <Text key={index.toString()} my="10px" bg="brand.grey" mx="4px" p="10px">{item}</Text>
            ))}
        </SimpleGrid>
       </VStack>

       <Button h="55px" bg="brand.yellow" mt="20px" borderRadius={0}>
        <Text mr="10px">DOWNLOAD CV</Text>
        <FiDownload size={20} color="black" />
       </Button>
    
    </Flex>
  )
}

export default LeftSideBar
