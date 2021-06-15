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
import AccountInvestmentsAddon from "../../../../addons/acount_investments.addon";
import AdAddon from "../../../../addons/ad.addon";
import BalanceAddon from "../../../../addons/balance.addon";
import ProjectsAddon from "../../../../addons/projects.addon";
import TableAddon from "../../../../addons/table.addon";
import OutlineButton from "../../../../components/buttons/outline.button";
import AccountLayout from "../../../../components/layouts/account.layout";
import CardLayout from "../../../../components/layouts/card.layout";
import ListLayout from "../../../../components/layouts/list.layout";

export default function Account() {
  return (
    <AccountLayout title="Projects">
      <ProjectsAddon isHome={false} isAccount />
    </AccountLayout>
  );
}
