import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Link, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import MainButton from "../../components/buttons/main.button";
import AuthLayout from "../../components/layouts/auth.layout";

export default function Signin() {
  return (
    <AuthLayout title="Sign In" heading="Sign in to your account">
      <Stack spacing={4}>
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
            <Checkbox colorScheme="green">Remember me</Checkbox>
            <Link color={"green.400"} href="/auth/password/forgot">
              Forgot password?
            </Link>
          </Stack>
          <Stack textAlign="center">
            <MainButton title="Sign In" />

            <Text>
              Don't have account?{" "}
              <Link color={"green.400"} href="/auth/signup">
                Sign Up
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </AuthLayout>
  );
}
