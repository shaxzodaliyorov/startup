import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { language, navigation } from "../../config/constants";
import { DarkLogo, LightLogo } from "../../icons";

const AuthNavbarComponet = () => {
  const { colorMode, toggleColorMode } = useColorMode();


  const LinkHoverColor = useColorModeValue("black", "white");



  const { t, i18n } = useTranslation();

  const onLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box w={"full"} h={"10vh"}>
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

            <Menu placement="bottom">
              <MenuButton
                aria-label="translate"
                as={Button}
                variant={"outline"}
                rightIcon={<TbWorld />}
                textTransform={"uppercase"}
              >
                {i18n.resolvedLanguage}
              </MenuButton>
              <MenuList p={0} overflow={"hidden"}>
                {language.map((item, index) => (
                  <MenuItem
                    onClick={() => onLanguage(item.lng)}
                    key={index}
                    icon={<item.icon />}
                    backgroundColor={
                      i18n.resolvedLanguage === item.lng ? "cyan.500" : ""
                    }
                  >
                    {item.nativeLng}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

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
