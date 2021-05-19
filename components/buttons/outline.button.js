import { Button } from "@chakra-ui/button";
import React from "react";

export default function OutlineButton({
  title = "Button",
  onClick = () => {},
  loading = false,
  link = false,
}) {
  return (
    <Button
      fontSize={"sm"}
      fontWeight={"bold"}
      color={"white"}
      bg="transparent"
      border="2px"
      borderColor={"green.400"}
      href={link}
      _hover={{
        bg: "green.300",
        borderColor: "green.300",
      }}
      _active={{
        bg: "green.500",
      }}
      px="50px"
      rounded="full"
      size="lg"
      as={link ? "a" : "button"}
      onClick={onClick}
      isLoading={loading}
      loadingText="Loading"
    >
      {title}
    </Button>
  );
}
