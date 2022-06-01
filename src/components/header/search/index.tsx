import { FormEvent, useEffect, useState } from 'react'
import * as css from '../styles'
import CONFIG from './config'
import Link from 'next/link'
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router';

const Search = (): JSX.Element => {
  const { t, i18n } = useTranslation('common');

  const [loading, setL] = useState(false)
  const [show_dropdown, setS] = useState(false)
  const [only_once, setOO] = useState(false)
  const [pre_query, __pre_query] = useState('')

  const Router = useRouter()

  // A TOGGLE CONTROL FOR TELL
  // STYLED COMPONENTS WHEN PAINT
  // THIS DIV
  const [focused, setF] = useState(false)

  function handle_with_input(value: boolean): void {
    setF(value)
    setL(value)

    // WE'LL VERIFY IF THE VALUE IS TRUE
    // AND MAKE A FAKE LOAD TO SIMULATE
    // THE TIME OF REQUEST (AXIOS FOR EXAMPLE)
    // AT THE FIRST TIME ONLY
    if (value && !only_once) {

      setTimeout(() => setS(value), 1000) // AFTER 1 SECOND SHOW DROPDOWN
      setOO(true)

    } else {

      setS(value)

    }
  }

  function handle_submit(e: FormEvent): void {
    e.preventDefault()

    let input = document.querySelector('#super-search-twiblr') as HTMLInputElement

    if (input) {
      let value = input.value

      if (value.length > 3) {

        let query = encodeURI(value)

        Router.push('/explore/' + query, '', { shallow: false })
        setS(false)
      } else {

        alert('Type more than 3 letters to search')

      }

    }
  }

  return (
    <css.Search id="top-head-search" focus={focused ? 'true' : 'false'}>

      <svg
        width="18"
        height="18"
        viewBox="0 0 14 14"
      >
        <path
          d="M1.676 5.7c0-2.2 1.873-4 4.042-4 2.268 0 4.043 1.8 4.043 4s-1.775 
            4-4.043 4c-2.169 0-4.042-1.8-4.042-4zm11.732 6.4L10.352 9c.69-.9 1.085-2.1 
            1.085-3.3 0-3.1-2.564-5.7-5.719-5.7C2.563 0 0 2.6 0 5.7s2.563 
            5.7 5.718 5.7c1.085 0 2.17-.4 3.057-.9l3.253 3.2c.197.2.493.3.789.3.296 
            0 .591-.1.789-.3.197-.2.394-.5.394-.8 0-.3-.296-.5-.592-.8z">
        </path>
      </svg>

      <form onSubmit={handle_submit}>

        <input
          type="text"
          placeholder={t('search_placeholder')}
          onFocus={() => handle_with_input(true)}
          onBlur={() => handle_with_input(false)}
          id="super-search-twiblr"
          autoComplete='off'
          onChange={(e) => __pre_query(e.target.value)}
        />
      </form>
      { show_dropdown &&
        <ul className="search-list">

          <section>
            <h3>{t('tags_you_follow')}</h3>
          </section>

          {CONFIG.length && CONFIG.map(o =>
            <Link key={o.id} href={'/explore/' + encodeURI(o.name)}>
              <a>

                <css.Search_Thumbnail image={o.thumbnail} />

                <span>
                  {o.name}
                </span>
              </a>
            </Link>
          )
          }
        </ul>
      }

    </css.Search>
  )
}

export default Search
