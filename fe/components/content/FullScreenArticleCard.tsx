import {
  HStack,
  Image,
  Text,
  VStack,
  Button,
  Wrap,
  Box,
} from '@chakra-ui/react'
import React, { FC } from 'react'

type TFullScreenArticleCardProps = {
  showBadge?: boolean
}

const FullScreenArticleCard: FC<TFullScreenArticleCardProps> = ({
  showBadge,
}) => {
  return (
    <HStack spacing='6'>
      <Wrap position='relative' flexShrink={0}>
        <Image
          src='https://images.unsplash.com/photo-1610556009296-a3125836f118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
          alt='Dog playing with toys'
          fit={'cover'}
          align={'center'}
          w={'740px'}
          borderRadius='md'
          h={{ base: '100%', sm: '400px', lg: '415px' }}
        />
        {showBadge && (
          <Box
            bg='white'
            color='black'
            fontWeight='bold'
            position='absolute'
            top='10px'
            left='10px'
            p='2'
            borderRadius='full'
          >
            NEW
          </Box>
        )}
      </Wrap>
      <VStack align='start' spacing='4'>
        <Text fontSize='xs'>Dog care - Everyday tips</Text>
        <Text>
          <Text fontSize='3xl' fontWeight='bold'>
            Can your dog eat your food?
          </Text>
          <Text color='blackAlpha.500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Text>
        <Button
          bg='black'
          color='white'
          borderRadius='full'
          py='4'
          px='6'
          fontSize='sm'
          fontWeight='medium'
          _hover={{ background: 'blackAlpha.800' }}
          _active={{ background: 'blackAlpha.900' }}
        >
          Learn More
        </Button>
      </VStack>
    </HStack>
  )
}

FullScreenArticleCard.defaultProps = {
  showBadge: false,
}

export default FullScreenArticleCard
