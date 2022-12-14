import type { NextPage } from 'next'
import Head from 'next/head'

import { Container, VStack, Box, Button } from '@chakra-ui/react'

import FullScreenArticleCard from '../components/content/FullScreenArticleCard'
import Footer from '../components/layout/footer/Footer'
import Navigation from '../components/layout/navigation/Navigation'
import Hero from '../components/marketing/hero/Hero'
import ArticleCardGrid from '../components/content/ArticleCardGrid'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Petivio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <Hero />
      <Container as='section' maxW='container.xl' py='16'>
        <VStack w='full' spacing='16'>
          <FullScreenArticleCard />
          <ArticleCardGrid />
          <Box>
            <Button
              variant='outline'
              borderRadius='full'
              borderColor='black'
              borderWidth='2px'
              py='4'
              px='6'
              fontSize='sm'
              fontWeight='medium'
            >
              Show more articles
            </Button>
          </Box>
        </VStack>
      </Container>
      <Box w='full' bg='gray.200'>
        <Container as='section' maxW='container.xl' py='16'>
          <VStack w='full' spacing='16'>
            <FullScreenArticleCard showBadge={true} />
            <ArticleCardGrid />
            <Box>
              <Button
                variant='outline'
                borderRadius='full'
                borderColor='black'
                borderWidth='2px'
                py='4'
                px='6'
                fontSize='sm'
                fontWeight='medium'
              >
                Show more articles
              </Button>
            </Box>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Home
