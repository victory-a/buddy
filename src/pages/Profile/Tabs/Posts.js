import React from "react";

import { PostsContainer } from "./styles";
import Post from "../components/Post";

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
