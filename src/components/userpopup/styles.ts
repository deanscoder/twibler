import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  bottom: 1px;
  padding-top: 10px;
  width: 300px;
  transform: translate(-113px, 100%);
  display: none;
  background-color: transparent;
  z-index: 9000;
  


  &[visible=false] {
    display: none;
  }

  &[visible=true] {
    display: flex;
  }

`
export const Profile = styled.div`
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: #fff;
  color: #000;
  width: 100%;
  z-index: 99999;
  h3 {
    margin: 10px 0;
  }

  p {
    text-align: center;
    color: ${props => props.theme.colors.soft_dark};
    padding: 0 10px;
  }
`

export const HeaderPhoto = styled.div`
  width: 100%;
  height: 150px;
  background-color: #000;
`

export const ProfilePhoto = styled.div<{ src: string }>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 4px solid #000;
  background: url(${props => props.src});
  background-position: 50% 50%;
  background-size: cover;
  margin-top: -35px;
`