import { Link, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import MainButton from "../../components/buttons/main.button";
import MainInput from "../../components/inputs/main.input";
import AuthLayout from "../../components/layouts/auth.layout";

export default function SignUp() {
  return (
    <AuthLayout title="Sign Up" heading="Create your ePact account">
      <Stack spacing={4}>
        <MainInput id="firstname" label="First name" isRequired type="text" />
        <MainInput id="lastname" label="Last name" isRequired type="text" />
        <MainInput id="email" label="Email address" isRequired type="email" />
        <MainInput id="password" label="Password" isRequired type="password" />
        <Stack spacing={10}>
          <Stack textAlign="center">
            <MainButton title="Sign Up" />

            <Text>
              Already have account?{" "}
              <Link color={"green.400"} href="/auth/signin">
                Sign In
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </AuthLayout>
  );
}
