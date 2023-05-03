import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { RegisterProps } from "./register.props";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { UseShowPassword } from "../../hooks/useShowPassword";
import { useTranslation } from "react-i18next";

const Register = ({ onNavigateStateComponent }: RegisterProps) => {
  const {
    show,
    ToggleShow,
    showConfirm,
    ToggleShowConfirm,
  } = UseShowPassword();

  const { t } = useTranslation();

  return (
    <Stack spacing={4}>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {t("register_title", { ns: "global" })}
        <Text
          as={"span"}
          bgGradient="linear(to-r,gray.400,cyan.400)"
          bgClip={"text"}
        >
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        {t("register_description", { ns: "global" })}
      </Text>
      <FormControl colorScheme={"cyan"} isRequired>
        <FormLabel>
          {t("register_input_confirm_password_label", { ns: "global" })}
        </FormLabel>
        <Input
          focusBorderColor="cyan.400"
          type={"text"}
          placeholder={"exmpale@gmail.com"}
          h={14}
        />
      </FormControl>
      <HStack>
        <FormControl colorScheme={"cyan"} isRequired>
          <FormLabel>
            {t("login_input_password_label", { ns: "global" })}
          </FormLabel>
          <InputGroup>
            <Input
              type={show ? "password" : "text"}
              focusBorderColor="cyan.400"
              placeholder={"****"}
              h={14}
            />
            <InputRightElement width="4.5rem">
              <Icon
                as={show ? AiOutlineEye : AiOutlineEyeInvisible}
                cursor={"pointer"}
                mt={4}
                onClick={ToggleShow}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl colorScheme={"cyan"} isRequired>
          <FormLabel>
            {t("register_input_confirm_password_label", { ns: "global" })}
          </FormLabel>
          <InputGroup>
            <Input
              type={showConfirm ? "password" : "text"}
              focusBorderColor="cyan.400"
              placeholder={"****"}
              h={14}
            />
            <InputRightElement width="4.5rem">
              <Icon
                as={showConfirm ? AiOutlineEye : AiOutlineEyeInvisible}
                cursor={"pointer"}
                mt={4}
                onClick={ToggleShowConfirm}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </HStack>
      <HStack justify={"space-between"}>
        <Checkbox>{t("auth_remember_me", { ns: "global" })}</Checkbox>
        <Box
          as={"span"}
          color={"cyan.500"}
          _hover={{ textDecoration: "underline" }}
          cursor={"pointer"}
          onClick={() => onNavigateStateComponent("account-recovery")}
        >
          {t("auth_forgot_password", { ns: "global" })}
        </Box>
      </HStack>
      <Button
        fontFamily={"heading"}
        mt={4}
        w={"full"}
        bgGradient="linear(to-r,cyan.400,gray.400)"
        h={14}
        _hover={{
          bgGradient: "linear(to-r,cyan.600,gray.600)",
          boxShadow: "xl",
        }}
      >
        {t("register_btn", { ns: "global" })}
      </Button>
      <Text>
        {t("register_already_have_account", { ns: "global" })}
        <Box
          as={"span"}
          color={"cyan.400"}
          cursor={"pointer"}
          _hover={{
            textDecoration: "underline",
          }}
          onClick={() => onNavigateStateComponent("login")}
        >
          login
        </Box>
      </Text>
    </Stack>
  );
};

export default Register;
