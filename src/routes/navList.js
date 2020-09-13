import React from "react";
import { FaUsers } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RiHome4Line, RiQuillPenLine } from "react-icons/ri";

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
    path: "users",
    title: "Users",
    logo: <FaUsers />
  },
  // {
  //   path: "/send",
  //   title: "Send",
  //   logo: <FiDollarSign />
  // },
  {
    path: "/create-post",
    title: "Post",
    logo: <RiQuillPenLine />
  }
];
