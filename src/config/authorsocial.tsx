import { v4 as uuid } from 'uuid'
// IMPORTS OF SOCIAL LOGO ICONS
import {
  BsLinkedin,
  BsTelegram,
  BsTwitter,
  BsGithub,
  BsFillArrowRightSquareFill
} from 'react-icons/bs'

const author = [
  {
    id: uuid(),
    thumbnail: <BsLinkedin />,
    social: 'LinkedIn',
    name: 'Ezequiel Gudbrand',
    url: 'https://www.linkedin.com/in/ezequielgudbrand/',
    label: <BsFillArrowRightSquareFill />
  },
  {
    id: uuid(),
    thumbnail: <BsTelegram />,
    social: 'Telegram',
    name: 'יחזקאל',
    url: 'https://t.me/servosalt',
    label: <BsFillArrowRightSquareFill />
  },
  {
    id: uuid(),
    thumbnail: <BsTwitter />,
    social: 'Twitter',
    name: 'Ezequiel Gudbrand',
    url: 'https://twitter.com/servosalt',
    label: <BsFillArrowRightSquareFill />
  },
  {
    id: uuid(),
    thumbnail: <BsGithub />,
    social: 'GitHub',
    name: 'Ezequiel Gudbrand',
    url: 'https://github.com/servosalt',
    label: <BsFillArrowRightSquareFill />
  }
]

export default author