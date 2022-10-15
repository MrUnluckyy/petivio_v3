import { VStack, Image, Text, Link } from '@chakra-ui/react'
import React from 'react'

const ArticleCard = () => {
  return (
    <VStack align='start' spacing='6'>
      <Image
        src='https://images.unsplash.com/photo-1619508111539-a0c4d7afa3d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
        alt='test'
        w='100%'
        h='234px'
        fit={'cover'}
        align={'center'}
        borderRadius='md'
      />
      <VStack align='start'>
        <Text fontSize='xs'>Dog care - Everyday tips</Text>
        <Text>
          <Text fontSize='xl' fontWeight='bold'>
            Can your dog eat your food?
          </Text>
          <Text color='blackAlpha.700'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Text>
      </VStack>
      <Link href='#' textDecoration='underline' fontWeight='medium'>
        Learn more
      </Link>
    </VStack>
  )
}

export default ArticleCard
