import { useResponse } from "../../hooks/useResponse";

import {
  Heading,
  Paragraph,
  BtnLearnMore,
  IconBackgr,
  IconArrowRight,
  Address,
  Email,
  ImageWrapper,
} from "./Main.styled";

//desktop_images
import d_main from "../../assets/pictures/desktop-main1x.jpg";
import d_main2 from "../../assets/pictures/desktop-main2x.jpg";

// tablet images
import t_main from "../../assets/pictures/tablet-main1x.jpg";
import t_main2 from "../../assets/pictures/tablet-main2x.jpg";

// mobile
import m_main from "../../assets/pictures/mobile_main1x.jpg";
import m_main2 from "../../assets/pictures/mobile_main2x.jpg";

const Main = () => {
  const { isDesktop, isTablet, isMobile } = useResponse();
  return (
    <div>
      <Heading>RENEWABLE ENERGY FOR ANY TASK</Heading>
      <Paragraph>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </Paragraph>
      <BtnLearnMore>
        Learn more
        <IconBackgr>
          <IconArrowRight />
        </IconBackgr>
      </BtnLearnMore>
      <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
      <Email>office@ecosolution.com</Email>

      <ImageWrapper>
        {isDesktop && (
          <img
            srcSet={`${d_main} 1x, ${d_main2} 2x`}
            src={d_main}
            alt="wind turbine"
            width="1240"
            height="524"
          />
        )}
        {isTablet && (
          <img
            srcSet={`${t_main} 1x, ${t_main2} 2x`}
            src={t_main}
            alt="wind turbine"
            width="708"
            height="348"
          />
        )}
        {isMobile && (
          <img
            srcSet={`${m_main} 1x, ${m_main2} 2x`}
            src={m_main}
            alt="wind turbine"
            width="319"
            height="200"
          />
        )}
      </ImageWrapper>
    </div>
  );
};
export default Main;
