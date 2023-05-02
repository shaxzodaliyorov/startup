import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { LoginProps } from "./login.props";

const Login = ({ onNavigateStateComponent }: LoginProps) => {
  return (
    <Stack spacing={4}>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        Login {""}
        <Text
          as={"span"}
          bgGradient="linear(to-r,gray.400,cyan.400)"
          bgClip={"text"}
        >
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        We’re happy to see you again on our platform, for getting more
        experience please sign in on your account!
      </Text>
      <FormControl colorScheme={"cyan"} isRequired>
        <FormLabel>Email Adresss</FormLabel>
        <Input
          focusBorderColor="cyan.400"
          type={"text"}
          placeholder={"exmpale@gmail.com"}
          h={14}
        />
      </FormControl>
      <FormControl colorScheme={"cyan"} isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type={"password"}
          focusBorderColor="cyan.400"
          placeholder={"****"}
          h={14}
        />
      </FormControl>
      <HStack justify={"space-between"}>
        <Checkbox>Remember me</Checkbox>
        <Link href={"/account-recovery"}>
          <Box
            as={"span"}
            color={"cyan.500"}
            _hover={{ textDecoration: "underline" }}
          >
            Forgot password?
          </Box>
        </Link>
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
        Submit
      </Button>
      <Text>
        Not account yet?{" "}
        <Box
          as={"span"}
          color={"cyan.400"}
          cursor={"pointer"}
          _hover={{
            textDecoration: "underline",
          }}
          onClick={() => onNavigateStateComponent("register")}
        >
          Register
        </Box>
      </Text>
    </Stack>
  );
};

export default Login;
