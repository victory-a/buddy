import client from "./client";
import { useQuery, useMutation } from "react-query";

async function createPost(payload) {
  return await client("posts", { body: payload });
}

async function likePost(postId) {
  return await client(`posts/like/${postId}`, { method: "PUT" });
}

async function unLikePost(postId) {
  return await client(`posts/unlike/${postId}`, { method: "PUT" });
}

function useFetchUsersPosts(userId) {
  const { data, status } = useQuery({
    queryKey: "fetchUsersPosts",
    queryFn: () => client(`posts/user/${userId}`).then(data => data.data)
  });

  return { data, status };
}

function useFetchUsersLiked(userId) {
  const { data: likedPosts, status } = useQuery({
    queryKey: "fetchUsersLikes",
    queryFn: () => client(`users/${userId}/liked`).then(data => data.data)
  });
  return { likedPosts, status };
}

function useLikePost() {
  return useMutation(postId => client(`posts/like/${postId}`, { method: "PUT" }));
}

export { createPost, likePost, unLikePost, useFetchUsersPosts, useLikePost, useFetchUsersLiked };
