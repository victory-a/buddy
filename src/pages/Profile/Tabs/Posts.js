import React from "react";
import { Image, Box } from "@chakra-ui/core";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsReplyFill } from "react-icons/bs";

import maleFB from "assets/male-fb.svg";
import femaleFB from "assets/female-fb.svg";

import {
  PostsContainer,
  PostWrapper,
  ImageWrapper,
  PostText,
  PostDetails,
  Insights,
  InsightGroup
} from "./styles";

const user = {
  id: 3,
  progress: 60,
  firstName: "Ekezie",
  lastName: "David",
  following: 2,
  followers: 1670,
  posts: ["hello world", "whats popping"],
  bio:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure quae nostrum ipsam neque soluta aperiam."
};

const posts = [
  {
    id: 1,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos in voluptates rem, sequi minus exercitationem odio eius maxime fugiat.",
    author: {
      photo: ""
    },
    likes: 3,
    replies: 5
  },
  {
    id: 2,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos in voluptates rem, sequi minus exercitationem odio eius maxime fugiat.",
    author: {
      photo: ""
    },
    likes: 6,
    replies: 2
  },
  {
    id: 3,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos in voluptates rem, sequi minus exercitationem odio eius maxime fugiat.",
    author: {
      photo: ""
    },
    likes: 2,
    replies: 10
  },
  {
    id: 4,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos in voluptates rem, sequi minus exercitationem odio eius maxime fugiat.",
    author: {
      photo: ""
    },
    likes: 30,
    replies: 7
  },
  {
    id: 5,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos in voluptates rem, sequi minus exercitationem odio eius maxime fugiat.",
    author: {
      photo: ""
    },
    likes: 2,
    replies: 10
  },
  {
    id: 6,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos in voluptates rem, sequi minus exercitationem odio eius maxime fugiat.",
    author: {
      photo: ""
    },
    likes: 30,
    replies: 7
  }
];

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

const Posts = () => {
  return (
    <PostsContainer>
      {posts.map(post => (
        <Post user={user} post={post} key={post.id} />
      ))}
    </PostsContainer>
  );
};

export default Posts;
