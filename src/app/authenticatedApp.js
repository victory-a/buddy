import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoute from "routes/ProtectedRoute";
import routesList from "routes/routesList";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import AppLayout from "layout/AppLayout";
import SkeletonLoader from "components/loaders.js/SkeletonLoader";

const AuthenticatedApp = () => {
  const privateRoutes = routesList.filter(route => route.isPrivate);

  return (
    <Router>
      <ErrorBoundary>
        <AppLayout>
          <Suspense fallback={<SkeletonLoader />}>
            <Switch>
              {privateRoutes.map(({ component, ...rest }, index) => (
                <ProtectedRoute
                  component={component}
                  {...rest}
                  key={`authenticated-route-${index}`}
                />
              ))}
            </Switch>
          </Suspense>
        </AppLayout>
      </ErrorBoundary>
    </Router>
  );
};

export default AuthenticatedApp;
