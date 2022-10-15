import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../../components/layout/navigation/Navigation'

const Articles: NextPage = () => {
  return (
    <>
      <Head>
        <title>Petivio | articles</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <Heading>ARTICLES</Heading>
    </>
  )
}

export default Articles
