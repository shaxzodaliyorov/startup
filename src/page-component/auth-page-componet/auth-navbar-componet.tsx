import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { navigation } from "../../config/constants";
import { DarkLogo, LightLogo } from "../../icons";

const AuthNavbarComponet = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { t } = useTranslation();

  const LinkHoverColor = useColorModeValue("black", "white");

  return (
    <Box
      w={"full"}
      h={"10vh"}
    >
      <Container maxW={"container.lg"}>
        <Flex align={"center"} h={"10vh"} justifyContent={"space-between"}>
          <Link href={"/"}>
            {colorMode === "light" ? <DarkLogo /> : <LightLogo />}
          </Link>
          <HStack spacing={6}>
            {navigation[1].links.map((item) => (
              <Link key={item.route} href={item.route}>
                <Box
                  as={"a"}
                  color={"facebook.200"}
                  _hover={{
                    textDecoration: "underline",
                    color: LinkHoverColor,
                  }}
                >
                  {t(item.label, { ns: "layout" })}
                </Box>
              </Link>
            ))}
            <IconButton
              onClick={toggleColorMode}
              aria-label="color-mode"
              icon={
                colorMode == "light" ? <BsFillMoonFill /> : <BsFillSunFill />
              }
              colorScheme={"cyan"}
              variant={"outline"}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default AuthNavbarComponet;
