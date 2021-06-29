import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import axios from "axios";
import React, { useState } from "react";
import { useSession, getSession } from "next-auth/client";
import AdAddon from "../../addons/ad.addon";
import BalanceAddon from "../../addons/balance.addon";
import TableAddon from "../../addons/table.addon";
import OutlineButton from "../../components/buttons/outline.button";
import AccountLayout from "../../components/layouts/account.layout";
import CardLayout from "../../components/layouts/card.layout";
import ListLayout from "../../components/layouts/list.layout";
import { fetchAPI } from "../../utils/api.util";
import { useEffect } from "react";

export default function Account(props) {
  const { ad, ses } = props;

  const [session] = useSession();

  const [wallet, setWallet] = useState({});
  const [loading, setLoading] = useState(true);

  const getItems = async () => {
    await axios
      .get("http://localhost:1337/wallet", {
        headers: {
          Authorization: `Bearer ${ses.jwt}`,
        },
      })
      .then((res) => console.log(res))
      .catch((errors) => {
        console.log(errors);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    console.log(ses);
    getItems();
  }, []);

  return (
    <AccountLayout>
      <AdAddon data={ad} />
      <BalanceAddon />

      <Box w="100%">
        <CardLayout>
          <ListLayout title="Recent Activities">
            <TableAddon />
          </ListLayout>
        </CardLayout>
      </Box>
    </AccountLayout>
  );
}

export async function getServerSideProps({ req }) {
  // Run API calls in parallel
  const [ad] = await Promise.all([fetchAPI("/account-ad")]);
  const ses = await getSession({ req });

  return {
    props: { ad, ses },
  };
}
