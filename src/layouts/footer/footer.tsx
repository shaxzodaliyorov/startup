import { Box, Flex, HStack, IconButton, Text, useColorModeValue } from "@chakra-ui/react"
import { format } from "date-fns"
import { useTranslation } from "react-i18next"
import { FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa"
const Footer = () => {
   const { t } = useTranslation()
   return <Box pl={{ base: 0, lg: '320px' }} borderTop="1px" h={"10vh"} px={2} borderTopColor={useColorModeValue("gray.200", "gray.700")} w={"full"} mt={10} bg={useColorModeValue("gray.50", "gray.800")} color={useColorModeValue("gray.700", "gray.200")} >
      <Flex justifyContent={"space-between"} alignItems={'center'} w={"full"} h={"full"}  >
         <Text>© {format(new Date(), "yyyy")} {t("footer", { ns: "layout" })}</Text>
         <Flex>
            <HStack>
               <IconButton aria-label="telegram" colorScheme={"cyan"} variant={"outline"} icon={<FaTelegram />} />
               <IconButton aria-label="instagram" colorScheme={"cyan"} variant={"outline"} icon={<FaInstagram />} />
               <IconButton aria-label="tik tok" colorScheme={"cyan"} variant={"outline"} icon={<FaTiktok />} />
            </HStack>
         </Flex>
      </Flex>
   </Box>
}

export default Footer