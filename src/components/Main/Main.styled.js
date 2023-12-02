import styled from "styled-components";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";

export const Heading = styled.h1`
  width: 320px;
  font-size: 36px;
  line-height: 1;
  margin-bottom: 24px;
`;

export const Paragraph = styled.p`
  margin-bottom: 24px;
  text-align: justify;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 1px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--primary-green-color);
    bottom: -87px;
    left: 0;
  }
`;

export const BtnLearnMore = styled.button`
  display: flex;
  align-items: center;
  min-width: 141px;
  height: 39px;
  margin: 0 auto 49px auto;
  padding: 10.5px 4px 10.5px 16px;
  border: 1px solid var(--primary-green-color);
  background-color: var(--white-color);
  color: var(--text-dark-color);
  font-size: 16px;

  border-radius: 20px;
  transition: all 200ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--primary-green-color);
    background-color: var(--text-dark-color);
    border: 1px solid var(--text-dark-color);
  }
`;

export const IconBackgr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  margin-left: 12px;

  background-color: var(--primary-green-color);
  border-radius: 50%;
`;

export const IconArrowRight = styled(ArrowRight)`
  height: 16px;
  width: 16px;
`;

export const Address = styled.div`
  text-align: center;

  margin-bottom: 8px;
`;

export const Email = styled.div`
  text-align: center;
  margin-bottom: 36px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
