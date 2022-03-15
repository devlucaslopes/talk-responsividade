import { FiMenu } from "react-icons/fi";

import { Container } from "../Container";

import { Wrapper, Navigation, NavigationMobile, Logo } from "./styles";

export const Header = () => (
  <Wrapper>
    <Container>
      <Logo>Burgão</Logo>

      <Navigation>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Sobre nós</a>
        </li>
        <li>
          <a href="/">Chama no zap</a>
        </li>
      </Navigation>

      <NavigationMobile>
        <FiMenu size={24} />
      </NavigationMobile>
    </Container>
  </Wrapper>
);
