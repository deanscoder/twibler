import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin-top: 54px;
        background: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        font-family: 'Roboto', sans-serif;
    }

    #root {
        width: 100%;
    }
    a
    {
        text-decoration: none;
        color: ${props => props.theme.colors.text};
    }

    button {
        :focus {
            outline: none;
        }
    }

`
