import { VStack, Tooltip } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

const RightMenu = () => {
    return (
        <VStack w="full" h="full" py="50px" spacing={8}>
            <Tooltip label="Home" hasArrow>
                <VStack align="center" justify="center" bg="brand.yellow" w="50px" h="50px" rounded="full" cursor="pointer">
                    <Image src="/home.svg" alt="home icon" width={25} height={25} />
                </VStack>
            </Tooltip>

            <Tooltip label="Services" hasArrow>
                <VStack align="center" justify="center" bg="brand.grey" w="50px" h="50px" rounded="full" cursor="pointer">
                    <Image src="/Icons/Services.svg" alt="home icon" width={25} height={25} />
                </VStack>
            </Tooltip>

            <Tooltip label="PortFolio" hasArrow>
                <VStack align="center" justify="center" bg="brand.grey" w="50px" h="50px" rounded="full" cursor="pointer">
                    <Image src="/Icons/Portfolio.svg" alt="home icon" width={25} height={25} />
                </VStack>
            </Tooltip>

            <Tooltip label="Cv" hasArrow>
                <VStack align="center" justify="center" bg="brand.grey" w="50px" h="50px" rounded="full" cursor="pointer">
                    <Image src="/Icons/cv.svg" alt="home icon" width={25} height={25} />
                </VStack>
            </Tooltip>

            <Tooltip label="Blog" hasArrow>
                <VStack align="center" justify="center" bg="brand.grey" w="50px" h="50px" rounded="full" cursor="pointer">
                    <Image src="/Icons/Blog.svg" alt="home icon" width={25} height={25} />
                </VStack>
            </Tooltip>

            <Tooltip label="Contacts" hasArrow>
                <VStack align="center" justify="center" bg="brand.grey" w="50px" h="50px" rounded="full" cursor="pointer">
                    <Image src="/Icons/Contact.svg" alt="home icon" width={25} height={25} />
                </VStack>
            </Tooltip>
        </VStack>
    )
}

export default RightMenu
