import styled from "styled-components";
import BtnMenuOpen from "../../assets/icons/btn-menu-open.svg?react";
import Logo from "../../assets/icons/logo.svg?react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 146px;
`;

export const IconLogo = styled(Logo)`
  width: 269px;
  height: 40px;
  fill: var(--text-dark-color);
  transition: all 200ms ease;

  &:hover,
  &:focus {
    fill: var(--primary-green-color);
  }
`;

export const IconBtn = styled(BtnMenuOpen)`
  width: 16px;
  height: 16px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39px;
  height: 39px;

  border: none;
  border-radius: 50%;
  background-color: var(--light-green-color);
  cursor: pointer;
  transition: all 200ms ease;

  &:hover,
  &:focus {
    background-color: var(--primary-green-color);
  }
`;
