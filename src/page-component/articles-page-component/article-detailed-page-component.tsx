import { Avatar, Box, Card, CardBody, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { format } from "date-fns"
import { useTranslation } from "react-i18next"
import { TimeReadingText } from "../../helpers/time.helpers"
import { ArticleDetailedProps } from "./article-detailed.props"
import { RichText } from '@graphcms/rich-text-react-renderer';


const ArticleDetailedPageComponent = ({ article }: ArticleDetailedProps) => {
   const { t } = useTranslation()
   return <>
      <Card>
         <CardBody>
            <Box
               w={'full'}
               h={{ base: "30vh", lg: "60vh" }}
               backgroundImage={`url(${article.image.url})`}
               key={article.id}
               backgroundPosition={"center"}
               backgroundRepeat={"no-repeat"}
               backgroundSize={'cover'}
               position={"relative"}
            >
               <Box pos={"absolute"} top={0} left={0} right={0} bottom={0} bg={"rgba(0,0,0,0.8)"} >

                  <Stack justifyContent={"center"} spacing={3} w={{ base: "100%", lg: "70%" }} pl={{ base: 3, lg: 10 }} pos={"relative"} h={"full"} >
                     <Heading color={"white"} >{article.title}</Heading>
                     <Text color={"gray.400"}  >{article.excerpt}</Text>
                     <HStack>
                        <Avatar src={article.author.avatar.url} />
                        <Box>
                           <Text color={"white"} >{article.author.name}</Text>
                           <Text color={"gray.500"} >
                              {format(new Date(article.createdAt), "dd MMM,yyyy ")}
                              • {TimeReadingText(article.discription.text)} {t("read_article", { ns: "layout" })}
                           </Text>
                        </Box>
                     </HStack>
                  </Stack>

               </Box>
            </Box>
         </CardBody>

      </Card>
      <Box>
         <RichText
            content={article.discription.raw}
            renderers={{
               h1: ({ children }) => <Heading as={"h1"} mt={2} >{children}</Heading>,
               h2: ({ children }) => <Heading as={"h2"} mt={2} >{children}</Heading>,
               h3: ({ children }) => <Heading as={"h3"}>{children}</Heading>,
               h4: ({ children }) => <Heading as={"h3"}>{children}</Heading>,
               h5: ({ children }) => <Heading as={"h3"}>{children}</Heading>,
               bold: ({ children }) => <Text fontWeight={"bold"} as={"h3"}>{children}</Text>,
               p: ({ children }) => <Text my={4} >{children}</Text>,
               img: (children) => <Image src={children.src} alt={children.altText} width={children.width} height={children.height} />,
               a: (children) => <Image src={children.href} alt={children.title} />
            }}
         />
      </Box>
   </>
}

export default ArticleDetailedPageComponent