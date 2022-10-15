import { FC } from 'react'
import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'

type TSocialIconProps = {
  socialNetworkCode: string
}

const SocialIcon: FC<TSocialIconProps> = ({ socialNetworkCode }) => {
  switch (socialNetworkCode) {
    case 'facebook':
      return <FaFacebook />
    case 'messenger':
      return <FaFacebookMessenger />
    case 'instagram':
      return <FaInstagram />
    case 'twitter':
      return <FaTwitter />
    case 'youtube':
      return <FaYoutube />
    case 'whatsapp':
      return <FaWhatsapp />
    default:
      return null
  }
}

export default SocialIcon
