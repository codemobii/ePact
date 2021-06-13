import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import MainButton from "../components/buttons/main.button";
import CardLayout from "../components/layouts/card.layout";

export default function AdAddon() {
  return (
    <CardLayout>
      <Flex pos="relative">
        <Stack spacing="30px" p="20px">
          <Stack>
            <Heading fontSize="xl" fontWeight="medium">
              Earn free crypto with ePact
            </Heading>
            <Text color="gray.400" fontSize="sm">
              Learn about different cryptocurrencies and earn them for free!
            </Text>
          </Stack>
          <Box as="span">
            <MainButton title="Earn Crypto" />
          </Box>
        </Stack>

        <Spacer />

        <Image
          pos="absolute"
          right="0"
          w="300px"
          objectFit="cover"
          h="100%"
          src="https://static-assets.coinbase.com/earn/earn_dash_banner.png"
          d={{ base: "none", md: "block" }}
        />
      </Flex>
    </CardLayout>
  );
}
