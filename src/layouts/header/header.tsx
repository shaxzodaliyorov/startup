import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  useColorMode,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { DarkLogo, EngIcons, LightLogo } from "../../icons";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { BiLogIn, BiMenuAltLeft } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";
import Link from "next/link";
import { headerProps } from "./header.props";
import { language } from "../../config/constants";
import { useTranslation } from "react-i18next";
import { TbWorld } from "react-icons/tb";
import { useRouter } from "next/router";
const Header = ({ onToggle }: headerProps): JSX.Element => {
  const router = useRouter();

  const { toggleColorMode, colorMode } = useColorMode();

  const { t, i18n } = useTranslation();

  const onLanguage = (lng: string) => {
    router.replace(router.asPath);
    i18n.changeLanguage(lng);
  };

  return (
    <Box
      w={"full"}
      pos={"fixed"}
      zIndex={99}
      bg={useColorModeValue("gray.50", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
      h={"10vh"}
      top={0}
      left={0}
      px={10}
      borderBottom="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Flex h={"full"} justifyContent={"space-between"} alignItems={"center"}>
        <HStack>
          <Icon
            as={BiMenuAltLeft}
            w={6}
            h={6}
            cursor="pointer"
            onClick={onToggle}
          />
          <Link href={"/"}>
            {colorMode === "light" ? <DarkLogo /> : <LightLogo />}
          </Link>
        </HStack>
        <HStack>
          <IconButton
            aria-label="support"
            icon={<MdContactSupport />}
            colorScheme={"cyan"}
            variant={"ghost"}
          />
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
            icon={colorMode == "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
            colorScheme={"cyan"}
            variant={"outline"}
          />
          <Button
            onClick={() => router.push("/auth")}
            rightIcon={<BiLogIn size={"1.3rem"} />}
            colorScheme={"cyan"}
          >
            {t("login", { ns: "layout" })}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
