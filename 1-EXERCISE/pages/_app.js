import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/globals';
import { theme } from '../src/styles/theme';



export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}