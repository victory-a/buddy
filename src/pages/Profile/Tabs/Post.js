import React from "react";
import { queryCache } from "react-query";
import { Avatar, Box } from "@chakra-ui/core";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsReplyFill } from "react-icons/bs";
import { checkTokenValidity, useUserDetails } from "lib/auth-client";

import { useLikePost } from "lib/post-client";

import { PostWrapper, ImageWrapper, PostText, PostDetails, Insights, InsightGroup } from "./styles";

const Post = ({ post, author, showStats = true }) => {
  const [mutate] = useLikePost();
  const { user } = useUserDetails();

  return (
    <PostWrapper>
      <ImageWrapper>
        <Avatar src={author?.photo} name={`${author?.firstName} ${author?.lastName}`} />
      </ImageWrapper>

      <PostDetails>
        <h3>{`${author?.firstName} ${author?.lastName}` ?? ""}</h3>
        <PostText>{user.bio}</PostText>
        {showStats ? (
          <Insights>
            <InsightGroup>
              <Box d="flex">
                <BsReplyFill size={20} />
                <p>{post?.replies ?? 0}</p>
              </Box>
            </InsightGroup>
            <InsightGroup>
              {post.likes > 0 ? (
                <Box
                  d="flex"
                  onClick={() =>
                    mutate(post.id, {
                      onSuccess: () => {
                        queryCache.invalidateQueries("fetchUsersPosts");
                        queryCache.invalidateQueries("fetchUsersLikes");
                      }
                    })
                  }
                >
                  <AiFillHeart size={20} color="#ff0100" />
                  <p>{post?.likes ?? 0}</p>
                </Box>
              ) : (
                <Box
                  d="flex"
                  onClick={() =>
                    mutate(post.id, {
                      onSuccess: () => {
                        queryCache.invalidateQueries("fetchUsersPosts");
                        queryCache.invalidateQueries("fetchUsersLikes");
                      }
                    })
                  }
                >
                  <AiOutlineHeart size={20} />
                  <p>{post?.likes ?? 0}</p>
                </Box>
              )}
            </InsightGroup>
          </Insights>
        ) : null}
      </PostDetails>
    </PostWrapper>
  );
};

export default Post;
