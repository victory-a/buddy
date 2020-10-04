import React from "react";
import { queryCache, useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { Editable, EditableInput, EditablePreview, Avatar, Tooltip } from "@chakra-ui/core";
import { usePageDetails, NonMobileScreen } from "layout/AppLayout";
import { useUserDetails } from "lib/auth-client";
import { useFetchPosts, useFetchUsersLiked } from "lib/post-client";
import useLikedPosts from "hooks/userLikedPosts";
import { IoIosPaperPlane } from "react-icons/io";

import { createPost } from "lib/post-client";
import useCustomToast from "hooks/useCustomToast";

import Post from "pages/Profile/Tabs/Post";
import { PostSkeleton } from "components/loaders.js/SkeletonLoader";

import {
  PostsContainer,
  PageTitleWrapper,
  AvatarContainer,
  SendButtonContainer,
  CreatePostWrapper
} from "./styles";

const Home = () => {
  const { user } = useUserDetails();
  const { push } = useHistory();
  const { doToast } = useCustomToast();
  const [textValue, setTextValue] = React.useState("");
  const { pageTitle, setPageTitle } = usePageDetails();
  const { data: posts, status } = useFetchPosts();
  const [mutate] = useMutation(createPost);

  const userLikedPosts = useLikedPosts();

  useFetchUsersLiked(user.id);

  React.useLayoutEffect(() => {
    setPageTitle("Home");
    document.title = "Buddy | Home";
  }, [setPageTitle]);

  function handleSend() {
    if (textValue.length > 1) {
      mutate(
        { text: textValue },
        {
          onSuccess: () => {
            queryCache.invalidateQueries("user");
            queryCache.invalidateQueries("fetchAllPosts");

            doToast("Success", "Post succesfully created!");
            setTextValue("");
          }
        }
      );
    } else {
      setTextValue("");
    }
  }

  return (
    <>
      <NonMobileScreen>
        <PageTitleWrapper>
          <p>{pageTitle}</p>
        </PageTitleWrapper>
      </NonMobileScreen>

      <CreatePostWrapper>
        <AvatarContainer onClick={() => push("profile")}>
          <Avatar src={user?.photo} name={`${user?.firstName} ${user?.lastName}`} />
        </AvatarContainer>
        <Editable w="100%" height="2sm" placeholder="What's on your mind" onSubmit={handleSend}>
          <EditablePreview py={1} />
          <EditableInput
            py={1}
            as="textarea"
            maxLength={160}
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
          />
        </Editable>
        <Tooltip hasArrow label="Send" bg="buddy.primary" placement="bottom">
          <SendButtonContainer onClick={handleSend}>
            <IoIosPaperPlane size={"2rem"} />
          </SendButtonContainer>
        </Tooltip>
      </CreatePostWrapper>

      {status === "success" ? (
        <PostsContainer>
          {posts
            ? posts.map(post => (
                <Post
                  post={post}
                  author={post.author}
                  key={post.id}
                  likedByUser={userLikedPosts.includes(post.id)}
                />
              ))
            : null}
        </PostsContainer>
      ) : (
        <PostSkeleton />
      )}
    </>
  );
};

export default Home;
