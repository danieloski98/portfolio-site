import { Flex, Heading, SimpleGrid, Text, Box, VStack, HStack } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import RecommendationCard from '../RecommendationCard'

const Recommendation = () => {
  return (
    <Flex w="full" h="auto" direction="column" py="100px" px={['20px', '0']}>
        <Heading textAlign="center">Recommendations</Heading>
        <Flex justify="center">
            <Text textAlign="center" mt="20px" color="grey" w={['100%', '50%']} fontSize="14px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius, qui sit possimus ad blanditiis iure hic! Culpa pariatur, sapiente perferendis labore fugiat, eveniet id consequatur vero qui consectetur facere, minima ducimus illo nulla hic porro rerum laudantium a dicta quaerat eligendi quis. Eius molestiae perspiciatis sequi in rerum delectus.
            </Text>
        </Flex>

        <HStack  justify="center" w="full">
          <SimpleGrid columns={[1, 3]} spacing={5} mt="40px" w={['100%', '85%']} >
              <RecommendationCard />
              <RecommendationCard />
              <RecommendationCard />
          </SimpleGrid>
        </HStack>
    </Flex>
  )
}

export default Recommendation
