import React from "react";
import { usePageDetails } from "layout/AppLayout";
import { useUserDetails } from "lib/auth-client";
import { useFetchPosts, useFetchUsersLiked } from "lib/post-client";
import useLikedPosts from "hooks/userLikedPosts";

import { PostsContainer } from "../Profile/Tabs/styles";
import Post from "pages/Profile/Tabs/Post";
import { PostSkeleton } from "components/loaders.js/SkeletonLoader";

const Home = () => {
  const { user } = useUserDetails();
  useFetchUsersLiked(user.id);
  const { setPageTitle } = usePageDetails();
  const { data: posts, status } = useFetchPosts();
  const userLikedPosts = useLikedPosts();

  React.useLayoutEffect(() => {
    setPageTitle("Home");
    document.title = "Buddy | Home";
  }, [setPageTitle]);

  return (
    <>
      {status === "success" ? (
        <PostsContainer>
          {posts
            ? posts.map(post => (
                <Post
                  post={post}
                  author={post.author}
                  key={post.id}
                  likedByUser={userLikedPosts.includes(post.id)}
                />
              ))
            : null}
        </PostsContainer>
      ) : (
        <PostSkeleton />
      )}
    </>
  );
};

export default Home;
