import { layoutProps } from "./layout.props"
import { Box, Container } from "@chakra-ui/react"
import Header from "./header/header"
import { FunctionComponent, useState } from "react"
import Sidebar from "./sidebar/sidebar"
import Footer from "./footer/footer"


const Layout = ({ children }: layoutProps): JSX.Element => {
   const [toggle, setToggle] = useState<boolean>(false)

   const onToggle = () => setToggle(prev => !prev)

   return (
      <Box maxW="full" overflow={"hidden"} >
         <Header onToggle={onToggle} />
         <Sidebar toggle={toggle} />
         <Box mt={"11vh"} pl={{ base: 0, lg: '320px' }} minH={"90vh"} transition={"all .3s linear"} >
            <Container maxW={"container.lg"} >
               {children}
            </Container>
         </Box>
         <Footer />
      </Box>
   )
}

export default Layout

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
   return function withLayoutComponent(props: T): JSX.Element {
      return <Layout>
         <Component  {...props} />
      </Layout>
   }
}