import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  PinInput,
  PinInputField,
  Progress,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { UseShowPassword } from "../../hooks/useShowPassword";
import { AccountRecoveryProps } from "./account-recovery.props";

const AccountRecovery = ({
  onNavigateStateComponent,
}: AccountRecoveryProps) => {
  const { t } = useTranslation();

  const [progress, setProgress] = useState<33.33 | 66.66 | 100>(33.33);

  const {
    show,
    ToggleShow,
    showConfirm,
    ToggleShowConfirm,
  } = UseShowPassword();

  const toats = useToast();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  const onForm1Submit = () => {
    setStep(2);
    setProgress(66.66);
  };

  const onForm2Submit = () => {
    setStep(3);
    setProgress(100);
  };

  const onForm3Submit = () => {
    onNavigateStateComponent("login");
    toats({
      title: "SuccessFully Edited",
      description: "you can login to account with new password",
      isClosable: true,
      size: "md",
      status: "success",
      position: "top-right",
    });
  };

  const Form1 = (
    <>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {t("account_recovery_title_form1", { ns: "global" })} {""}
        <Text
          as={"span"}
          bgGradient="linear(to-r,gray.400,cyan.400)"
          bgClip={"text"}
        >
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        {t("account_recovery_description_form1", { ns: "global" })}
      </Text>

      <FormControl colorScheme={"cyan"} isRequired>
        <FormLabel>{t("login_input_email_label", { ns: "global" })}</FormLabel>
        <Input
          focusBorderColor="cyan.400"
          type={"text"}
          placeholder={"exmpale@gmail.com"}
          h={14}
        />
      </FormControl>
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
        onClick={onForm1Submit}
      >
        {t("account_recovery_btn_form1", { ns: "global" })}
      </Button>
    </>
  );
  const Form2 = (
    <>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {t("account_recovery_title_form2", { ns: "global" })} {""}
        <Text
          as={"span"}
          bgGradient="linear(to-r,gray.400,cyan.400)"
          bgClip={"text"}
        >
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        {t("account_recovery_description_form2", { ns: "global" })}
      </Text>
      <HStack justify={"center"}>
        <PinInput
          otp
          size={"lg"}
          focusBorderColor={"cyan.400"}
          colorScheme={"cyan.400"}
        >
          {new Array(6).fill(1).map((_, index) => (
            <PinInputField key={index} />
          ))}
        </PinInput>
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
        onClick={onForm2Submit}
      >
        {t("account_recovery_btn_form2", { ns: "global" })}
      </Button>
    </>
  );
  const Form3 = (
    <>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {t("account_recovery_title_form3", { ns: "global" })} {""}
        <Text
          as={"span"}
          bgGradient="linear(to-r,gray.400,cyan.400)"
          bgClip={"text"}
        >
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        {t("account_recovery_description_form3", { ns: "global" })}
      </Text>

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
        onClick={onForm3Submit}
      >
        {t("account_recovery_btn_form3", { ns: "global" })}
      </Button>
    </>
  );

  return (
    <>
      <Progress value={progress} colorScheme={"cyan"} hasStripe isAnimated />
      <Stack spacing={4}>
        {step === 1 && Form1}
        {step === 2 && Form2}
        {step === 3 && Form3}
      </Stack>
    </>
  );
};

export default AccountRecovery;
