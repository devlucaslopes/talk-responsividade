import { Container } from "../Container";

import { Background, Headline } from "./styles";

export const Hero = () => (
  <Background>
    <Container>
      <Headline>
        <h1>O melhor</h1>
        <p>
          Sed non tempor metus, vel dignissim massa. Morbi convallis ex sit amet
          elit placerat, non porttitor sapien condimentum.
        </p>
      </Headline>

      <img src="./imgs/burguer.png" alt="burguer" />
    </Container>
  </Background>
);
