import { Box, Button, Center, HStack, position, Text } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <>
      <Box
        pos={"relative"}
        _before={{
          content: '""',
          position: "absolute",
          width: "45%",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          height: "1px",
          bg: "gray.600",
        }}
        _after={{
          content: '""',
          position: "absolute",
          width: "45%",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          height: "1px",
          bg: "gray.600",
        }}
        textAlign={"center"}
      >
        OR
      </Box>
      <HStack>
        <Button w={"full"} colorScheme={"gray"} leftIcon={<AiFillGithub />}>
          <Center>
            <Text>Continue with Github</Text>
          </Center>
        </Button>
        <Button
          w={"full"}
          variant={"outline"}
          colorScheme={"red"}
          leftIcon={<AiOutlineGoogle />}
        >
          <Center>
            <Text>Continue with Google</Text>
          </Center>
        </Button>
      </HStack>
    </>
  );
};

export default SocialMedia;
