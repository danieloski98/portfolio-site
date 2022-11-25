import { Flex, Heading, HStack, VStack, Text, Button, Box } from '@chakra-ui/react'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Banner = () => {
  return (
    <HStack justify="center" w="full" h={['auto', "450px"]} >
        <Flex width={['100%', '85%']} bg="brand.white" align="center" p="20px" h="full">
            <VStack flex={['1', "0.6"]} align="flex-start" spacing={5}>
                <Heading size="xl" color="grey">Hi, I&apos;m Daniel Emmanuel</Heading>
                <Flex direction={['column', 'row']}>
                    <Text size="xl" fontWeight="bold" fontSize="30px" color="brand.yellow"> FullStack Web And Mobile Application Engineer </Text>
                </Flex>
                <Text textAlign={['center', 'left']} fontSize="14px" color="grey">
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
    </HStack>
  )
}

export default Banner
