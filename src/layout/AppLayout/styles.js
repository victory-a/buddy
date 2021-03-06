import styled from "styled-components";
import { device } from "styles";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  border-right: 0.5px solid rgba(18, 39, 140, 0.1);
  margin: 0 auto;
  max-width: 85rem;
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
  max-height: 100vh;
  /* padding: 1rem 0; */
  border-left: 0.5px solid rgba(18, 39, 140, 0.1);
  /* position: relative; */
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const FormWrapper = styled.form`
  margin-top: 2rem;
`;

export { Container, NavigationWrapper, MainContentWrapper, FormWrapper };
