import { useQuery, useMutation } from "react-query";
import config from "config";
import client from "./client";

async function updateUser(payload) {
  return await client("auth/updatedetails", { body: payload, method: "PUT" });
}

async function saveImageToCloudinary(payload) {
  const res = await fetch(config.UPLOAD_URL, {
    body: payload,
    method: "POST"
  });
  const file = await res.json();
  return file;
}

function useUsers() {
  const { data, status, error } = useQuery({
    queryKey: "getAllUsers",
    queryFn: () => client("users").then(data => data.data)
  });
  let users = data ?? [];
  return [users, status, error];
}

function getFollowers(userId) {
  return client(`users/${userId}/followers`).then(data => data.data);
}

function getFollowing(userId) {
  return client(`users/${userId}/following`).then(data => data.data);
}

function useFollowers(userId) {
  const { data: followers, status } = useQuery({
    queryKey: "followers",
    queryFn: () => getFollowers(userId)
  });
  return { followers, status };
}

function useFollowing(userId) {
  const { data: following, status } = useQuery({
    queryKey: "following",
    queryFn: () => getFollowing(userId)
  });
  return { following, status };
}

function useUnfollow() {
  return useMutation(userId => client(`users/unfollow/${userId}`, { method: "PUT" }));
}

function useFollow() {
  return useMutation(userId => client(`users/follow/${userId}`, { method: "PUT" }));
}

export {
  useUsers,
  updateUser,
  saveImageToCloudinary,
  useFollowers,
  useFollowing,
  useFollow,
  useUnfollow
};
