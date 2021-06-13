import { IconButton } from "@chakra-ui/button";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import {
  BsAppIndicator,
  BsArrowClockwise,
  BsBarChart,
  BsGrid,
} from "react-icons/bs";

export default function BottombarLayout() {
  return (
    <Box
      bg="white"
      borderTop="1"
      borderColor="gray.200"
      w="100%"
      pos="fixed"
      bottom="0"
      left="0"
      d={{ base: "block", md: "none" }}
    >
      <SimpleGrid columns={4} spacing="10px" w="100%" py="10px">
        {NAV_LINKS.map((e, i) => (
          <IconButton
            key={i}
            icon={e.icon}
            variant={"ghost"}
            aria-label={e.label}
            color="gray.500"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

const NAV_LINKS = [
  {
    label: "Dashboard",
    href: "/account",
    icon: <BsGrid size="20px" />,
  },
  {
    label: "Investments",
    href: "/account",
    icon: <BsBarChart size="20px" />,
  },
  {
    label: "History",
    href: "/account",
    icon: <BsArrowClockwise size="20px" />,
  },
  {
    label: "Notifications",
    href: "/account/notifications",
    icon: <BsAppIndicator size="18px" />,
  },
];
