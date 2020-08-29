import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  /* background-color: #fff; */
  border-right: 0.5px solid rgba(18, 39, 140, 0.1);
  margin: 0 auto;
  max-width: 100rem;
  @media ${device.mobile} {
    flex-direction: row;
  }
`;

const NavigationWrapper = styled.div`
  height: 100vh;
  width: 7rem;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    width: 12rem;
  }

  @media ${device.laptop} {
    width: 15rem;
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
  padding: 1rem;
  border-left: 0.5px solid rgba(18, 39, 140, 0.1);
  /* background-color: palevioletred; */
`;

export { Container, NavigationWrapper, MainContentWrapper };
