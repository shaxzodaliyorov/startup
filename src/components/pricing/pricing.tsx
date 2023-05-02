import { Button, Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";
import { PricingProps } from "./pricing.props";

const Pricing = ({ title, price, options, checked }: PricingProps) => {
   const { t } = useTranslation()
   return (
      <Stack
         p={3}
         py={3}
         justifyContent={{ base: "flex-start", md: "space-around" }}
         direction={{ base: "column", md: "row" }}
         align={{ md: "center" }}
      >
         <Heading size={"md"}>{title}</Heading>
         <List spacing={3} textAlign={"start"} >
            {options.map(item => (
               <ListItem key={item.id} >
                  <ListIcon as={FaCheckCircle} color={"cyan.400"} />
                  {item.desc}
               </ListItem>
            ))}
         </List>
         <Heading size={"xl"} >
            {price.toLocaleString("en-US", { currency: "USD", style: "currency" })}
         </Heading>
         <Button size={"md"} colorScheme={"cyan"} variant={checked ? "solid" : "outline"} >{t("pricing_btn", { ns: "global" })}</Button>
      </Stack>
   );
};

export default Pricing;
