import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import AccountInvestmentsAddon from "../../../addons/acount_investments.addon";
import AdAddon from "../../../addons/ad.addon";
import BalanceAddon from "../../../addons/balance.addon";
import TableAddon from "../../../addons/table.addon";
import OutlineButton from "../../../components/buttons/outline.button";
import AccountLayout from "../../../components/layouts/account.layout";
import CardLayout from "../../../components/layouts/card.layout";
import ListLayout from "../../../components/layouts/list.layout";

export default function Account() {
  return (
    <AccountLayout title="My Projects">
      <AdAddon />

      <Box w="100%">
        <CardLayout>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Farm investments</Tab>
              <Tab>My Tokens</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ListLayout>
                  <TableAddon />
                </ListLayout>
              </TabPanel>
              <TabPanel>
                <ListLayout>
                  <TableAddon />
                </ListLayout>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardLayout>
      </Box>
    </AccountLayout>
  );
}
