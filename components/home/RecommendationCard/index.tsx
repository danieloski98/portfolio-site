import { VStack, Heading, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const RecommendationCard = () => {
    return (
        <VStack w="full" h="auto" bg="brand.white" p="20px" justify="flex-start" align="flex-start" spacing={5}>
            <Image alt="codeing" src="/Icons/Rating.svg" width={80} height={30} />
            <Heading size="md" as="h4" color="grey">Great Quality Work</Heading>
            <Text color="grey" mt="20px" fontSize="14px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate nobis cumque, voluptate blanditiis excepturi pariatur assumenda maxime vero enim.</Text>
            <HStack justify="space-between" w="full">
                <Image alt="user" src="/Icons/Profile.svg" width={70} height={70} />
                <VStack align="flex-start" spacing={1}>
                    <Text fontWeight="bold">James Gouse</Text>
                    <Text fontSize="14px" color="grey">Graphics Designer</Text>
                </VStack>
            </HStack>
        </VStack>
    )
}

export default RecommendationCard
