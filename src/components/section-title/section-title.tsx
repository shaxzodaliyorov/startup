import { Box, Heading, Text } from "@chakra-ui/react"
import { SectionTitleProps } from "./section-title.props"

const SectionTitle = ({ title, subtitle, ...pops }: SectionTitleProps): JSX.Element => {
   return (
      <Box {...pops} >
         <Heading as={"h3"} >{title}</Heading>
         <Text mt={1} opacity={'.8'} >{subtitle}</Text>
      </Box>
   )
}

export default SectionTitle