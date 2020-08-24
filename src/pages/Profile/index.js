import React from "react";
import { usePageDetails } from "layout/AppLayout";

const Profile = () => {
  const { setPageTitle } = usePageDetails();

  React.useLayoutEffect(() => {
    setPageTitle("Profile");
    document.title = "Buddy | Profile";
  }, [setPageTitle]);

  return <div>Profile</div>;
};

export default Profile;
