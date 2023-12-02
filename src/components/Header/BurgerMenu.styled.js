import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--text-dark-color);
  opacity: 0.75;
  display: none;
  @media (min-width: 480px) {
    display: flex;
  }
  /* @media (min-width: 768px) {
   
  } */
`;

export const Item = styled.li`
  color: var(--white-color);
`;
