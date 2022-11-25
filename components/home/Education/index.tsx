import { Flex, Heading, HStack, Text, Box, VStack } from '@chakra-ui/react'
import React from 'react'

const Education = () => {
  return (
    <Flex direction="column" py="40px" px="20px">
        <Heading textAlign="center">Education</Heading>

        <Flex justify="center">
            <Text textAlign="center" mt="20px" color="grey" w={['100%', '50%']} fontSize="14px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius, qui sit possimus ad blanditiis iure hic! Culpa pariatur, sapiente perferendis labore fugiat, eveniet id consequatur vero qui consectetur facere, minima ducimus illo nulla hic porro rerum laudantium a dicta quaerat eligendi quis. Eius molestiae perspiciatis sequi in rerum delectus.
            </Text>
        </Flex>

        <HStack w="full" justify="center" mt="40px">
            <Box w={['100%', "85%"]} h="auto" bg="brand.white" p="20px">

                <Flex direction={['column', 'row']} align="flex-start" py="20px" borderBottomWidth="2px" borderBottomColor="brand.grey">

                    <VStack align="flex-start" flex="0.3" spacing={5}>
                        <Text fontSize="18px" fontWeight="bold" color="black">BSC Computer Science</Text>
                        <HStack>
                            <Text fontSize="14px" color="grey">Student</Text>
                            <Text fontSize="14px" color="grey" bg="brand.yellow">Jan 2016 - Dec 2019</Text>
                        </HStack>
                    </VStack>

                    <VStack flex="0.7" align="flex-start" spacing={5} ml={['0', "20px"]} mt={["30px", '0']}>
                        <Text fontSize="18px" fontWeight="bold" color="black">University of toronto</Text>
                        <Text fontSize="14px" color="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum cum reiciendis, iusto esse tempore natus maxime distinctio quas autem! Laudantium iure sequi hic magnam accusamus corporis rerum consequatur quam officiis quod ullam illo tempora, amet quaerat, eaque vitae delectus consectetur impedit. Unde adipisci tempore perspiciatis itaque quas qui amet praesentium quam impedit! Nihil nobis nesciunt pariatur eius quos debitis incidunt voluptatum, perferendis velit non accusamus. Distinctio, libero! Voluptatum architecto nobis quia? Sed corrupti eveniet dolor minus eos repudiandae nesciunt non voluptatibus error labore recusandae quasi cum earum ipsam repellat molestias harum quos, unde expedita quod autem amet exercitationem veniam.</Text>
                    </VStack>

                </Flex>

            </Box>
        </HStack>

    </Flex>
  )
}

export default Education
