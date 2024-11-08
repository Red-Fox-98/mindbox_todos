import { FC } from "react";
import { AppProps } from "next/app";
import I18nProvider from "src/appFsd/i18n/i18nProvider";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <I18nProvider>
    <Component {...pageProps} />
  </I18nProvider>
);

export default WrappedApp;
