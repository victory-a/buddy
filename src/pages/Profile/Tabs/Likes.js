import React from "react";
import { useFetchUsersLiked } from "lib/post-client";
import { useUserDetails } from "lib/auth-client";

import Post from "./Post";
import { PostsContainer } from "./styles";

import { PostSkeleton } from "components/loaders.js/SkeletonLoader";

const Likes = () => {
  const { user } = useUserDetails();
  const { likedPosts, status } = useFetchUsersLiked(user.id);

  return status === "success" ? (
    <PostsContainer>
      {likedPosts.map(post => (
        <Post post={post.post} author={post.author} showStats={false} key={post._id} />
      ))}
    </PostsContainer>
  ) : (
    <PostSkeleton />
  );
};

export default Likes;
