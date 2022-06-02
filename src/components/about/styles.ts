import styled from 'styled-components'

export const Container = styled.div`
   max-width: 320px;
  width: 100%;
  margin-top: 60px;
  @media (max-width: 980px) {
    display: none;

  }

  ul {
    list-style: none;
    width: 100%;

    li {
      display: flex;
      width: 100%;
      height: 60px;
      justify-content: space-between;
      align-items: center;
      transition: background 300ms ease;
      :hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, .2);

        div {
          svg {
            color: ${props => props.theme.colors.accent};
          }
        }
      }
      div {
        display: flex;
        justify-content: flex-start;
        width: 100%;

        svg {
          width: 37px;
          height: 37px;
          margin: 0 8px;
          transition: all 300ms ease-in-out;
        }

        p {
          margin: 3px 0;
        }

        i {
          opacity: 0.8;
        }
      }

      span {
        color: ${props => props.theme.colors.accent};
        padding: 0 10px;
      }
    }
  }
  
  h2 {
    font-size: 1.5rem;
    padding: 0 10px 10px;
  }
`


export const Divider = styled.div`
  width: 100%;
  background-color: #fff;
  opacity: 0.65;
  height: 1px;
  border-radius: 1px;
`
export const SocialThumb = styled.div<{ src: string }>`
  background: url(${props => props.src});
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 3px;
  width: 37px !important;
  height: 37px;
  margin-right: 8px;
`