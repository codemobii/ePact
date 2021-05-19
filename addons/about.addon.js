import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import MainButton from "../components/buttons/main.button";
import TitleHelper from "../components/helpers/title.helper";
import BoxContainer from "../components/layouts/container.layout";

export default function AboutAddon({ isHome = false, title = "About Us" }) {
  return (
    <Box pos="relative" py="80px">
      <BoxContainer>
        <SimpleGrid columns={{ base: "1", md: "2" }} spacing="30px">
          <Box>
            <Image
              w="100%"
              h="380px"
              src="https://images.unsplash.com/photo-1551924769-258e56dae218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
          <Stack spacing="30px">
            <TitleHelper>{title}</TitleHelper>
            <Text>
              Eden Farms is building the new food distribution network for
              Indonesia by simplifying the supply chain, ensuring stable pricing
              and abolishing food waste. Established in 2017, we deliver the
              most complete food ingredients variety to multi-segment
              restaurants, grocery shops, and community resellers by working
              directly with thousands of local producers across the country.
            </Text>
            {isHome && (
              <Center>
                <MainButton title="Read More" />
              </Center>
            )}
          </Stack>
        </SimpleGrid>
      </BoxContainer>
    </Box>
  );
}
