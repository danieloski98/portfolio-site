import { Flex, VStack, Text, Box, Input, Textarea, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { FiMap, FiMail, FiPhone } from 'react-icons/fi'

const Contact = () => {
  return (
    <Flex w="full" h="auto" justify='center' >
        <Flex direction={['column', 'row']}  w="85%" h="full" p={['0px', "0px"]}>
            <VStack flex="0.6" align="flex-start" spacing={5}>
                <Text fontWeight="bold" color="black" fontSize="18px">Leave a message</Text>
                <VStack w="full" h="full" bg="brand.white" justify="center" px="30px" spacing={5} pt="40px" mt="20px" pb="20px" align="flex-start">

                    <VStack w="full" align="flex-start">
                        <Text fontSize='15px' color="grey">Name</Text>
                        <Input h="50px" bg="brand.grey" borderRadius={0} />
                    </VStack>

                    <VStack w="full" align="flex-start" mb="20px">
                        <Text fontSize='15px' color="grey">Email</Text>
                        <Input h="50px" bg="brand.grey" borderRadius={0} />
                    </VStack>

                    <VStack w="full" align="flex-start" mb="20px">
                        <Text fontSize='15px' color="grey">Subject</Text>
                        <Input h="50px" bg="brand.grey" borderRadius={0} />
                    </VStack>

                    <VStack w="full" align="flex-start" mb="20px">
                        <Text fontSize='15px' color="grey">Subject</Text>
                        <Textarea bg="brand.grey" borderRadius={0} />
                    </VStack>

                    <Button variant="solid" bg="brand.yellow" h="55px" borderRadius="0">Submit</Button>

                </VStack>
            </VStack>

            <VStack flex="0.4" spacing={5} ml={['0', "20px"]} align="flex-start"  mt={['40px', '0']}>
                <Text fontWeight="bold" color="black" fontSize="18px">Contact Information</Text>

                <VStack w="full" h="auto" bg="brand.white" py="20px" px="20px" spacing={6}>
                    <HStack w="full" justify="center">
                        <Flex justify="center" align="center" w="60px" height="60px" bg="brand.yellow" borderRadius="full">
                            <FiMap size={25} color="black" />
                        </Flex>
                    </HStack>

                    <HStack w="full" justify="space-between">
                        <Text fontSize="18px" fontWeight="bold" color="grey">Country</Text>
                        <Text fontSize="18px" fontWeight="500" color="grey">Nigeria</Text>
                    </HStack>

                    <HStack w="full" justify="space-between">
                        <Text fontSize="18px" fontWeight="bold" color="grey">Country</Text>
                        <Text fontSize="18px" fontWeight="500" color="grey">Nigeria</Text>
                    </HStack>

                    <HStack w="full" justify="space-between">
                        <Text fontSize="18px" fontWeight="bold" color="grey">Country</Text>
                        <Text fontSize="18px" fontWeight="500" color="grey">Nigeria</Text>
                    </HStack>
                </VStack>

                <VStack w="full" h="auto" bg="brand.white" py="20px" px="20px" spacing={6}>
                    <HStack w="full" justify="center">
                        <Flex justify="center" align="center" w="60px" height="60px" bg="brand.yellow" borderRadius="full">
                            <FiMail size={25} color="black" />
                        </Flex>
                    </HStack>

                    <HStack w="full" justify="space-between">
                        <Text fontSize="18px" fontWeight="bold" color="grey">Country</Text>
                        <Text fontSize="18px" fontWeight="500" color="grey">Nigeria</Text>
                    </HStack>

                    <HStack w="full" justify="space-between">
                        <Text fontSize="18px" fontWeight="bold" color="grey">Country</Text>
                        <Text fontSize="18px" fontWeight="500" color="grey">Nigeria</Text>
                    </HStack>

                    <HStack w="full" justify="space-between">
                        <Text fontSize="18px" fontWeight="bold" color="grey">Country</Text>
                        <Text fontSize="18px" fontWeight="500" color="grey">Nigeria</Text>
                    </HStack>
                </VStack>

                <VStack w="full" h="auto" bg="brand.white" py="20px" px="20px" spacing={6}>
                    <HStack w="full" justify="center">
                        <Flex justify="center" align="center" w="60px" height="60px" bg="brand.yellow" borderRadius="full">
                            <FiPhone size={25} color="black" />
                        </Flex>
                    </HStack>

                    <HStack w="full" justify="space-between">
                        <Text fontSize="18px" fontWeight="bold" color="grey">Country</Text>
                        <Text fontSize="18px" fontWeight="500" color="grey">Nigeria</Text>
                    </HStack>

                    <HStack w="full" justify="space-between">
                        <Text fontSize="18px" fontWeight="bold" color="grey">Country</Text>
                        <Text fontSize="18px" fontWeight="500" color="grey">Nigeria</Text>
                    </HStack>

                    <HStack w="full" justify="space-between">
                        <Text fontSize="18px" fontWeight="bold" color="grey">Country</Text>
                        <Text fontSize="18px" fontWeight="500" color="grey">Nigeria</Text>
                    </HStack>
                </VStack>

            </VStack>    
        </Flex>
    </Flex>
  )
}

export default Contact
