import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";
import patterns from "assets/bg-pattern.svg";
import dots from "assets/dots.svg";

// authlayout wrapper conponents
const ContainerWrapper = styled.div`
  height: 100%;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${patterns});
  background-size: cover;
  height: 40rem;
  width: 100%;
  opacity: 0.8;
  z-index: -10;
`;

const BackgroundContainer2 = styled(BackgroundContainer)`
  top: initial;
  bottom: 0;
  background-image: url(${dots});
  background-repeat: no-repeat;
  background-size: contain;
  height: 10rem;
  width: 10rem;
`;

const BackgroundContainer3 = styled(BackgroundContainer2)`
  right: 0;
  left: initial;
`;

const Container = styled.div`
  height: 100%;
  max-width: 130rem;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 3rem;
  }
`;

const Logo = styled.h1`
  color: ${colors.blue};
  font-size: 2.8rem;
  font-weight: bold;
  text-align: center;

  @media ${device.tablet} {
    text-align: left;
  }
`;

const AuthFormContainer = styled.div`
  align-self: center;
  width: 100%;
  max-width: 70rem;
  border-radius: 6px;
  padding: 3.5rem;
  margin-top: 3rem;
  border: 0.5px solid rgba(18, 39, 140, 0.3);
`;

// form componet styles
const Title = styled.h2`
  color: ${colors.blue};
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 2.6rem;
  margin-bottom: 0.5rem;
  line-height: 1;
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
`;

const FormWrapper = styled.div`
  margin-top: 2rem;
`;

const FormFooter = styled.div`
  text-align: center;

  a {
    color: ${colors.blue};
    font-weight: 400;
  }
`;

export {
  ContainerWrapper,
  BackgroundContainer,
  BackgroundContainer2,
  BackgroundContainer3,
  Container,
  Logo,
  AuthFormContainer,
  Title,
  Description,
  FormWrapper,
  FormFooter
};