import { Flex, Heading, SimpleGrid, Text, Box, VStack } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <Flex w="full" h="auto" direction="column" py="40px" px={['20px', '0']}>
        <Heading textAlign="center">My Services</Heading>
        <Flex justify="center">
            <Text textAlign="center" mt="20px" color="grey" w={['100%', '50%']} fontSize="14px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius, qui sit possimus ad blanditiis iure hic! Culpa pariatur, sapiente perferendis labore fugiat, eveniet id consequatur vero qui consectetur facere, minima ducimus illo nulla hic porro rerum laudantium a dicta quaerat eligendi quis. Eius molestiae perspiciatis sequi in rerum delectus.
            </Text>
        </Flex>

        <SimpleGrid columns={[1, 3]} spacing={5} mt="40px" >
            <VStack w="full" h="250px" bg="brand.white" p="20px" justify="center">
                <Image alt="codeing" src="/Icons/illustration.svg" width={80} height={80} />
                <Heading size="md" as="h4" color="grey">Web Development</Heading>
                <Text color="grey" mt="20px" fontSize="14px">Landing Pages, WebApps, Blogs etc</Text>
            </VStack>

            <VStack w="full" h="250px" bg="brand.white" p="20px" justify="center">
                <Image alt="codeing" src="/Icons/coding.svg" width={80} height={80} />
                <Heading size="md" as="h4" color="grey" textAlign="center">Server Development and Maintance</Heading>
                <Text color="grey" mt="20px" fontSize="14px">Backend Systems, Database Maintance etc</Text>
            </VStack>
    
            <VStack w="full" h="250px" bg="brand.white" p="20px" justify="center" align="center">
                <Image alt="codeing" src="/Icons/game-development.svg" width={80} height={80} />
                <Heading size="md" as="h4" color="grey" textAlign="center">Mobile Application Development</Heading>
                <Text color="grey" mt="20px" fontSize="14px">Android and IOS Application Developent</Text>
            </VStack>
        </SimpleGrid>
    </Flex>
  )
}

export default Services
