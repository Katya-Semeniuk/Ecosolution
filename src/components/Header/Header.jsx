import BurgerMenu from "./BurgerMenu";
import { Container, IconBtn, IconLogo, Button } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <IconLogo />
      <Button>
        <IconBtn />
      </Button>
      <BurgerMenu />
    </Container>
  );
};
export default Header;
