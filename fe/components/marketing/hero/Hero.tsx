import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from '@chakra-ui/react'

import { FaSearch } from 'react-icons/fa'
import PromoSearch from '../search/PromoSearch'

export default function Hero() {
  return (
    <Container maxW={'7xl'} bg='gray.50'>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text>Lorem ipsum dolor sit amet, consectetur elit</Text>
          </Heading>
          <InputGroup size='lg'>
            <InputLeftElement pointerEvents='none'>
              <FaSearch color='gray.300' />
            </InputLeftElement>
            <Input placeholder='Search' borderRadius='full' />
          </InputGroup>

          <PromoSearch />
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Image
            alt={'Hero Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src='/assets/illustrations/dog-sketch.png'
          />
        </Flex>
      </Stack>
    </Container>
  )
}
