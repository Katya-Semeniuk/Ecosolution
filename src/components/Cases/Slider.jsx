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
  IconSwiperPrev,
  IconSwiperNext,
  SliderControler,
  Info,
  WrapInfo,
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
      <div>{totalSlides}</div>
      <Swiper
        modules={[Navigation, A11y]}
        //   spaceBetween={24}
        grabCursor={true}
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
        <SliderControler>
          <div className="swiper-btn-prev">
            <IconSwiperPrev />
          </div>

          <div className="swiper-btn-next">
            <IconSwiperNext />
          </div>
        </SliderControler>
        <ul>
          <SwiperSlide>
            <Item>
              <img src={wind_power} alt="Wind Power" />
              <div>
                <WrapInfo>
                  <Info>
                    Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI
                    BUH”
                  </Info>

                  <WrapIcon>
                    <IconArrowUp />
                  </WrapIcon>
                </WrapInfo>

                <div>Wind Power for auto field irrigation</div>
                <div>July 2023</div>
              </div>
            </Item>
          </SwiperSlide>
          <SwiperSlide>
            <Item>
              <img src={solar_panels} alt="Solar Panels" />
              <div>Zhytomyr city</div>
              <div>Private Enterprise “Bosch”</div>
              <div>
                <IconArrowUp />
              </div>

              <div>Solar Panels for industrial use</div>
              <div>November 2023</div>
            </Item>
          </SwiperSlide>
          <SwiperSlide>
            <Item>
              <img src={thermal_modules} alt="Thermal Modules" />
              <div>Rivne city</div>
              <div>Private Enterprise “Biotech”</div>
              <div>
                <IconArrowUp />
              </div>

              <div>Thermal modules</div>
              <div>October 2023</div>
            </Item>
          </SwiperSlide>
          <SwiperSlide>
            <Item>
              <img src={wind_power_kh} alt="Wind Power Kherson" />
              <div>Kherson city</div>
              <div>Private Enterprise “HealthyFarm”</div>
              <div>
                <IconArrowUp />
              </div>

              <div>Wind power</div>
              <div>September 2021</div>
            </Item>
          </SwiperSlide>
          <SwiperSlide>
            <Item>
              <img src={nuclear_stations} alt="Mini nuclear stations" />
              <div>Zaporizhia city</div>
              <div>Private Enterprise “Biotech”</div>
              <div>
                <IconArrowUp />
              </div>

              <div>Mini nuclear stations</div>
              <div>May 2021</div>
            </Item>
          </SwiperSlide>
        </ul>
      </Swiper>
    </div>
  );
};

export default Slider;
