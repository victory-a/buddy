import styled from "styled-components";
import { device } from "styles";
// import colors from "styles/colors";

const Container = styled.main`
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
`;

const NavigationWrapper = styled.div`
  height: 100vh;
  width: 7rem;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    width: 15rem;
  }

  @media ${device.laptop} {
    width: 20rem;
  }

  a {
    &:hover {
      text-decoration: none;
    }
  }
`;

const MainContentWrapper = styled.div`
  flex: 1;
  min-height: 100vh;
  padding-top: 1rem;
  background-color: palevioletred;
`;

export { Container, NavigationWrapper, MainContentWrapper };
