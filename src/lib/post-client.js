import client from "./client";
import { useQuery, useMutation } from "react-query";

async function createPost(payload) {
  return await client("posts", { body: payload });
}

async function replyPost({ postId, values }) {
  return await client(`posts/${postId}/reply`, { body: values });
}

function useFetchPosts() {
  const { data, status } = useQuery({
    queryKey: "fetchAllPosts",
    queryFn: () => client("posts").then(data => data.data)
  });

  return { data, status };
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

function useUnlikePost() {
  return useMutation(postId => client(`posts/unlike/${postId}`, { method: "PUT" }));
}

export {
  createPost,
  replyPost,
  useFetchPosts,
  useUnlikePost,
  useFetchUsersPosts,
  useLikePost,
  useFetchUsersLiked
};
