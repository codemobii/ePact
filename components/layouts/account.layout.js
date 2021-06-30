import { Box, Stack } from "@chakra-ui/layout";
import { useSession, signIn } from "next-auth/client";
import Head from "next/head";
import React, { useState } from "react";
import { useEffect } from "react";
import BottombarLayout from "./bottombar.layout";
import BoxContainer from "./container.layout";
import SidebarLayout from "./sidebar.layout";
import TopbarLayout from "./topbar.layout";

export default function AccountLayout(props) {
  const { children, title = "Dashboard" } = props;

  const [isOpen, setIsOpen] = useState(false);

  const [session, loading] = useSession();

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  if (typeof window !== "undefined" && loading) return null;

  if (typeof window !== "undefined" && !session) {
    window.location.href = "/";
    signIn();
  }

  return (
    <Box w="100%" pos="relative" minH="100vh" bg="gray.50">
      <Head>
        <title>ePact :: Account</title>
      </Head>

      <TopbarLayout
        session={session}
        loading={loading}
        title={title}
        onToggle={onToggle}
        isOpen={isOpen}
      />

      <SidebarLayout isOpen={isOpen} />

      <Box position="relative" pl={{ base: "0", md: "260px" }} pt="100px">
        <BoxContainer>
          <Stack spacing="20px">{children}</Stack>
        </BoxContainer>
      </Box>

      <BottombarLayout />
    </Box>
  );
}
