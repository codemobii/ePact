import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import TitleHelper from "../helpers/title.helper";

export default function ServiceCard({ title = "One service title" }) {
  return (
    <Box pos="relative">
      <Stack alignItems="center" textAlign="center" spacing="30px">
        <Box>
          <Image
            w="120px"
            objectFit="contain"
            src="https://static.wixstatic.com/media/3db22c_e9aa05ae68154a7e8e4ad8053ea0cadb~mv2.png/v1/fill/w_108,h_93,al_c,q_85,usm_0.66_1.00_0.01/asset%20our%20best%20service-02.webp"
          />
        </Box>
        <Stack spacing="30px">
          <TitleHelper>{title}</TitleHelper>
          <Text>
            Eden Farms is building the new food distribution network for
            Indonesia by simplifying the supply chain, ensuring stable pricing
            and abolishing food waste. Established in 2017, we deliver the most
            complete food ingredients variety to multi-segment restaurants,
            grocery shops, and community resellers by working directly with
            thousands of local producers across the country.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
