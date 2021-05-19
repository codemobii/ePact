import {
  Flex,
  Box,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";

export default function AuthLayout({ children, title = "", heading = "" }) {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Head>
        <title>ePact :: {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading textAlign="center" fontSize={"4xl"}>
            {heading}
          </Heading>
          {/* <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          {children}
        </Box>
      </Stack>
    </Flex>
  );
}

{
  /* <Stack spacing={4}>
  <FormControl id="email">
    <FormLabel>Email address</FormLabel>
    <Input type="email" />
  </FormControl>
  <FormControl id="password">
    <FormLabel>Password</FormLabel>
    <Input type="password" />
  </FormControl>
  <Stack spacing={10}>
    <Stack
      direction={{ base: "column", sm: "row" }}
      align={"start"}
      justify={"space-between"}
    >
      <Checkbox>Remember me</Checkbox>
      <Link color={"blue.400"}>Forgot password?</Link>
    </Stack>
    <Button
      bg={"blue.400"}
      color={"white"}
      _hover={{
        bg: "blue.500",
      }}
    >
      Sign in
    </Button>
  </Stack>
</Stack>; */
}
