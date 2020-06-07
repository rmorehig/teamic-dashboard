import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 1rem;
  }
  body {
    margin: 0;
    color: #171F46;
    font-family: 'Rubik', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    line-height: 24px;
  }
  button{
    padding: 0;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    cursor:pointer;
    border:none;
    background:none;
    outline:none;
  }
  a {
    color:inherit;
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  h1{
    font-size: 32px;
    line-height: 40px;
    margin: 0;
  }
`
export default GlobalStyle
