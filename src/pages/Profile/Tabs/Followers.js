// import React from "react";
// import { Avatar, Flex } from "@chakra-ui/core";
// import { queryCache } from "react-query";

// import { useUserDetails } from "lib/auth-client";
// import { useFollowers, useFollow, useUnfollow } from "lib/user-client";

// import { PostsContainer, PostWrapper, ImageWrapper2, PostDetails, PostText } from "./styles";
// import { FollowersButton } from "components/Button";

// import maleFB from "assets/male-fb.svg";

// const FollowersUser = ({ user, following = false }) => {
//   const [followMutation] = useFollow();
//   const [unfollowMutation] = useUnfollow();

//   function handleUnfollow() {
//     unfollowMutation(user.id, {
//       onSuccess: () => {
//         queryCache.invalidateQueries("following");
//         queryCache.invalidateQueries("followers");
//       }
//     });
//   }

//   function handleFollow() {
//     followMutation(user.id, {
//       onSuccess: () => {
//         queryCache.invalidateQueries("followers");
//         queryCache.invalidateQueries("following");
//         queryCache.invalidateQueries("user");
//       }
//     });
//   }

//   return (
//     <PostWrapper>
//       <ImageWrapper2>
//         <Avatar src={user.photo ?? maleFB} name={`${user?.firstName} ${user?.lastName}`} />
//       </ImageWrapper2>

//       <PostDetails>
//         <Flex justify="space-between" width="100%">
//           <h3>{`${user.firstName} ${user.lastName}`}</h3>
//           <FollowersButton
//             following={following}
//             onClick={() => {
//               return following ? handleUnfollow() : handleFollow();
//             }}
//           >
//             {following ? "" : "follow"}
//           </FollowersButton>
//         </Flex>
//         <PostText>{user.bio}</PostText>
//       </PostDetails>
//     </PostWrapper>
//   );
// };

// const Followers = () => {
//   const { user } = useUserDetails();
//   const followers = useFollowers(user.id);

//   const mutualFollowing =
//     queryCache
//       .getQueryData("following")
//       ?.filter(({ follower }) => follower === user.id)
//       .map(({ followed }) => followed.id) ?? [];

//   return (
//     <PostsContainer>
//       {followers?.map(({ follower }) => (
//         <FollowersUser
//           user={follower}
//           key={`follower-${follower.id}`}
//           following={mutualFollowing.includes(follower.id)}
//         />
//       ))}
//     </PostsContainer>
//   );
// };

// export default Followers;
