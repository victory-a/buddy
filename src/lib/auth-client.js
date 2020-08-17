import { queryCache, useQuery } from "react-query";
import config from "config";
import client from "./client";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function getToken() {
  let token = null;
  const userToken = Cookies.get(config.TOKEN);

  if (userToken) {
    token = JSON.parse(userToken);
    return token;
  }

  return token;
}

function checkTokenValidity(returnFn) {
  const token = getToken();
  if (token) {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) returnFn();
  }
}

async function getUser() {
  const token = getToken();

  if (!token) {
    return Promise.resolve(null);
  }

  try {
    return await client("auth/currentuser");
  } catch (error) {
    logout();

    return Promise.reject(error);
  }
}

async function handleUserResoponse({ token }) {
  if (token) {
    await Cookies.set(config.TOKEN, JSON.stringify(token), {
      expires: 1,
      secure: process.env.NODE_ENV === "production"
    });
  }

  try {
    return await client("auth/currentuser");
  } catch (error) {
    logout();

    return Promise.reject(error);
  }
}

function fetchUserDetails() {
  return queryCache.getQueryData("user");
}

// synchronize the current user object value (if any) with the user value from authContext
function useUserDetails() {
  let user = null;
  const { data, status } = useQuery({
    queryKey: "userDetails",
    queryFn: fetchUserDetails
  });

  if (data) user = data.user;

  return { user, status };
}

async function register(payload) {
  const response = await client("auth/register", { body: payload });
  return handleUserResoponse(response);
}

async function login(payload) {
  const response = await client("auth/login", { body: payload });
  return handleUserResoponse(response);
}

async function forgotPassword(payload) {
  return await client("auth/forgotpassword", { body: payload });
}

async function resetPassword(payload, resetToken) {
  return await client(`auth/resetpassword/${resetToken}`, {
    body: payload,
    method: "PATCH"
  });
}

function logout() {
  Cookies.remove(config.TOKEN);
  return Promise.resolve();
}

export {
  getToken,
  getUser,
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  useUserDetails,
  checkTokenValidity
};
