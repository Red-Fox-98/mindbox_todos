import { FC } from 'react';
import { AppProps } from 'next/app';
import I18nProvider from 'src/appFsd/i18n/i18nProvider';
import { roboto } from '@styles/fonts';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <I18nProvider>
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  </I18nProvider>
);

export default WrappedApp;
