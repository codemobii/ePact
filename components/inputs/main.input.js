import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

export default function MainInput({
  id = "",
  label = "",
  isRequired = false,
  type = "email",
}) {
  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input borderColor="green.400" border="2px" type={type} />
      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
    </FormControl>
  );
}
