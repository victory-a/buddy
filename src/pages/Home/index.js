import React from "react";
import { usePageDetails } from "layout/AppLayout";

const Home = () => {
  const { setPageTitle } = usePageDetails();

  React.useLayoutEffect(() => {
    setPageTitle("Home");
    document.title = "Buddy | Home";
  }, [setPageTitle]);

  return (
    <>
      <h2>Home</h2>
    </>
  );
};

export default Home;
