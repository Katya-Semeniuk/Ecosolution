import styled from "styled-components";
import ArrowUp from "../../assets/icons/arrow-up-right.svg?react";
import BtnNext from "../../assets/icons/arrow-right-swiper.svg?react";
import BtnPrev from "../../assets/icons/arrow-left-swiper.svg?react";

export const Item = styled.li`
  min-width: 320px;
  background-color: var(--secondary-backgr-color);
`;

export const Info = styled.p`
  width: 320px;
  font-size: 18px;
  line-height: 1.2;

  background-color: tomato;
`;
export const WrapInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

export const WrapIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: var(--primary-green-color);
  border-radius: 50%;
`;

export const IconArrowUp = styled(ArrowUp)`
  width: 28px;
  height: 28px;
`;

// --swiper--
export const SliderControler = styled.div`
  justify-content: end;
  display: flex;
  gap: 12px;
`;
export const IconSwiperNext = styled(BtnNext)`
  width: 66px;
  height: 66px;
`;
export const IconSwiperPrev = styled(BtnPrev)`
  width: 66px;
  height: 66px;
`;
//-- --
