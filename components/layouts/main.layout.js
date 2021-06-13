import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import Router from "next/router";
import React, { useState } from "react";

import FooterLayout from "./footer.layout";
import MainHeader from "./header.layout";
import Loader from "./loader.layout";

export default function MainLayout({
  children,
  title = "Home",
  description = "",
}) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    console.log(`Loading: ${url}`);
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => setLoading(false));
  Router.events.on("routeChangeError", () => setLoading(false));

  return (
    <Box w="100%" minH="100vh" pos="relative" bg="white">
      <Head>
        <title>ePact :: {title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Loader loading={loading} />

      <MainHeader />
      {children}

      <FooterLayout />
    </Box>
  );
}
