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
import { BsInfoCircleFill } from "react-icons/bs";
import MainButton from "../../../../components/buttons/main.button";
import MainInput from "../../../../components/inputs/main.input";
import AccountLayout from "../../../../components/layouts/account.layout";
import CardLayout from "../../../../components/layouts/card.layout";

export default function Account() {
  return (
    <AccountLayout title="Invest in pig farm">
      <Stack spacing="30px">
        <CardLayout>
          <Stack p="20px" spacing="20px">
            <HStack>
              <Box color="green.400">
                <BsInfoCircleFill />
              </Box>
              <Text color="gray.500">Project details</Text>
            </HStack>
            <Text>
              Home Would contain a first section with the video Frame we talked
              about, then about the company, list of services ( list 3 from what
              admin has set and a view more button to go to another page called
              services page to view all the services on the system) Sign up
              button and login button where nessery, Goal and vision of the
              company set from admin, and anything you seem feet
            </Text>
          </Stack>
        </CardLayout>
        <CardLayout>
          <Stack spacing="30px" p="20px">
            <SimpleGrid spacing="20px" columns={{ base: 1, md: 2 }}>
              <MainInput />
              <MainInput />
              <MainInput />
              <MainInput />
              <MainInput />
              <MainInput />
              <MainInput />
            </SimpleGrid>

            <Box>
              <MainButton title="Invest" />
            </Box>
          </Stack>
        </CardLayout>
      </Stack>
    </AccountLayout>
  );
}
