import React, { useState, useContext, createContext } from "react";
import { Container, MainContentWrapper, NavigationWrapper } from "./styles";
import { useMediaQuery } from "react-responsive";
import { MainNav, MobileNav } from "components/Navigation";
import {
  BackgroundContainer,
  BackgroundContainer2,
  BackgroundContainer3
} from "layout/AuthLayout/styles";

// define screen sizes and render layout based on screen size
export const MobileScreen = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 424 });

  if (isMobile) return children;
  return null;
};

export const NonMobileScreen = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 425 });

  if (isTablet) return children;
  return null;
};

const PageDetailsContext = createContext();

const AppLayout = ({ children }) => {
  const { Provider } = PageDetailsContext;
  const [pageTitle, setPageTitle] = useState("");

  return (
    <Provider value={{ pageTitle, setPageTitle }}>
      <Container>
        <BackgroundContainer />
        <BackgroundContainer2 />
        <BackgroundContainer3 />
        <MobileScreen>
          <MobileNav />
        </MobileScreen>

        <NonMobileScreen>
          <NavigationWrapper>
            <MainNav />
          </NavigationWrapper>
        </NonMobileScreen>

        <MainContentWrapper>{children}</MainContentWrapper>
      </Container>
    </Provider>
  );
};

// custom hook for accessing pagedetails
export const usePageDetails = () => {
  const context = useContext(PageDetailsContext);

  if (context === undefined) {
    throw new Error("usePageDetails must be used within a PageDetailsProvider");
  }

  return context;
};

export default AppLayout;
