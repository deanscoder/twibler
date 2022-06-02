import { useTranslation } from 'react-i18next'
import { v4 as uuid } from 'uuid'
import {
  BsLinkedin,
  BsTelegram,
  BsTwitter,
  BsGithub,
  BsFillArrowRightSquareFill
} from 'react-icons/bs'

import { GoVerified } from 'react-icons/go'

const CONFIG = () => {
  const { t } = useTranslation('common')

  return ([
    {
      id: uuid(),
      name: t('menu.home'),
      icon: <svg width="20" height="21" viewBox="0 0 20 21"><path d="M19.55 8.117L10.567.157a.967.967 0 0 0-1.056 0L.528 8.117C.211 8.327 0 8.746 0 9.06v11.312c0 .314.317.628.634.628H6.34v-6.389c0-.524.423-.943.952-.943h5.389c.528 0 .951.42.951.943V21h5.706c.317 0 .635-.314.635-.628V9.06c.105-.314-.106-.838-.423-.943"></path></svg>,
      url: '/'
    },
    {
      id: uuid(),
      name: t('menu.explore'),
      icon: <svg viewBox="0 0 21.8 21.8" width="20" height="20"><path d="M10.9 21.8C4.9 21.8 0 16.9 0 10.9S4.9 0 10.9 0s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9zM12 2.1c-.5-.1-1.8-.1-2 0-4.1.4-7.5 3.7-8 7.8-.1.5-.1 1.8 0 2 .4 4.2 3.8 7.6 8 8h2c4.1-.5 7.4-3.8 7.8-8v-2C19.2 5.8 16 2.6 12 2.1zm1.7 11.3c-.1.2-.2.3-.4.4l-6.7 2.5c-.5.2-1.1-.3-.9-.9l2.5-6.7c.1-.2.2-.3.4-.4l6.7-2.5c.5-.2 1.1.3.9.9l-2.5 6.7zm-1.9-3.3c-.5-.5-1.3-.5-1.7 0-.5.5-.5 1.3 0 1.7.5.5 1.3.5 1.7 0 .4-.4.4-1.2 0-1.7z"></path></svg>,
      url: '/explore/cats'
    },
    {
      id: uuid(),
      icon: <BsLinkedin />,
      social: 'LinkedIn',
      name: 'Ezequiel Gudbrand',
      url: 'https://www.linkedin.com/in/ezequielgudbrand/',
      label: <BsFillArrowRightSquareFill />
    },
    {
      id: uuid(),
      icon: <BsTelegram />,
      social: 'Telegram',
      name: 'יחזקאל',
      url: 'https://t.me/servosalt',
      label: <BsFillArrowRightSquareFill />
    },
    {
      id: uuid(),
      icon: <BsTwitter />,
      social: 'Twitter',
      name: 'Ezequiel Gudbrand',
      url: 'https://twitter.com/servosalt',
      label: <BsFillArrowRightSquareFill />
    },
    {
      id: uuid(),
      icon: <BsGithub />,
      social: 'GitHub',
      name: 'Ezequiel Gudbrand',
      url: 'https://github.com/servosalt',
      label: <BsFillArrowRightSquareFill />
    }

  ])
}

export default CONFIG;