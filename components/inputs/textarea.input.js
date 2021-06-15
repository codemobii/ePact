import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";

export default function TextareaInput({
  id = "message",
  label = "Message",
  isRequired = false,
}) {
  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Textarea borderColor="green.400" border="2px" />
      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
    </FormControl>
  );
}
