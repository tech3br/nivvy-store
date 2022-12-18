import Head from "next/head";
import React from "react";
import { GlobalStyles } from "../styles/global";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nivvy Store</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
