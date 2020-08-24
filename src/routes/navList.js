import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { RiQuillPenLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { RiHome4Line } from "react-icons/ri";
import { AiFillHome, AiOutlineDollar } from "react-icons/ai";
// import { AiOutlineDollarCircle } from "react-icons/hi";

export default [
  {
    path: "/",
    title: "Home",
    logo: <RiHome4Line />
  },
  {
    path: "profile",
    title: "Profile",
    logo: <FiUser />
  },
  {
    path: "/send",
    title: "Send",
    logo: <FiDollarSign />
  },
  {
    path: "post",
    title: "Post",
    logo: <RiQuillPenLine />
  }
];
