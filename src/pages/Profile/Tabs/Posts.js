import React from "react";
import { useFetchUsersPosts } from "lib/post-client";
import { useUserDetails } from "lib/auth-client";
import useLikedPosts from "hooks/userLikedPosts";

import Post from "./Post";
import { PostsContainer } from "./styles";

import { PostSkeleton } from "components/loaders.js/SkeletonLoader";

const Posts = () => {
  const { user } = useUserDetails();
  const { data: posts, status } = useFetchUsersPosts(user.id);
  const userLikedPosts = useLikedPosts();

  return status === "success" ? (
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
  );
};

export default Posts;
