import { useState } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  Item,
  IconArrowUp,
  WrapIcon,
  SliderControler,
  Info,
  WrapInfo,
  Container,
  Counter,
  IconSwiperPrev,
  IconSwiperNext,
  Name,
  Date,
  WrapDetails,
  Wrapper,
} from "./Slider.styled";

import wind_power from "../../assets/pictures/wind_power.jpg";
import solar_panels from "../../assets/pictures/solar_panels.jpg";
import thermal_modules from "../../assets/pictures/thermal_modules.jpg";
import wind_power_kh from "../../assets/pictures/wind_power_kherson.jpg";
import nuclear_stations from "../../assets/pictures/nuclear_stations.jpg";

const Slider = () => {
  const [totalSlides, setTotalSlides] = useState(0);
  return (
    <div>
      <Container>
        <Counter>{totalSlides}</Counter>
        <SliderControler>
          <div className="swiper-btn-prev">
            <IconSwiperPrev />
          </div>

          <div className="swiper-btn-next">
            <IconSwiperNext />
          </div>
        </SliderControler>
      </Container>

      <Swiper
        modules={[Navigation, A11y]}
        //   spaceBetween={24}
        slidesPerView={"auto"}
        loop={true}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => {
          console.log(swiper.el);
          setTotalSlides(swiper.slides.length);
        }}
        className="sweiper-container"
      >
        <ul>
          <SwiperSlide>
            <Item>
              <img src={wind_power} alt="Wind Power" />
              <Wrapper>
                <WrapInfo>
                  <Info>
                    Lviv Region, Radekhiv town <br />
                    Private Enterprise “ZAKHIDNYI BUH”
                  </Info>

                  <WrapIcon>
                    <IconArrowUp />
                  </WrapIcon>
                </WrapInfo>
                <WrapDetails>
                  <Name>Wind Power for auto field irrigation</Name>
                  <Date>July 2023</Date>
                </WrapDetails>
              </Wrapper>
            </Item>
          </SwiperSlide>

          <SwiperSlide>
            <Item>
              <img src={solar_panels} alt="Solar Panels" />
              <Wrapper>
                <WrapInfo>
                  <Info>
                    Zhytomyr city <br />
                    Private Enterprise “Bosch”
                  </Info>

                  <WrapIcon>
                    <IconArrowUp />
                  </WrapIcon>
                </WrapInfo>
                <WrapDetails>
                  <Name>Solar Panels for industrial use</Name>
                  <Date>November 2023</Date>
                </WrapDetails>
              </Wrapper>
            </Item>
          </SwiperSlide>

          <SwiperSlide>
            <Item>
              <img src={thermal_modules} alt="Thermal Modules" />

              <Wrapper>
                <WrapInfo>
                  <Info>
                    Rivne city <br />
                    Private Enterprise “Biotech”
                  </Info>

                  <WrapIcon>
                    <IconArrowUp />
                  </WrapIcon>
                </WrapInfo>
                <WrapDetails>
                  <Name>Thermal modules</Name>
                  <Date>October 2023</Date>
                </WrapDetails>
              </Wrapper>
            </Item>
          </SwiperSlide>

          <SwiperSlide>
            <Item>
              <img src={wind_power_kh} alt="Wind Power Kherson" />

              <Wrapper>
                <WrapInfo>
                  <Info>
                    Kherson city <br />
                    Private Enterprise “HealthyFarm”
                  </Info>

                  <WrapIcon>
                    <IconArrowUp />
                  </WrapIcon>
                </WrapInfo>
                <WrapDetails>
                  <Name>Wind power</Name>
                  <Date>September 2021</Date>
                </WrapDetails>
              </Wrapper>
            </Item>
          </SwiperSlide>
          <SwiperSlide>
            <Item>
              <img src={nuclear_stations} alt="Mini nuclear stations" />

              <Wrapper>
                <WrapInfo>
                  <Info>
                    Zaporizhia cit <br />
                    Private Enterprise “Biotech”
                  </Info>

                  <WrapIcon>
                    <IconArrowUp />
                  </WrapIcon>
                </WrapInfo>
                <WrapDetails>
                  <Name>Mini nuclear stations</Name>
                  <Date>May 2021</Date>
                </WrapDetails>
              </Wrapper>
            </Item>
          </SwiperSlide>
        </ul>
      </Swiper>
    </div>
  );
};

export default Slider;
