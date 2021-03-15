import { AppProps } from 'next/app';

import LoadingProvider from '../hooks/useLoading';
import SettingsProvider from '../hooks/useSettings';
import SwitchThemeProvider from '../hooks/useSwitchTheme';

import GlobalStyles from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SwitchThemeProvider>
      <GlobalStyles />
      <LoadingProvider>
        <SettingsProvider>
          <Component {...pageProps} />
        </SettingsProvider>
      </LoadingProvider>
    </SwitchThemeProvider>
  );
}
