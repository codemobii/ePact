import { Button } from "@chakra-ui/button";
import { Box, Center, Heading, Link, Stack } from "@chakra-ui/layout";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import MainButton from "../components/buttons/main.button";

export default function BannerAddon() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // ******************* CUSTOMIZE THE CONTROL BUTTON ****************** //

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <Button
        pos="absolute"
        right="30px"
        zIndex="50"
        bottom="50%"
        mt="50px"
        onClick={onClick}
        d={{ base: "none", md: "flex" }}
        size="sm"
        leftIcon={
          <BsChevronRight style={{ marginRight: "-10px" }} size="24px" />
        }
        rounded="full"
        pl="0px"
        pr="0"
      />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <Button
        pos="absolute"
        left="30px"
        zIndex="50"
        bottom="50%"
        d={{ base: "none", md: "flex" }}
        mt="50px"
        onClick={onClick}
        size="sm"
        leftIcon={<BsChevronLeft style={{ marginRight: "-5px" }} size="24px" />}
        rounded="full"
        pl="0px"
        pr="0"
      />
    );
  }

  return (
    <Slider {...settings}>
      <Box
        backgroundImage="url(https://images.unsplash.com/photo-1529045138962-5f59528258fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80)"
        bgSize="cover"
        bgPos="center"
        h="500px"
        bgRepeat="no-repeat"
      >
        <Center
          w="100%"
          h="100%"
          // bg="green.200"
          bgGradient={"linear(to-r, blackAlpha.600, rgba(0,0,0,0.8))"}
          color="white"
        >
          <Stack spacing="30px" maxW="3xl" textAlign="center">
            <Heading fontSize={{ base: "3xl", md: "5xl" }}>
              Menu Berbuka Puasa Khas Asia Untuk Pelangganmu
            </Heading>

            <Box as="span">
              <MainButton title="Get start" />
            </Box>
          </Stack>
        </Center>
      </Box>

      <Box
        backgroundImage="url(https://images.unsplash.com/photo-1575527820586-5f350ab37c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
        bgSize="cover"
        bgPos="center"
        h="500px"
        bgRepeat="no-repeat"
      >
        <Center
          w="100%"
          h="100%"
          // bg="green.200"
          bgGradient={"linear(to-r, blackAlpha.600, rgba(0,0,0,0.8))"}
          color="white"
        >
          <Stack spacing="30px" maxW="3xl" textAlign="center">
            <Heading fontSize={{ base: "3xl", md: "5xl" }}>
              Menu Berbuka Puasa Khas Asia Untuk Pelangganmu
            </Heading>

            <Box as="span">
              <MainButton title="Get start" />
            </Box>
          </Stack>
        </Center>
      </Box>
    </Slider>
  );
}
