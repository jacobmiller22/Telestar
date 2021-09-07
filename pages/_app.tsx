import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "assets/css/index.css";
import "leaflet/dist/leaflet.css";
import "swiper/swiper.min.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
