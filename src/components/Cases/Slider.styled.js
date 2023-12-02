import styled from "styled-components";
import ArrowUp from "../../assets/icons/arrow-up-right.svg?react";
import BtnPrev from "../../assets/icons/btn-swipe-left.svg?react";
import BtnNext from "../../assets/icons/btn-swipe-right.svg?react";

export const Item = styled.li`
  min-width: 320px;
  background-color: var(--secondary-backgr-color);
`;

export const Info = styled.p`
  font-size: 18px;
`;

export const Wrapper = styled.div`
  padding: 24px 12px 12px 12px;
`;

export const WrapInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--primary-green-color);
    bottom: -24px;
    left: 0;
  }
`;

export const WrapIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: var(--primary-green-color);
  border-radius: 50%;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover,
  &:focus {
    background-color: var(--text-dark-color);
  }

  &:hover path,
  &:focus path {
    stroke: var(--primary-green-color);
  }
`;

export const IconArrowUp = styled(ArrowUp)`
  width: 28px;
  height: 28px;
`;

export const WrapDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-size: 12px;
`;

export const Date = styled.div`
  font-size: 12px;
`;

// --swiper--
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 19px;
  align-items: baseline;
`;

export const Counter = styled.div`
  font-size: 28px;
  font-weight: 300;
  line-height: 1.2;
  opacity: 25%;
`;
export const SliderControler = styled.div`
  justify-content: end;
  display: flex;
  gap: 12px;
`;

export const IconSwiperNext = styled(BtnNext)`
  width: 66px;
  height: 66px;
  cursor: pointer;
  &:hover path,
  &:focus path {
    stroke: var(--primary-green-color);
  }
  &:hover rect,
  &:focus rect {
    stroke: var(--primary-green-color);
  }
`;

export const IconSwiperPrev = styled(BtnPrev)`
  width: 66px;
  height: 66px;
  cursor: pointer;
  &:hover path,
  &:focus path {
    stroke: var(--primary-green-color);
  }
  &:hover rect,
  &:focus rect {
    stroke: var(--primary-green-color);
  }
`;
