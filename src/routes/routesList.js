import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const Login = lazy(() => import("pages/Auth/Login"));
const CreateAccount = lazy(() => import("pages/Auth/CreateAccount"));
const ForgotPassword = lazy(() => import("pages/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("pages/Auth/ResetPassword"));
const Home = lazy(() => import("pages/Home"));
const Profile = lazy(() => import("pages/Profile"));
const Post = lazy(() => import("pages/Post"));
const Send = lazy(() => import("pages/Send"));

const routes = [
  {
    path: "/",
    exact: true,
    isPrivate: false,
    component: Login
  },
  {
    path: "/create-account",
    exact: true,
    isPrivate: false,
    component: CreateAccount
  },
  {
    path: "/forgot-password",
    exact: true,
    isPrivate: false,
    component: ForgotPassword
  },
  {
    path: "/reset-password/:resetToken",
    exact: true,
    isPrivate: false,
    component: ResetPassword
  },
  {
    path: "*",
    exact: true,
    isPrivate: false,
    component: () => <Redirect to="/" />
  },
  {
    path: "/",
    exact: true,
    isPrivate: true,
    component: Home
  },
  {
    path: "/profile",
    exact: true,
    isPrivate: true,
    component: Profile
  },
  {
    path: "/profile",
    exact: true,
    isPrivate: true,
    component: Profile
  },
  {
    path: "/send",
    exact: true,
    isPrivate: true,
    component: Send
  },
  {
    path: "/post",
    exact: true,
    isPrivate: true,
    component: Post
  },
  {
    path: "*",
    exact: true,
    isPrivate: true,
    component: () => <Redirect to="/" />
  }
];

export default routes;
