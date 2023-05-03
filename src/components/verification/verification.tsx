import {
  Button,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Verification = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={4}>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {t("verification_title", { ns: "global" })}
        <Text
          as={"span"}
          bgGradient="linear(to-r,gray.400,cyan.400)"
          bgClip={"text"}
        >
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        {t("verification_description", { ns: "global" })}
      </Text>
      <HStack justifyContent={"center"} p={4}>
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
      >
        {t("verification_btn", { ns: "global" })}
      </Button>
    </Stack>
  );
};

export default Verification;
