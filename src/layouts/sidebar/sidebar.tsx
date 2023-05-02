import { Box, Button, Container, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { navigation } from "../../config/constants"
import { SidebarProps } from "./sidebar.props"

const Sidebar = ({ toggle }: SidebarProps): JSX.Element => {
   const router = useRouter()
   const { t, i18n } = useTranslation()
   return (
      <Box w={{ base: "full", lg: "300px" }} overflowY="scroll" css={{
         '&::-webkit-scrollbar': { width: '1px' },
         '&::-webkit-scrollbar-track': { width: '1px' },
         '&::-webkit-scrollbar-thumb': { background: 'transparent' },
      }}
         color={useColorModeValue("gray.700", "gray.200")}
         pos={'fixed'}
         zIndex={99}
         left={{ base: toggle ? 0 : "-100%", lg: 0 }}
         top={"10vh"}
         transition={"all .3s linear"}
         h={"90vh"}
         bg={useColorModeValue("gray.50", "gray.900")}
         borderRight={'1px'}
         borderRightColor={useColorModeValue("gray.200", "gray.700")} >
         <Container maxW={"container.xl"} >
            {navigation.map(item => (
               <Box key={item.title} mt={10} >
                  <Text>{t(item.title, { ns: "layout" })}</Text>
                  {item.links.map(nav => {
                     const active = `/${router.pathname.split("/")[1]}` == nav.route
                     return <Link href={nav.route} key={nav.label} >
                        <Button w={'full'} justifyContent={"flex-start"} h={14} mt={2} colorScheme={"cyan"} variant={active ? "solid" : "ghost"} >
                           <HStack gap={2} >
                              <Icon as={nav.icon} />
                              <Text>{t(nav.label, { ns: "layout" })}</Text>
                           </HStack>
                        </Button>
                     </Link>
                  })}
               </Box>
            ))}
         </Container>
      </Box>
   )
}

export default Sidebar