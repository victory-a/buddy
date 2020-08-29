import React, { useEffect, useLayoutEffect, lazy, Suspense } from "react";
import { FullPageSpinner } from "components/loaders.js";
import { checkTokenValidity, useUserDetails } from "lib/user-client";
import { useAuth } from "contexts/AuthContext";

const loadAuthenticatedApp = () => import("app/authenticatedApp");
const AuthenticatedApp = lazy(loadAuthenticatedApp);

const UnauthenticatedApp = lazy(() => import("app/unauthenticatedApp"));

function App() {
  const { handleLogout } = useAuth();
  useLayoutEffect(() => {
    checkTokenValidity(handleLogout);
  }, [handleLogout]);

  const { user } = useUserDetails();

  // load authenticated app in bg while user completes auth form
  useEffect(() => {
    loadAuthenticatedApp();
  }, []);

  return (
    <Suspense fallback={<FullPageSpinner />}>
      {/* {user ? <AuthenticatedApp /> : <UnauthenticatedApp />} */}

      <AuthenticatedApp />
    </Suspense>
  );
}

export default App;
