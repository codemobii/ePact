import { Image } from "@chakra-ui/image";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import MainButton from "../components/buttons/main.button";
import OutlineButton from "../components/buttons/outline.button";
import BgIllustration from "../components/helpers/bg_illus.helper";
import TitleHelper from "../components/helpers/title.helper";
import BoxContainer from "../components/layouts/container.layout";

export default function ProjectsAddon({
  projects = [1, 2, 3],
  isHome = true,
  isAccount = false,
}) {
  return (
    <Box
      w="100%"
      bgColor={isHome ? "gray.50" : isAccount ? "transparent" : "#fff"}
      py="80px"
      pos="relative"
    >
      {isHome && <BgIllustration />}
      <BoxContainer>
        <Stack align="center" spacing="30px">
          {isHome && (
            <TitleHelper
              color="gray.50"
              desc="From Apple to Zucchini, everything is here! Sign-up for more information!"
            >
              Our Projects
            </TitleHelper>
          )}

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
                  <Stack textAlign="center" spacing="20px">
                    <Text fontSize="xl">Ceres Imaging works</Text>
                    <Stack>
                      <Flex
                        py="8px"
                        borderTop="2px"
                        borderColor="gray.600"
                        borderStyle="dotted"
                        w="100%"
                      >
                        <Text>Minimum</Text>
                        <Spacer />
                        <Text>N20,000</Text>
                      </Flex>

                      <Flex
                        py="8px"
                        borderTop="2px"
                        borderColor="gray.600"
                        borderStyle="dotted"
                        w="100%"
                      >
                        <Text>Maximum</Text>
                        <Spacer />
                        <Text>N100,000</Text>
                      </Flex>

                      <Flex
                        py="8px"
                        borderTop="2px"
                        borderColor="gray.600"
                        borderStyle="dotted"
                        w="100%"
                      >
                        <Text>Available tokens</Text>
                        <Spacer />
                        <Text>100</Text>
                      </Flex>

                      <Flex
                        py="8px"
                        borderTop="2px"
                        borderBottom="2px"
                        borderColor="gray.600"
                        borderStyle="dotted"
                        w="100%"
                      >
                        <Text>Token price</Text>
                        <Spacer />
                        <Text>N10,000 per token</Text>
                      </Flex>
                    </Stack>
                    <Box as="span">
                      <OutlineButton
                        title="Invest"
                        link="/account/projects/invest/1213r3938"
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
