import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <Component />
    </Route>
  );
};

export default ProtectedRoute;
