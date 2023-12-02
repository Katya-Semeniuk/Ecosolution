import { Container, Item } from "./BurgerMenu.styled";

const BurgerMenu = () => {
  return (
    <Container>
      <ul>
        <Item>Main</Item>
        <Item>About</Item>
        <Item>Cases</Item>
        <Item>FAQ</Item>
        <Item>Contact Us</Item>
      </ul>
    </Container>
  );
};
export default BurgerMenu;
