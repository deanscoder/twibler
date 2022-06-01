import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  background: ${props => props.theme.colors.background};
  opacity: 1;
  top: 55px;
  left: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  transition: all 100ms;
  overflow-y: scroll;
  max-height: 100vh !important;
  .logout_li {
    margin: 20px 0;
  }

  .side_menu_create_post {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0;

    button {
      background: ${props => props.theme.colors.accent};
      border-radius: 6px;
      color: ${props => props.theme.colors.text};
      border: 0;
      font-size: 1.1rem;
      line-height: 40px;
      max-width: 200px;
      width: 100%;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      fill: ${props => props.theme.colors.text};
      margin-right: 13px;
    }
  }

  .side_menu_lista {
    width: 100%;
    display: block;
    position: relative;
    height: 1600px;

  ul {
    display: none;
  }

  ul[visible=true] {
    display: block;
    height: auto;
  }

    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;


      .side_menu_notification {
        width: 10%;
        color: ${props => props.theme.colors.white_on_dark};

        svg {
          transition: transform 300ms ease;
          transform: rotate(-180deg);
          fill: ${props => props.theme.colors.white_on_dark};
        }

        svg[child_selected=true] {
          transform: rotate(0deg);
        }
      }

      .side_menu_item {
        width: 90%;
        display: flex;
        padding: 14px 0;
        h3 {
          font-weight: 400;
          font-size: 18px;
        }
        svg {
          fill: ${props => props.theme.colors.text};
          size: 1.5em;
          margin: 0 30px 0 15px;
        }
      }
    }

    .side_menu_sub_li {
      padding: 14px 0 14px 67px;

      h3 {
        font-weight: 400;
        font-size: 18px;
      }
    }


  }
`