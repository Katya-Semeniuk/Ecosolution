import styled from "styled-components";

import IconMinus from "../../assets/icons/minus.svg?react";
import IconPlus from "../../assets/icons/plus.svg?react";

export const Item = styled.li`
  border: 1px solid orange;
  display: flex;
  align-items: center;
  position: relative;
`;

export const IconBtnMinus = styled(IconMinus)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
`;

export const IconBtnPlus = styled(IconPlus)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
  &:hover path,
  &:focus path {
    stroke: var(--accent-green-color);
  }
`;
