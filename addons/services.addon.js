import { Image } from "@chakra-ui/image";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { useBreakpoint, useBreakpointValue } from "@chakra-ui/media-query";
import React from "react";
import BgIllustration from "../components/helpers/bg_illus.helper";
import TitleHelper from "../components/helpers/title.helper";
import BoxContainer from "../components/layouts/container.layout";

export default function ServicesAddon({ isBg = false }) {
  return (
    <Box py="80px" pos="relative" bgColor={isBg && "gray.50"}>
      {isBg && <BgIllustration />}
      <BoxContainer>
        <Stack spacing="30px">
          <TitleHelper color={isBg && "gray.50"}>Our Services</TitleHelper>

          <SimpleGrid w="100%" spacing="20px" columns={{ base: 2, md: 5 }}>
            {[1, 2, 3, 4, 5].map((e, i) => (
              <Stack
                pos="relative"
                _before={{
                  content: "''",
                  pos: "absolute",
                  left: "-40px",
                  borderLeft:
                    (i === 1 || i === 3 || i === 5) &&
                    useBreakpointValue({ base: "1px", md: "0" }),
                  h: (i === 1 || i === 3 || i === 5) && "100px",
                  borderStyle: "dashed",
                  borderColor: "gray.400",
                  d: useBreakpoint({ base: "block", md: "none" }),
                }}
                margin="auto"
                align="center"
                textAlign="center"
                key={i}
              >
                <Image
                  w="120px"
                  objectFit="contain"
                  src="https://static.wixstatic.com/media/3db22c_e9aa05ae68154a7e8e4ad8053ea0cadb~mv2.png/v1/fill/w_108,h_93,al_c,q_85,usm_0.66_1.00_0.01/asset%20our%20best%20service-02.webp"
                />
                <Text fontWeight="bold" w="100px">
                  Everything is Here
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </BoxContainer>
    </Box>
  );
}
