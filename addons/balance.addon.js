import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import CardLayout from "../components/layouts/card.layout";

export default function BalanceAddon() {
  return (
    <CardLayout>
      <Box p="20px">
        <Stack>
          <Text color="gray.400" fontSize="sm">
            Portfolio Balance
          </Text>
          <Heading fontSize="3xl" fontWeight="medium">
            NGN 62.72
          </Heading>
        </Stack>
      </Box>
    </CardLayout>
  );
}
