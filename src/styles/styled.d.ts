import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secundary: string
      background: string
      accent: string
      text: string
      note: string
      reblog: string
      reply: string
      cat_01: string
      cat_02: string
      cat_03: string
      cat_04: string
      cat_05: string
      cat_06: string
      cat_07: string
      white_on_dark: string
      soft_dark: string
    }
  }
}
