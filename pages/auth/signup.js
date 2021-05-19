import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Link, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import MainButton from "../../components/buttons/main.button";
import AuthLayout from "../../components/layouts/auth.layout";

export default function SignUp() {
  return (
    <AuthLayout title="Sign Up" heading="Create your ePact account">
      <Stack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="name">
          <FormLabel>Fullname</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
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
