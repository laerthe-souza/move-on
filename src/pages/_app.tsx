import { AppProps } from 'next/app';

import LoadingProvider from '../hooks/useLoading';
import SwitchThemeProvider from '../hooks/useSwitchTheme';

import GlobalStyles from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SwitchThemeProvider>
      <GlobalStyles />
      <LoadingProvider>
        <Component {...pageProps} />
      </LoadingProvider>
    </SwitchThemeProvider>
  );
}
