import React from "react";
import { queryCache } from "react-query";
import { Avatar, Flex } from "@chakra-ui/core";

import { useUserDetails } from "lib/auth-client";
import { useFollowing, useUnfollow } from "lib/user-client";

import { FollowingButton } from "components/Button";
import maleFB from "assets/male-fb.svg";
import { PostsContainer, PostWrapper, ImageWrapper2, PostDetails, PostText } from "./styles";

export const FollowingUser = ({ user }) => {
  const [mutate] = useUnfollow();

  function handleUnFollow() {
    mutate(user.id, {
      onSuccess: () => {
        queryCache.invalidateQueries("followers");
        queryCache.invalidateQueries("following");
        queryCache.invalidateQueries("user");
      }
    });
  }

  return (
    <PostWrapper>
      <ImageWrapper2>
        <Avatar
          rounded="full"
          src={user.photo ?? maleFB}
          name={`${user?.firstName} ${user?.lastName}`}
        />
      </ImageWrapper2>

      <PostDetails>
        <Flex justify="space-between" width="100%">
          <h3>{`${user?.firstName} ${user?.lastName}`}</h3>
          <FollowingButton onClick={() => handleUnFollow(user.id)}></FollowingButton>
        </Flex>
        <PostText>{user.bio}</PostText>
      </PostDetails>
    </PostWrapper>
  );
};

const Following = () => {
  const { user } = useUserDetails();
  const following = useFollowing(user.id);

  return (
    <PostsContainer>
      {following?.map(({ followed }) => (
        <FollowingUser user={followed} key={`following-${followed._id}`} />
      ))}
    </PostsContainer>
  );
};

export default Following;
