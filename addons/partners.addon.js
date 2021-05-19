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

export default function PartnerAddon({
  isHome = false,
  title = "Our Partners",
}) {
  return (
    <Box pos="relative" py="80px">
      <BoxContainer>
        <SimpleGrid columns={{ base: "1", md: "2" }} spacing="30px">
          <Stack spacing="30px">
            <TitleHelper>{title}</TitleHelper>
            <Text>
              Eden Farm works with local producers across Indonesia to provide
              all kind of food ingredients needed by the culinary businesses. We
              give our farmers more income and demand forecast to maintain their
              production consistency. Sign-up for more information!
            </Text>
            {isHome && (
              <Center>
                <MainButton title="Read More" />
              </Center>
            )}
          </Stack>
          <Box>
            <Image
              w="100%"
              h="380px"
              src="https://images.unsplash.com/photo-1610624728020-2d57fe84c94f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </SimpleGrid>
      </BoxContainer>
    </Box>
  );
}
