import { Box, Flex, Image, VStack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

const BlogCard = () => {
  return (
    <Flex w="full" h="400px" bg="brand.white" direction="column">
        <Box w="full" h="200px" overflow="hidden">
            <Image alt="image" src="/Icons/Image.svg" w="full" h="full" objectFit="cover" />
        </Box>

        <VStack p="20px" align="flex-start" spacing={5}>
            <Text fontSize="18px" color="black" fontWeight="bold">How to get started with react native</Text>
            <Text fontSize="14px" color="grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quasi in consequuntur! Quisquam, explicabo distinctio.</Text>

            <HStack>
                <Text fontSize="14px" color="brand.yellow">Read More</Text>
                <FiChevronRight size={20} color="yellow" />
            </HStack>
        </VStack>
    </Flex>
  )
}

export default BlogCard
