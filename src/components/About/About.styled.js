import styled from "styled-components";
import Circle from "../../assets/icons/circle.svg?react";
import Global from "../../assets/icons/global.svg?react";
import Charge from "../../assets/icons/charge.svg?react";
import Ranking from "../../assets/icons/ranking.svg?react";

export const Container = styled.div`
  margin: 36px 0;
`;

export const Title = styled.h2`
  width: 319px;
  font-size: 28px;
  line-height: 1;
  margin-bottom: 24px;
`;
export const Description = styled.p`
  text-align: justify;
  margin-bottom: 36px;
`;

// --icons--
export const IconCircle = styled(Circle)`
  width: 16px;
  height: 16px;
`;

export const IconGlobal = styled(Global)`
  width: 16px;
  height: 16px;
`;

export const IconCharge = styled(Charge)`
  width: 16px;
  height: 16px;
`;

export const IconRanking = styled(Ranking)`
  width: 16px;
  height: 16px;
`;
// --

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 46px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--primary-green-color);
    bottom: -33px;
    left: 0;
  }
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  line-height: 1.5;
  margin-left: 8px;
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  text-align: justify;
`;

// --Grid--
export const CardSet = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 24px;
`;

export const Item = styled.li`
  background-color: var(--secondary-backgr-color);
  padding: 13px 12px;
`;
// --
