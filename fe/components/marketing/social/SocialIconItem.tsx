import { FC } from 'react'
import { Image, Link } from '@chakra-ui/react'
import SocialIcon from './SocialIcon'
import { TSocialNetwork } from './config'

type TSocialIconItemProps = {
  socialNetwork: TSocialNetwork
}

const SocialIconItem: FC<TSocialIconItemProps> = ({ socialNetwork }) => {
  if (socialNetwork.url) {
    return (
      <Link href={socialNetwork.url} fontSize='22px' color='black'>
        <SocialIcon socialNetworkCode={socialNetwork.code} />
      </Link>
    )
  }
  return <Image src={socialNetwork.image} alt={socialNetwork.title} />
}

export default SocialIconItem
