import React from "react";
import { useAuth } from "contexts/AuthContext";
import { usePageDetails } from "layout/AppLayout";

const Home = () => {
  const { setPageTitle } = usePageDetails();

  React.useLayoutEffect(() => {
    setPageTitle("Home");
    document.title = "Buddy | Home";
  }, [setPageTitle]);

  const { handleLogout } = useAuth();
  return (
    <>
      <h2>Home</h2>
      <button onClick={() => handleLogout()}>logout</button>
    </>
  );
};

export default Home;
