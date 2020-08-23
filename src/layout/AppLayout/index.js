import React, { useState, useContext, createContext } from "react";
import { Container, MainContentWrapper, NavigationWrapper } from "./styles";
import { useMediaQuery } from "react-responsive";
import { MainNav } from "components/Navigation";

// define screen sizes and render layout based on screen size
export const MobileScreen = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 375 });

  if (isMobile) return children;
  return null;
};

export const NonMobileScreen = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 375 });

  if (isTablet) return children;
  return null;
};

const PageDetailsContext = createContext();

const AppLayout = ({ children }) => {
  const { Provider } = PageDetailsContext;
  const { pageTitle, setPageTitle } = useState("");

  return (
    <Provider value={{ pageTitle, setPageTitle }}>
      <Container>
        {/* <MobileScreen> */}
        {/* <MobileNavigation /> */}
        {/* </MobileScreen> */}

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

  if (!context) {
    throw new Error("usePageDetails must be used within a PageDetailsProvider");
  }

  return context;
};

export default AppLayout;
