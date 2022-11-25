import { Box, Heading, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Banner from '../components/home/Banner'
import LeftSideBar from '../components/home/LeftSideBar'
import RightMenu from '../components/home/RightMenuBar'

export default function Home() {
  return (
    <Box w="full" h="100vh" bg="brand.grey">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex w="full" h="full">
        <Box flex="0.2" bg="brand.white" h="full" display={['none', 'block']} >
          <LeftSideBar />
        </Box>

        <Box flex={['1', "0.8"]} mx={['0', "20px"]} overflow="auto" >
          <Banner />
        </Box>

        <Box w="70px" h="full" bg="brand.white" display={['none', 'block']}>
          <RightMenu />
        </Box>
      </Flex>

    </Box>
  )
}
