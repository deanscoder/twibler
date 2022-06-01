import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  padding: 0 20px 0 22px;
  height: 54px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
  z-index: 9000;
  background-color: ${props => props.theme.colors.background};

  @media (max-width: 980px) {
      border-bottom: 0;
    }
  section {
    display: flex;
    max-width: 50%;
    width: 100%;
    justify-content: flex-start;

    @media (max-width: 980px) {
      display: none;
    }
  }

  @media (max-width: 980px) {
      padding: 0;
    }
`

export const Logo = styled.div`

  max-width: 38px;
  width: 100%;
  cursor: pointer;
  flex-grow: 0;
svg {
    fill: #fff;
  }


`

export const Search = styled.div<{ focus: string }>`
  position: relative;
  max-width: 480px;
  width: 100%;
  flex-grow: 1;
  height: 34px;
  background-color: ${props => props.focus === 'false' ?
    'rgba(255, 255, 255, 0.3)' : '#fff'};
  border-radius: 3px;
  display: flex;
  align-items: center;
  transition: 200ms ease;

  svg {
    fill: ${props => props.focus === 'true' ?
    '#000' : 'rgba(255, 255, 255, 0.6)'};
    margin-left: 12px;
  }

  form {
    width: 100%;
  }

  input {
    max-width: 448px;
    width: 100%;
    background: transparent;
    border: 0;
    padding: 5px;
    line-height: 1.5em;
    font-size: 1rem;
    color: ${props => props.focus === 'false' ?
    'rgba(255, 255, 255, 0.6)' : '#222'};
    outline: none;

    ::placeholder {
      color: ${props => props.focus === 'false' ?
    'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
    }

  }

  .search-list {
    position: absolute;
    bottom: 0;
    transform: translateY(104%);
    background-color: #fff;
    width: 100%;
    max-height: 70vh;
    overflow-y: scroll;
    border-radius: 3px;

    section {
      background-color: #EDEDED;
      max-width: 100%;
      width: 100%;
      padding: 0 10px;
      font-size: 14px;
      height: 35px;
      display: flex;
      align-items: center;
      color: #000000A6;

      h3 {
        font-size: .875rem;
        font-weight: 400;
      }

    }

    a {
      display: flex;
      align-items: center;
      color: #222;
      display: flex;
      width: 100%;
      height: 52px;
      padding: 8px;
      font-size: 16px;

      :hover {
        background-color:#EDEDED;
      }

    }

  }

  @media (max-width: 980px) {
    max-width: 100%;
    border-radius: 85px;
    padding: 0 10px;
    margin: 0 10px;
    position: unset;
    svg {
      display: none;
    }

    input {
      max-width: 90%;
    }

    .search-list {
      transform: translateY(0);
      top: 55px;
      max-height: 100vh;
      bottom: unset;
      left: 0;
      right: 0;
    }

  }
`

export const Search_Thumbnail = styled.div<{ image: string }>`
  width: 36px;
  height: 36px;
  background-color: #EDEDED;
  margin-right: 8px;
  border-radius: 3px;
`

export const Glass = styled.div`
  position: fixed;
  top: 53px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.theme.colors.background};
  opacity: .8;
`
export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 980px) {

    width: 40px;

  }

  .actived-button {
    fill: #EDEDED;
  }

  nav {
    display: flex;
    align-items: center;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.theme.colors.accent};
      width: 45px;
      height: 32px;
      margin-left: 18px;
      border-radius: 3px;
    }
    
    div {
      margin: 0 16px;
      cursor: pointer;
      position: relative;
      width: 22px;
      height: 25px;

      svg {
        fill: rgba(255, 255, 255, 0.6);
      }
    }
  }

  .notification_tag{
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.background};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 21px;
  height: 21px;
  top: -40%;
  left: -25%;
  font-size: .78125rem;
  font-weight: 700;
  }
`

export const Mobile_Wrapper = styled.div`
  display: none;

  @media (max-width: 980px) {

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  #header-mobile-search-button {
    width: 50px;
    background-color: transparent;
    border: 0;

    svg {
      fill: ${props => props.theme.colors.white_on_dark};
      width: 18px;
      height: 18px;
    }
  }

  #checkbox-wrapper {
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  #checkbox-hamburger {
    position: absolute;
    opacity: 0;
  }

  #checkbox-hamburger-label {
    position: relative;
    cursor: pointer;
    display: block;
    height: 15px;
    width: 20px;

    span {
      position: absolute;
      display: block;
      height: 2px;
      width: 100%;
      border-radius: 22px;
      transition: 100ms ease-in;
      background-color: ${props => props.theme.colors.white_on_dark};
    
      :nth-child(1) {
        top: 0;
        transform: rotate(0deg);

      }

      :nth-child(2) {
        top: 7px;
      }

      :nth-child(3) {
        top: 14px;
        transform: rotate(0deg);
      }
    }

  }

  #checkbox-hamburger:checked + label span {
    :nth-child(1) {
      transform: rotate(45deg);
      top: 7px;
      background-color: rgba(255, 255, 255, 1);
    }
    :nth-child(2) {
      opacity: 0;
    }
    :nth-child(3) {
      transform: rotate(-45deg);
      top: 7px;
      background-color: rgba(255, 255, 255, 1);
    }
  }

  #mobile-hamburger-menu {
    background: none;
    border: none;
 

    svg {
      font-size: 1.355rem;
      fill: rgba(255, 255, 255, 0.6);
    }
  }

  }
`


