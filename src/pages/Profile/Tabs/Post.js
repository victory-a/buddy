import React from "react";
import { queryCache } from "react-query";
import { Avatar, Box, useDisclosure, Tooltip } from "@chakra-ui/core";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsReplyFill } from "react-icons/bs";
import { useUserDetails } from "lib/auth-client";

import { useLikePost, useUnlikePost } from "lib/post-client";

import Reply from "./Reply";
import { PostWrapper, ImageWrapper, PostText, PostDetails, Insights, InsightGroup } from "./styles";

const Post = ({ post, author, likedByUser, showStats = true }) => {
  const [likeMutation] = useLikePost();
  const [unlikeMutation] = useUnlikePost();
  const { onClose, onOpen, isOpen } = useDisclosure();

  function handleLike(postId) {
    return likeMutation(postId, {
      onSuccess: () => {
        queryCache.invalidateQueries("fetchAllPosts");
        queryCache.invalidateQueries("fetchUsersLikes");
        queryCache.invalidateQueries("fetchUsersPosts");
      }
    });
  }

  function handleUnlike(postId) {
    return unlikeMutation(postId, {
      onSuccess: () => {
        queryCache.invalidateQueries("fetchAllPosts");
        queryCache.invalidateQueries("fetchUsersLikes");
        queryCache.invalidateQueries("fetchUsersPosts");
      }
    });
  }

  return (
    <PostWrapper>
      <Reply isOpen={isOpen} onClose={onClose} author={author} post={post} />
      <ImageWrapper>
        <Avatar src={author?.photo} name={`${author?.firstName} ${author?.lastName}`} />
      </ImageWrapper>

      <PostDetails>
        <h3>{`${author?.firstName} ${author?.lastName}` ?? ""}</h3>
        <PostText>{post.text}</PostText>
        {showStats ? (
          <Insights>
            <InsightGroup>
              <Tooltip hasArrow label="Reply post" bg="buddy.primary" placement="right">
                <Box d="flex" onClick={onOpen}>
                  <BsReplyFill size={20} />
                  <p>{post?.replies ?? 0}</p>
                </Box>
              </Tooltip>
            </InsightGroup>
            <InsightGroup>
              {likedByUser ? (
                <Tooltip hasArrow label="Unlike post" bg="buddy.primary" placement="right">
                  <Box d="flex" onClick={() => handleUnlike(post.id)}>
                    <AiFillHeart size={20} color="#ff0100" />
                    <p>{post?.likes ?? 0}</p>
                  </Box>
                </Tooltip>
              ) : (
                <Tooltip hasArrow label="Like post" bg="buddy.primary" placement="right">
                  <Box d="flex" onClick={() => handleLike(post.id)}>
                    <AiOutlineHeart size={20} />
                    <p>{post?.likes ?? 0}</p>
                  </Box>
                </Tooltip>
              )}
            </InsightGroup>
          </Insights>
        ) : null}
      </PostDetails>
    </PostWrapper>
  );
};

export default Post;
