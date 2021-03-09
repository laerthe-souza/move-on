import { AppProps } from 'next/app';

import LoadingProvider from '../hooks/useLoading';

import GlobalStyles from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <LoadingProvider>
        <Component {...pageProps} />
      </LoadingProvider>
    </>
  );
}
