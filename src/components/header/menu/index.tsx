import * as css from '../styles'
import CONFIG from './config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useControllers } from '../../../contexts/controllers'

const Menu = (): JSX.Element => {
  const Router = useRouter()
  const { language, __language } = useControllers()
  return (
    <css.Menu>

      <nav>
        {CONFIG().length && CONFIG().map(o =>
          <div key={o.id} title={o.name} onClick={() => Router.push(o.url)}>
            {o.notification_tag &&
              <div className="notification_tag">
                {o.notification_length}
              </div>
            }
            {o.icon}
          </div>
        )}

        <div
          className="nice-button"
          onClick={() => __language(language === 'en' ? 'pt' : 'en')}>
          {language}
          {/* <svg
              viewBox="0 0 16.8 16.8"
              width="22"
              height="22">
              <path
                d="M1.2 11.9l-1.2 5 5-1.2 8.2-8.2-3.8-3.8-8.2 
              8.2zM10 6.3l-6.2 6.2-.6-.6 6.2-6.2c0-.1.6.6.6.6zM13.1
              0l-2.5 2.5 3.7 3.7 2.5-2.5L13.1 0z">
              </path>
            </svg> */}
        </div>
      </nav>

    </css.Menu>
  )
}

export default Menu
