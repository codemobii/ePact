import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CardLayout from "../components/layouts/card.layout";

export default function BalanceAddon() {
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing="10px">
      {DATA.map((data, key) => (
        <CardLayout>
          <Stack py="20px" px="10px" key={key} textAlign="center">
            <Text color="gray.400" fontSize="sm">
              {data.label}
            </Text>
            <Heading fontSize="2xl" fontWeight="medium">
              {data.value}
            </Heading>
          </Stack>
        </CardLayout>
      ))}
    </SimpleGrid>
  );
}

const DATA = [
  { label: "Balance", value: "NGN 62.72" },
  { label: "Total investment", value: "12" },
  { label: "Total ROI", value: "NGN 62,000.72" },
  { label: "Hold Tokens", value: "24" },
];
