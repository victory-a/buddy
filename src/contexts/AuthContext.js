import React, { useState, createContext, useContext } from "react";
import { useQuery, queryCache } from "react-query";
import { FullPageSpinner } from "components/loaders.js";
import { logout, getUser } from "lib/auth-client";

// checks for valid user details to determine what part of the app to render
async function bootstrapAppData() {
  const response = await getUser();

  if (response !== null) {
    return { user: response.data };
  }

  return Promise.resolve(null);
}

const AuthContext = createContext();

function AuthProvider(props) {
  const { Provider } = AuthContext;
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);

  const { status } = useQuery({
    queryKey: "user",
    queryFn: bootstrapAppData,
    config: {
      onSettled: () => setFirstAttemptFinished(true),
      onSuccess: async data => {
        await queryCache.invalidateQueries("userDetails");
      }
    }
  });

  if (!firstAttemptFinished) {
    if (status === "loading") return <FullPageSpinner />;

    if (status === "error") {
      return (
        <div style={{ color: "red" }}>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
        </div>
      );
    }
  }

  async function handleLogout() {
    logout().then(() => (window.location.href = "/"));
    queryCache.clear();
  }

  return <Provider value={{ handleLogout }} {...props} />;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
