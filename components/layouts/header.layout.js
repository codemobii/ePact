import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/client";
import BoxContainer from "./container.layout";
import MainButton from "../buttons/main.button";
import { useRouter } from "next/router";
import { GlobalContext } from "../../pages/_app";
import { useContext } from "react";
import { getStrapiMedia } from "../../utils/media.util";

const Links = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Feedback",
    href: "/contact",
  },
];

const NavLink = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href}
  >
    {children}
  </Link>
);

export default function MainHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [session, loading] = useSession();

  const router = useRouter();
  const path = router.pathname;

  const global = useContext(GlobalContext);

  return (
    <>
      <Box bg="white">
        <BoxContainer>
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={{ base: "center", md: "space-between" }}
          >
            {/* <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
            <HStack spacing={8} alignItems={"center"}>
              <Image
                cursor="pointer"
                src={getStrapiMedia(global.logo)}
                w="130px"
              />
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link} href={link.href}>
                    {link.label}
                  </NavLink>
                ))}
              </HStack>
            </HStack>
            <Box d={{ base: "none", md: "flex" }}>
              {!loading && session ? (
                <MainButton link="/account" title="Account" />
              ) : (
                <MainButton
                  link="/api/auth/signin"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                  title="Sign In"
                />
              )}
            </Box>
          </Flex>
        </BoxContainer>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
