import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { getStrapiMedia } from "../utils/media.util";
import { fetchAPI } from "../utils/api.util";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  const theme = extendTheme({
    fonts: {
      heading: "'Inter', sans-serif",
      body: "'Inter', sans-serif",
    },
  });

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favIcon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/website-settings");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
