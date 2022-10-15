import { VStack, Text, HStack, Button } from '@chakra-ui/react'
import React from 'react'

const PromoSearch = () => {
  return (
    <VStack w='full' align='start'>
      <Text fontWeight='bold' fontSize='sm'>
        Suggested searches
      </Text>
      <HStack>
        <Button variant='outline' borderRadius='full'>
          How to prepare?
        </Button>
        <Button variant='outline' borderRadius='full'>
          Care tips
        </Button>
        <Button variant='outline' borderRadius='full'>
          Adoption tips
        </Button>
      </HStack>
    </VStack>
  )
}

export default PromoSearch
