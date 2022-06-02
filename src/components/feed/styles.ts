import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 630px;
  width: 100%;
  justify-content: space-between;
  margin: 40px 0;

  #switch-nsfw {
    max-width: 220px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      margin-right: 15px;
    }
  }

  .infinite-scroll {
    position: relative;
    overflow: unset !important;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .infinite-scroll-component__outerdiv {
    position: relative;

  }

  @media (max-width: 980px) {
    justify-content: center;
  }
`

export const Tools = styled.div`
  max-width: 540px;
  width: 100%;
  min-height: 104px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.text};
  color: #181818;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  video {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
  }

  p {
    padding: 0 20px;
    text-align: left;
    width: 100%;
    margin: 20px 0;
  }

  .header-of-post {
    height: 36px;
    margin-bottom: 15px;
    padding: 15px 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 980px) {
      height: 53px;

    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      a {
        color: #000;
        font-weight: 700;
        text-align: left;
      }

    }
  }

  
`

export const PhotoContainer = styled.div<{ src: string }>`
  width: 64px;
  height: 64px;
  border-radius: 3px;
  background: url(${props => props.src});
  background-position: 50% 50%;
  background-size: cover;
  cursor: pointer;

  @media (max-width: 980px) {
    display: none;
  }
`

export const UserContainer = styled.div<{ src: string }>`
  width: 64px;
  height: 64px;
  border-radius: 3px;
  background: url(${props => props.src});
  background-position: 50% 50%;
  background-size: cover;
  z-index: 2000;

  cursor: pointer;

  @media (max-width: 980px) {
    display: none;
  }
`

export const PhotoContainerMobile = styled.div<{ src: string }>`
    display: none;
  @media (max-width: 980px) {
    display: block;
    width: 38px;
    height: 38px;
    border-radius: 3px;
    margin-right: 10px;
    background: url(${props => props.src});
    background-position: 50% 50%;
    background-size: cover;
    cursor: pointer;
  }

`

export const Timeline = styled.div`
  max-width: 624px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2000;

  h1 {
    margin: 15px 0 30px 0;
  }

  .post {
    position: relative;
  }

  .user-profile-image {
    position: sticky;
    align-self: flex-start;
    top: 65px;
  }

`

export const Publi = styled.div`
  @media (max-width: 980px) {
      display: none;
    }
  `

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  position: static;
  min-height: 200px;
  z-index: 2000;
  :nth-child(2) {
    margin-top: 20px;
  }

  @media (max-width: 980px) {
    justify-content: center;

  }
`

export const Create_Post = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  position: static;

  :nth-child(2) {
    margin-top: 20px;
  }

  @media (max-width: 980px) {
    justify-content: center;
  }
`

export const Content = styled.div<{ src?: string }>`
  background: url(${props => props.src});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 400px;
  height: 100%;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 20px 0;
  padding: 12px;
  max-width: 500px;
  width: 100%;
  position: relative;

  button {
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    svg {
      height: 21px;
      cursor: pointer;
      opacity: 0.65;

      path {
        color: ${props => props.theme.colors.soft_dark};
      }
    }

    svg[liked=true] {
      fill: rgb(255, 73, 48);
      opacity: 1;
    }

    svg[liked=false] {
      color: ${props => props.theme.colors.soft_dark};
    
    }
  }
`