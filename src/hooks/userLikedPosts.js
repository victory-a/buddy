import { queryCache } from "react-query";

export default function useLikedPosts() {
  return queryCache.getQueryData("fetchUsersLikes")?.map(({ post }) => post.id) ?? [];
}
