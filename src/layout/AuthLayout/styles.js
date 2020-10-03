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
  background-size: contain;
  background-repeat: no-repeat;
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

const Logo = styled.image`
  color: ${colors.primary};
  font-size: 2.8rem;
  font-weight: bold;
  text-align: center;
  display: inline;
  outline: none;

  @media ${device.tablet} {
    text-align: left;
  }
`;

const AuthFormContainer = styled.div`
  align-self: center;
  width: 100%;
  max-width: 55rem;
  border-radius: 6px;
  padding: 2rem;
  margin-top: 3rem;
  border: 0.5px solid rgba(18, 39, 140, 0.3);

  @media ${device.tablet} {
    padding: 4rem;
  }
`;

// form componet styles
const TitleContainer = styled.div`
  margin-bottom: 2.8rem;
`;

const Title = styled.h2`
  color: ${colors.primary};
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 2.6rem;
  margin-bottom: 0.8rem;
  line-height: 1;
  text-align: center;
  letter-spacing: 2px;
`;

const Description = styled.p`
  text-align: center;
`;

const InlineFields = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;

    div:first-child {
      margin-right: 4%;
    }
  }
`;

const FormWrapper = styled.form`
  margin-top: 2rem;
`;

const FormFooter = styled.div`
  text-align: center;

  a {
    color: ${colors.primary};
    font-weight: 400;
  }
  p {
    margin-bottom: 1rem;
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
  TitleContainer,
  Description,
  FormWrapper,
  FormFooter,
  InlineFields
};
