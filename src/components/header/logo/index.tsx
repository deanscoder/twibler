import * as css from './../styles'
import { useRouter } from 'next/router'

const Logo = (): JSX.Element => {

  const Router = useRouter()

  return (
    <css.Logo onClick={() => Router.push('/')}>

      <svg
        viewBox="0 0 21 36.8"
        width="20"
        height="33"
      >

        <path
          d="M21 36.75h-6.2c-5.577 0-9.733-2.844-9.733-9.646V16.21H0v-5.9C5.576 
            8.876 7.909 4.12 8.177 0h5.79v9.354h6.757v6.856h-6.756v9.486c0 2.843 
            1.448 3.826 3.753 3.826h3.271L21 36.75z">
        </path>
      </svg>

    </css.Logo>
  )
}

export default Logo
