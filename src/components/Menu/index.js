import { Container } from "../Container";

import { Heading, Wrapper } from "./styles";

export const Menu = ({ children }) => (
  <Wrapper>
    <Container>
      <Heading>
        <h2>Todos os sabores</h2>
        <p>Sed non tempor metus, vel dignissim massa.</p>
      </Heading>

      {children}
    </Container>
  </Wrapper>
);
