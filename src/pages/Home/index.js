import React from "react";
import { useAuth } from "contexts/AuthContext";

const Home = () => {
  const { handleLogout } = useAuth();
  return (
    <>
      <h2>Home</h2>
      <button onClick={() => handleLogout()}>logout</button>
    </>
  );
};

export default Home;
