import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'
import { ThemeContext, ThemeProvider } from 'styled-components'
import home from '../styles/themes/home'
import dark from '../styles/themes/dark'
import { useState } from 'react'
import Header from '../components/header'

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_pt from "../translations/pt/common.json";
import common_en from "../translations/en/common.json";
import Controllers_Provider from '../contexts/controllers'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    pt: {
      common: common_pt
    },
    en: {
      common: common_en
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState(home)

  // FUNCTION TO CHANGE THEME
  // TO BE SENT AS PROP OR
  // MAKE A CONTEXT TO MANIPULATE IT
  const toggleTheme = (): void => {

    localStorage.setItem('GB7:TEMA', JSON.stringify(
      theme.title === 'home' ? dark : home
    )
    )

    setTheme(theme.title === 'home' ? dark : home)

  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18next}>
          <Controllers_Provider>
            <Header />
            <Component {...pageProps} />
            <GlobalStyles />
          </Controllers_Provider>
        </I18nextProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
