import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    font-size: 100%;
    font-weight: inherit;
  }

  ul {
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
  }

  body {
    font-size: ${({theme}) => theme.fontSizes.m};
    color: ${({ theme }) => theme.colors.greyDark};
  }
`
