import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { AuthProvider } from 'contexts/auth';

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
