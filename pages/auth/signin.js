import { Checkbox } from "@chakra-ui/checkbox";
import { Link, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import MainButton from "../../components/buttons/main.button";
import MainInput from "../../components/inputs/main.input";
import AuthLayout from "../../components/layouts/auth.layout";

export default function Signin() {
  return (
    <AuthLayout title="Sign In" heading="Sign in to your account">
      <Stack spacing={4}>
        <MainInput id="email" label="Email address" isRequired type="email" />
        <MainInput id="password" label="Password" isRequired type="password" />
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
