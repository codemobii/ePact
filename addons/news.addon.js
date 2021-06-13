import { Image } from "@chakra-ui/image";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import MainButton from "../components/buttons/main.button";
import OutlineButton from "../components/buttons/outline.button";
import BgIllustration from "../components/helpers/bg_illus.helper";
import TitleHelper from "../components/helpers/title.helper";
import BoxContainer from "../components/layouts/container.layout";

export default function NewsAddon({ projects = [1, 2, 3], isHome = true }) {
  return (
    <Box
      w="100%"
      bgColor={isHome ? "gray.50" : "#fff"}
      py="80px"
      pos="relative"
    >
      {isHome && <BgIllustration />}
      <BoxContainer>
        <Stack align="center" spacing="30px">
          <SimpleGrid w="100%" spacing="20px" columns={{ base: 1, md: 3 }}>
            {projects.map((e, i) => (
              <Box key={i} rounded="4px" overflow="hidden">
                <Image
                  src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhcm1lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  h="160px"
                  w="100%"
                  objectFit="cover"
                  borderTopRightRadius="40px"
                />
                <Box
                  w="100%"
                  p="20px"
                  bg="gray.800"
                  color="gray.100"
                  pos="relative"
                >
                  <BgIllustration />
                  <Stack spacing="20px">
                    <Text>
                      Ceres Imaging works closely with agriculture professionals
                    </Text>
                    <Box as="span">
                      <OutlineButton
                        title="Discover"
                        link="/news/how-is-it-going-to-be-0909"
                      />
                    </Box>
                  </Stack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          {isHome && <MainButton title="Show All" />}
        </Stack>
      </BoxContainer>
    </Box>
  );
}
