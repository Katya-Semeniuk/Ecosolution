import styled from "styled-components";

export const Title = styled.h2`
  width: 286px;
  text-align: center;
  font-size: 28px;
  margin: 0 auto 96px auto;
  position: relative;
  line-height: 1;
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 48px;
    background-color: var(--primary-green-color);
    bottom: calc(-85% - 24px);

    left: 50%;
  }
`;

export const Wrap = styled.div`
  font-family: "Oswald", sans-serif;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Number = styled.div`
  color: var(--primary-green-color);
  font-weight: 700;
  font-size: 48px;
  line-height: 1;
`;

export const Units = styled.span`
  color: var(--text-dark-color);
  font-weight: 400;
  font-size: 24px;
`;
