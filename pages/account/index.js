import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import AccountInvestmentsAddon from "../../addons/acount_investments.addon";
import AdAddon from "../../addons/ad.addon";
import BalanceAddon from "../../addons/balance.addon";
import OutlineButton from "../../components/buttons/outline.button";
import AccountLayout from "../../components/layouts/account.layout";
import CardLayout from "../../components/layouts/card.layout";
import ListLayout from "../../components/layouts/list.layout";

export default function Account() {
  return (
    <AccountLayout>
      <AdAddon />
      <BalanceAddon />

      <SimpleGrid
        spacing="20px"
        columns={{ base: 1, md: 2 }}
        align="flex-start"
      >
        <Box w="100%">
          <CardLayout>
            <ListLayout title="Investments">
              <AccountInvestmentsAddon />
            </ListLayout>
          </CardLayout>
        </Box>

        <Box w="100%">
          <CardLayout>
            <ListLayout title="Recent transactions">hello</ListLayout>
          </CardLayout>
        </Box>
      </SimpleGrid>
    </AccountLayout>
  );
}
