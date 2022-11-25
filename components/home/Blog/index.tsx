import { Box, Flex, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import BlogCard from '../BlogCard'

const Blog = () => {
    return (
        <Flex direction="column" py="40px" px="20px">
            <Heading textAlign="center">Blog</Heading>

            <Flex justify="center">
                <Text textAlign="center" mt="20px" color="grey" w={['100%', '50%']} fontSize="14px">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius, qui sit possimus ad blanditiis iure hic! Culpa pariatur, sapiente perferendis labore fugiat, eveniet id consequatur vero qui consectetur facere, minima ducimus illo nulla hic porro rerum laudantium a dicta quaerat eligendi quis. Eius molestiae perspiciatis sequi in rerum delectus.
                </Text>
            </Flex>

            <HStack w="full" justify="center" mt="40px">
            <Box w={['100%', "85%"]} h="auto" p="20px">

                <SimpleGrid columns={[1, 3]} spacing={5}>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </SimpleGrid>


            </Box>
        </HStack>
        
        </Flex>
    )
}

export default Blog
