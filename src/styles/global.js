import { createGlobalStyle } from 'styled-components'
import background from '../assets/background.png'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${background});
    color: #ffff;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
  }

  img {
    margin: 10px 0 0 110px;
  }

  h3 {
    font-size: 36px;
    margin: 0 0 30px 0;
  }

  h4, p, li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h4 {
    font-size: 24px;
  }

  p {
    font-size: 20px;
    padding: 0 0 10px 0;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0 0 10px 0;
    font-size: 18px;
  }

  strong {
    margin: 0 0 0 5px;
  }

  ::selection {
  color: #fafafa;
  background: #183139;
}
`
