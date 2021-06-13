import { Box, Divider, Flex, HStack, Spacer, Text } from "@chakra-ui/layout";
import React from "react";

export default function ListLayout({
  children,
  title = "Recent Trasactions",
  buttons = false,
}) {
  return (
    <Box>
      <Flex p="20px">
        <Text fontWeight="medium" textTransform="uppercase">
          {title}
        </Text>
        <Spacer />
        <HStack>{buttons}</HStack>
      </Flex>
      <Divider />
      <Box>{children}</Box>
    </Box>
  );
}
