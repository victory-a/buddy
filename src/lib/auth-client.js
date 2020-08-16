import config from "config";
import Cookies from "js-cookie";
import Axios from "utils/axios";

function getToken() {
  let token = null;

  const userToken = Cookies.get(config.TOKEN);
  if (userToken) {
    token = JSON.parse(userToken);
    return token;
  }

  return token;
}

async function getUser() {
  const token = getToken();

  if (!token) {
    return Promise.resolve(null);
  }

  try {
    return await Axios.get("auth/currentuser");
  } catch (error) {
    logout();
    return Promise.reject(error);
  }
}

async function handleUserResoponse({ data: { token } }) {
  if (token) {
    await Cookies.set(config.TOKEN, JSON.stringify(token), {
      expires: 1,
      secure: process.env.NODE_ENV === "production"
    });
  }

  try {
    return await getUser();
  } catch (error) {
    return Promise.reject(error);
  }
}

async function login(payload) {
  const response = await Axios.post("auth/login", payload);
  return handleUserResoponse(response);
}

async function register(payload) {
  const response = await Axios.post("auth/register", payload);
  return handleUserResoponse(response);
}

function logout() {
  Cookies.remove(config.TOKEN);
  return Promise.resolve();
}

export { getToken, getUser, register, login, logout };
