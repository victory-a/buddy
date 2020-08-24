import React from "react";
import { usePageDetails } from "layout/AppLayout";

const Transfer = () => {
  const { setPageTitle } = usePageDetails();

  React.useLayoutEffect(() => {
    setPageTitle("Send Money");
    document.title = "Buddy | Send Money";
  }, [setPageTitle]);
  return <div>Send</div>;
};

export default Transfer;
