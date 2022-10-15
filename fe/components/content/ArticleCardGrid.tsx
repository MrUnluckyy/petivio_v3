import { Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ArticleCard from './ArticleCard'

const ArticleCardGrid = () => {
  return (
    <SimpleGrid columns={3} columnGap='4' rowGap='16'>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </SimpleGrid>
  )
}

export default ArticleCardGrid
