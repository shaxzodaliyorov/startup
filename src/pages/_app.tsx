import '@fontsource/roboto';
import 'nprogress/nprogress.css';
import '../styles/globals.css'
import 'react-multi-carousel/lib/styles.css';

import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { I18nextProvider } from "react-i18next"
import i18n from "../i18n/index"
import { Client, HydrationProvider } from 'react-hydration-provider';
import NProgress from "nprogress"
import { useEffect } from 'react';
import Router from "next/router"


NProgress.configure({ showSpinner: false });
function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {

    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    }
  }, [])

  return <HydrationProvider>
    <I18nextProvider i18n={i18n} >
      <ChakraProvider>
        <Client>
          <Component {...pageProps} />
        </Client>
      </ChakraProvider>
    </I18nextProvider>

  </HydrationProvider>
}

export default MyApp
