import { useEffect, useState } from 'react'
import Logo from './logo'
import Menu from './menu'
import Search from './search'
import * as css from './styles'
import Side_Menu from '../side_menu'
import { useControllers } from '../../contexts/controllers'
import { useTranslation } from "react-i18next";

const Header = (): JSX.Element => {
  const [search, setS] = useState(false)
  const { menu, __menu } = useControllers()
  const { t, i18n } = useTranslation('common');
  const { language, __language } = useControllers()

  useEffect(() => {
    const local_language = localStorage.getItem('Twibler:lang')

    if (local_language) {
      __language(local_language)
    }
  }, [])

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language)
    }
  }, [language])

  // END OF SLIDING EFFECT

  return (
    <css.Container>

      { menu && <css.Glass />}

      <css.Mobile_Wrapper>

        <div id="checkbox-wrapper">
          <input type="checkbox" name="checkbox-hamburger" id="checkbox-hamburger"
            onChange={(e) => __menu(e.target.checked)} />
          <label htmlFor="checkbox-hamburger" id="checkbox-hamburger-label">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        {search ?
          <Search />
          :
          <Logo />
        }

        <button id="header-mobile-search-button" onClick={() => setS(!search)}>
          {!search ?

            <svg viewBox="0 0 14 14">
              <path
                d="M1.676 5.7c0-2.2 1.873-4 4.042-4 2.268 0 4.043 1.8 4.043 
                4s-1.775 4-4.043 4c-2.169 0-4.042-1.8-4.042-4zm11.732 
                6.4L10.352 9c.69-.9 1.085-2.1 1.085-3.3 
                0-3.1-2.564-5.7-5.719-5.7C2.563 0 0 2.6 0 5.7s2.563 5.7 
                5.718 5.7c1.085 0 2.17-.4 3.057-.9l3.253 3.2c.197.2.493.3.789.3.296 0 
                .591-.1.789-.3.197-.2.394-.5.394-.8 0-.3-.296-.5-.592-.8z">
              </path>
            </svg>

            :

            <svg
              viewBox="0 0 16 16"
            >
              <path
                d="M9.527 8l6.164-6.188a1.066 1.066 0 0 0 0-1.5 1.053 1.053 
                  0 0 0-1.495 0L8 6.531 1.805.311a1.053 1.053 0 0 0-1.495 0 
                  1.064 1.064 0 0 0 0 1.5L6.473 8 .31 14.188a1.064 1.064 0 0 
                  0 0 1.501 1.052 1.052 0 0 0 1.495 0L8 9.47l6.195 6.22a1.052 
                  1.052 0 0 0 1.495 0 1.066 1.066 0 0 0 0-1.5L9.527 8z">
              </path>
            </svg>

          }
        </button>

      </css.Mobile_Wrapper>

      <section>
        <Logo />
        <Search />
      </section>

      <section>
        <Menu />
      </section>

      <Side_Menu />
    </css.Container>
  )
}

export default Header
