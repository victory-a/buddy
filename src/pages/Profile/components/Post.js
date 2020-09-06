import React from "react";
import { Image, Box } from "@chakra-ui/core";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsReplyFill } from "react-icons/bs";

import maleFB from "assets/male-fb.svg";
import femaleFB from "assets/female-fb.svg";

import { PostWrapper, ImageWrapper, PostText, PostDetails, Insights, InsightGroup } from "./styles";

const Post = ({ user, post }) => {
  return (
    <PostWrapper>
      <ImageWrapper>
        <Image
          rounded="full"
          src={user?.photo}
          fallbackSrc={user?.gender === "female" ? femaleFB : maleFB}
        />
      </ImageWrapper>

      <PostDetails>
        <h3>{`${user.firstName} ${user.lastName}` ?? ""}</h3>
        <PostText>{post.text}</PostText>
        <Insights>
          <InsightGroup liked={user.id === post.author}>
            <Box d="flex">
              <BsReplyFill size={20} />
              <p>{post.replies}</p>
            </Box>
          </InsightGroup>
          <InsightGroup liked={user.id === post.author}>
            {user.id === post.author ? (
              <Box d="flex">
                <AiFillHeart size={20} color="#ff0100" />
                <p>{post.likes}</p>
              </Box>
            ) : (
              <Box d="flex">
                <AiOutlineHeart size={20} />
                <p>{post.likes}</p>
              </Box>
            )}
          </InsightGroup>
        </Insights>
      </PostDetails>
    </PostWrapper>
  );
};

export default Post;
