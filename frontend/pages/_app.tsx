import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'config/theme';
import GlobalCSS from '../global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
