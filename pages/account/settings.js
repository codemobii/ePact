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
import {
  BsAwardFill,
  BsInfoCircleFill,
  BsQuestionCircleFill,
  BsShieldFill,
} from "react-icons/bs";
import AccountInvestmentsAddon from "../../addons/acount_investments.addon";
import AdAddon from "../../addons/ad.addon";
import BalanceAddon from "../../addons/balance.addon";
import TableAddon from "../../addons/table.addon";
import UserinfoAddon from "../../addons/userinfo.addon";
import OutlineButton from "../../components/buttons/outline.button";
import AccountLayout from "../../components/layouts/account.layout";
import CardLayout from "../../components/layouts/card.layout";
import ListLayout from "../../components/layouts/list.layout";

export default function AccountSettings() {
  return (
    <AccountLayout title="Account details">
      <Stack spacing="30px">
        <Stack spacing="10px">
          {USER_DATA.map((data, key) => (
            <UserinfoAddon
              isEdit
              label={data.label}
              value={data.value}
              key={key}
              type={data.type}
            />
          ))}
        </Stack>

        <Stack spacing="10px">
          {O_DATA.map((data, key) => (
            <UserinfoAddon value={data.value} icon={data.icon} key={key} />
          ))}
        </Stack>
      </Stack>
    </AccountLayout>
  );
}

const USER_DATA = [
  { label: "Display name", value: "John Chimaobi", type: "text" },
  { label: "Email address", value: "colourjim@gmail.com", type: "email" },
  { label: "Phone number", value: "07038113197", type: "phone" },
  { label: "Password", value: "***********", type: "password" },
];

const O_DATA = [
  { value: "Status", icon: <BsAwardFill /> },
  { value: "Help & Support", icon: <BsQuestionCircleFill /> },
  { value: "Privacy and Policy", icon: <BsShieldFill /> },
  { value: "About us", icon: <BsInfoCircleFill /> },
];
