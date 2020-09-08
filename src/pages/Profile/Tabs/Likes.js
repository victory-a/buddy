import React from "react";
import { useFetchUsersLiked } from "lib/post-client";
import { useUserDetails } from "lib/user-client";

import Post from "./Post";
import { PostsContainer } from "./styles";

const Likes = () => {
  const { user } = useUserDetails();
  const { data: likedPosts, status } = useFetchUsersLiked(user.id);

  return (
    <PostsContainer>
      {likedPosts
        ? likedPosts.map(post => (
            <Post post={post.post} author={post.author} showStats={false} key={post._id} />
          ))
        : null}
    </PostsContainer>
  );
};

export default Likes;
