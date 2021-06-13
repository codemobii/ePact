import { Box, Center, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Slider from "react-slick";
import BgIllustration from "../components/helpers/bg_illus.helper";
import BoxContainer from "../components/layouts/container.layout";

export default function TestimonialsAddon({ isWhiteBg = false }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const Qoute = () => (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      fill={!isWhiteBg && "#fff"}
      width="60px"
      height="60px"
    >
      <g id="Quotemarks-right">
        <path
          d="M14.1933422,9.4116497c-7.8260994,0-14.1922989,6.3662004-14.1922989,14.1924
		c0,7.5498009,5.9247999,13.7420998,13.3690996,14.169899c0.1288996,1.3916016,0.0321999,5.1797028-3.5977001,10.4491997
		C9.4980431,48.6206512,9.547843,49.1567497,9.888648,49.497551c1.4853945,1.4853973,2.4033947,2.4208984,3.0458946,3.0751991
		c0.8408995,0.8554993,1.2247,1.2461014,1.7861996,1.7559013c0.1904001,0.1727982,0.4306002,0.259697,0.6719055,0.259697
		c0.2342949,0,0.4676943-0.0819969,0.6561956-0.2450981c6.3251991-5.5038986,13.3515987-16.8759995,12.3349991-30.8115005
		C27.7881413,15.3501501,21.820343,9.4116497,14.1933422,9.4116497z M15.4023428,52.2221489
		c-0.2723999-0.2684975-0.5830002-0.5848999-1.0410004-1.0508003c-0.5565996-0.5672989-1.3203001-1.3446999-2.4784994-2.5067978
		c4.4053001-6.7881012,3.5731993-11.6230011,3.2089996-12.3164024c-0.1729002-0.3290977-0.5274-0.5507965-0.8985004-0.5507965
		c-6.7225995,0-12.1922989-5.4697018-12.1922989-12.1933022c0-6.7227001,5.4696999-12.1924,12.1922989-12.1924
		c6.5489006,0,11.6777992,5.1582012,12.1963062,12.2646008C27.5322418,39.3501511,18.2168427,49.5268517,15.4023428,52.2221489z"
        />
        <path
          d="M63.9004402,23.5317497v-0.0009995C63.302742,15.3501501,57.3340416,9.4116497,49.7090416,9.4116497
		c-7.8261986,0-14.1933937,6.3662004-14.1933937,14.1924c0,7.5498009,5.9257927,13.7420998,13.3710938,14.169899
		c0.1289062,1.3906021,0.0312004,5.1767006-3.5996017,10.4491997c-0.2743988,0.3975029-0.2245979,0.9336014,0.1162033,1.2744026
		c1.4794998,1.4794998,2.3955002,2.4130974,3.0380974,3.0663986c0.8446999,0.8613014,1.2304993,1.2538986,1.7949028,1.7656021
		c0.1903992,0.1718979,0.4315987,0.2587967,0.6718979,0.2587967c0.2344055,0,0.4678001-0.0819969,0.6562004-0.2460976
		C57.8896484,48.8383484,64.9160385,37.4663506,63.9004402,23.5317497z M50.917942,52.2221489
		c-0.2743988-0.2705002-0.5877991-0.5887985-1.0498009-1.0594978c-0.5565987-0.5665016-1.3172989-1.3418007-2.4706993-2.4981003
		c4.4053001-6.7891006,3.5742989-11.6230011,3.2109985-12.3164024c-0.1728973-0.3280983-0.5282974-0.5507965-0.8993988-0.5507965
		c-6.7237015,0-12.1933937-5.4697018-12.1933937-12.1933022c0-6.7227001,5.4696922-12.1924,12.1933937-12.1924
		c6.5477982,0,11.6777,5.1582012,12.1972008,12.2656002v-0.0009995
		C63.0478401,39.3481483,53.7324409,49.5268517,50.917942,52.2221489z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );

  return (
    <Box
      w="100%"
      position="relative"
      bg={isWhiteBg ? "white" : "gray.700"}
      py="80px"
    >
      {!isWhiteBg && <BgIllustration />}
      <BoxContainer>
        <Stack spacing="30px">
          <Center>
            <Qoute />
          </Center>

          <Slider {...settings}>
            <div>
              <Center w="100%">
                <Stack
                  color={!isWhiteBg && "gray.100"}
                  spacing="20px"
                  maxW="600px"
                  textAlign="center"
                >
                  <Text fontWeight="medium">
                    We’re a team of diverse subject-matter experts, from
                    agronomists and PCAs to engineers and astrophysicists. We’re
                    passionate about agriculture because we farm, too.
                  </Text>

                  <Stack textTransform="uppercase">
                    <Text fontSize="sm" fontWeight="medium">
                      John Chimaobi, Manager
                    </Text>
                    <Text fontSize="sm" fontWeight="light">
                      DAIMOND Globals
                    </Text>
                  </Stack>
                </Stack>
              </Center>
            </div>

            <div>
              <Center w="100%">
                <Stack
                  color={!isWhiteBg && "gray.100"}
                  spacing="20px"
                  maxW="600px"
                  textAlign="center"
                >
                  <Text fontWeight="medium">
                    We’re a team of diverse subject-matter experts, from
                    agronomists and PCAs to engineers and astrophysicists. We’re
                    passionate about agriculture because we farm, too.
                  </Text>

                  <Stack textTransform="uppercase">
                    <Text fontSize="sm" fontWeight="medium">
                      John Chimaobi, Manager
                    </Text>
                    <Text fontSize="sm" fontWeight="light">
                      DAIMOND Globals
                    </Text>
                  </Stack>
                </Stack>
              </Center>
            </div>
          </Slider>
        </Stack>
      </BoxContainer>
    </Box>
  );
}
