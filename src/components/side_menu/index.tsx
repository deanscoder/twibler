import CONFIG from './config';
import * as css from './styles'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react';
import { useControllers } from '../../contexts/controllers';

const Side_Menu = (): JSX.Element => {
  const Router = useRouter()
  const { t } = useTranslation('common')
  const [ready, setR] = useState(false)

  const { __menu, language, __language } = useControllers()

  useEffect(() => {
    setR(true)
  }, [])

  function svg_effect(id: string, value: boolean): void {
    const svg = document.querySelector(`#${id}`)

    if (svg) {
      if (value) {

        svg.setAttribute('child_selected', 'true')

      } else {

        svg.setAttribute('child_selected', 'false')

      }

    }
  }

  function dropdown_handler(name: string): void {
    switch (name.toLowerCase()) {

      case 'settings': settings_handler();
      default: null

    }
  }

  function settings_handler() {
    let ul = document.getElementById('settings_childs') as HTMLUListElement

    if (ul) {

      if (ul.hasAttribute('visible')) {

        ul.removeAttribute('visible')
        svg_effect('settings_arrow', false)

      } else {

        ul.setAttribute('visible', 'true')
        svg_effect('settings_arrow', true)


      }

    }

  }

  function handle_link(link: string): void {
    Router.push(link)
    __menu(false)
  }

  return (
    <css.Container id="side_menu_wrapper">

      <div className="side_menu_create_post">
        <button
          onClick={
            () => language === 'en' ? __language('pt') : __language('en')
          }>

          {language === 'en' ? 'in English' : 'em Português'}
          {/* <svg viewBox="0 0 16.8 16.8" width="20" height="20">
            <path
              d="M1.2 11.9l-1.2 5 5-1.2 8.2-8.2-3.8-3.8-8.2 8.2zM10 
            6.3l-6.2 6.2-.6-.6 6.2-6.2c0-.1.6.6.6.6zM13.1 0l-2.5 2.5 
            3.7 3.7 2.5-2.5L13.1 0z">
            </path>
          </svg> */}

        </button>
      </div>

      <ul className="side_menu_lista">

        {CONFIG().length && CONFIG().map(o =>
          <div key={o.id}>
            <li onClick={() =>
              /*  o.childs ?
                 dropdown_handler(o.name) //handle_with('sm_' + o.name.toLowerCase() + '_arrow')
                 : */
              handle_link(o.url)
            } >

              <div className="side_menu_item">
                {o.icon}
                {o.social ?
                  <h3>{o.social} <span>{o.name}</span></h3>
                  :
                  <h3>{o.name}</h3>
                }
              </div>

              <div className="side_menu_notification">
                {/* {o.childs &&
                  <svg
                    id={o.name.toLowerCase() + '_arrow'}
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                  >
                    <path
                      d="M2.498 1.045a1.026 1.026 0 0 0-1.446.005 1.027 
                        1.027 0 0 0 0 1.454l5.839 5.45a1.023 1.023 0 0 0 
                        .83.29c-.017.004.02.006.057.006.27 0 
                        .53-.106.726-.3l5.828-5.44a1.029 1.029 0 1 
                        0-1.448-1.46l-5.19 4.845-5.196-4.85z">
                    </path>
                  </svg>
                } */}

              </div>
            </li>

            {/*  {o.childs && <ul id={o.name.toLowerCase() + '_childs'}> */}

            {/* {o.childs.map((child, index) =>

                <li
                  key={o.id + '-' + child.name}
                  onClick={() => Router.push(child.url)}
                  className={child.name === t('menu.settings_logout') ?
                    "side_menu_sub_li logout_li" : "side_menu_sub_li"}
                >

                  <div>
                    <h3>{child.name}</h3>
                  </div>

                </li>

              )}

            </ul>

            } */}

          </div>
        )}

      </ul>

    </css.Container>
  )
}

export default Side_Menu;