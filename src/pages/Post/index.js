import React from "react";
import { usePageDetails } from "layout/AppLayout";

const Post = () => {
  const { setPageTitle } = usePageDetails();

  React.useLayoutEffect(() => {
    setPageTitle("Post");
    document.title = "Buddy | Create Post";
  }, [setPageTitle]);

  return <div>post</div>;
};

export default Post;
