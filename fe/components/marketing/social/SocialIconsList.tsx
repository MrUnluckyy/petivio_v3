import React from 'react'
import { HStack } from '@chakra-ui/react'

import { SOCIAL_NETWORK_LIST } from './config'
import SocialIconItem from './SocialIconItem'

const SocialIconsList = () => {
  return (
    <HStack spacing='4'>
      {SOCIAL_NETWORK_LIST.map((socialNetwork) => (
        <SocialIconItem
          key={socialNetwork.code}
          socialNetwork={socialNetwork}
        />
      ))}
    </HStack>
  )
}

export default SocialIconsList
