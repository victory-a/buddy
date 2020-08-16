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
// import friends from "assets/auth-bg.jpg";

const AuthLayout = ({ children }) => {
  return (
    <ContainerWrapper>
      <BackgroundContainer />
      <BackgroundContainer2 />
      <BackgroundContainer3 />
      <Container>
        <Link to="/">
          <Logo>Logo</Logo>
        </Link>

        <AuthFormContainer>
          {/* <img src={friends} alt="" /> */}
          <section>{children}</section>
        </AuthFormContainer>
      </Container>
    </ContainerWrapper>
  );
};

export default AuthLayout;
