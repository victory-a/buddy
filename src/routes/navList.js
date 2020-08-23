import React from "react";
import { FaUser, FaPenAlt } from "react-icons/fa";
import { AiFillHome, AiFillDollarCircle } from "react-icons/ai";
// import { AiFillDollarCircle } from "react-icons/hi";

export default [
  {
    path: "/",
    title: "Home",
    logo: <AiFillHome />
  },
  {
    path: "profile",
    title: "Profile",
    logo: <FaUser />
  },
  {
    path: "/transfer",
    title: "Transfer",
    logo: <AiFillDollarCircle />
  },
  {
    path: "post",
    title: "Post",
    logo: <FaPenAlt />
  }
];
