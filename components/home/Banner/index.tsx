import { Flex, Heading, HStack, VStack, Text, Button, Box } from '@chakra-ui/react'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Banner = () => {
  return (
    <Flex w="full" h={['auto', "400px"]} py="20px" px="20px" bg="brand.white" align="center">
        <VStack flex={['1', "0.6"]} align="flex-start" spacing={5}>
            <Heading size="xl" color="grey">Hi, I&apos;m Daniel Emmanuel</Heading>
            <Flex direction={['column', 'row']}>
                <Text size="xl" fontWeight="bold" fontSize="30px" color="brand.yellow"> FullStack Web And Mobile Application </Text>
                <Text size="xl" fontWeight="bold" fontSize="30px" color="grey" ml="5px">Engineer</Text>
            </Flex>
            <Text color="grey" textAlign={['justify', 'left']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure praesentium voluptas iusto impedit dolores rerum quia quasi provident cupiditate quod ipsa voluptatibus maxime ab incidunt recusandae, perferendis deserunt, similique sequi quibusdam beatae odit distinctio error. Non eveniet recusandae officia a similique.
            </Text>

            <Button bg="brand.yellow" h="55px" w={['full', 'auto']} borderRadius={0}>
                <Text>Hire Me!</Text>
                <FiArrowRight size={20} color="black" />
            </Button>
        </VStack>, 
        <VStack flex="0.4" display={['none', 'flex']}>
            <Box w="220px" h="220px" bg="brand.grey" rounded="full" />
        </VStack>
    </Flex>
  )
}

export default Banner
