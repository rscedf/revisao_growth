import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const GlobalStyled = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }
    body{
        font-family: 'Roboto', sans-serif;
    }
`
function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
