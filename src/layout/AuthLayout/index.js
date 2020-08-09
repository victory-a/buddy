import React from "react";
import {
  ContainerWrapper,
  BackgroundContainer,
  BackgroundContainer2,
  BackgroundContainer3,
  Container,
  Logo,
  AuthFormContainer
} from "./styles";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <ContainerWrapper>
      <BackgroundContainer />
      <BackgroundContainer2 />
      <BackgroundContainer3 />
      <Container>
        <Link to="/">{/* <Logo>Buddy</Logo> */}</Link>

        <AuthFormContainer>
          <section>{children}</section>
        </AuthFormContainer>
      </Container>
    </ContainerWrapper>
  );
};

export default AuthLayout;
