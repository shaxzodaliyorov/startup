import { Box, Icon } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import Carousel from "react-multi-carousel"
import { soponserShipCarsuel } from "../../config/carsuel"
import { SponorShipCompony } from "../../config/constants"
import SectionTitle from "../section-title/section-title"

const Sponsorship = () => {
  const { t } = useTranslation()
  return <>
    <SectionTitle textAlign={"center"} title={""} subtitle={t("sponsor_title", { ns: 'home' })} />

    <Carousel
      responsive={soponserShipCarsuel}
      showDots={false}
      arrows={false}
      autoPlay={true}
      infinite
    >
      {SponorShipCompony.map((item, index) => (
        <Icon as={item} key={index} fontSize={50} />
      ))}
    </Carousel>
  </>
}

export default Sponsorship