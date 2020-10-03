import React from "react";
import { Formik, Form } from "formik";
import { queryCache, useMutation } from "react-query";
import { Avatar } from "@chakra-ui/core";

import { replyPost } from "lib/post-client";
import useCustomToast from "hooks/useCustomToast";

import { usePageDetails } from "layout/AppLayout";
import { createPostSchema } from "utils/validationSchema";
import TextArea from "components/TextInput/TextArea.js";
import { ShowError } from "components/ShowError/ShowError";
import { Spinner } from "components/loaders.js";
import Modal from "components/Modal";
import Button from "components/Button";

import { PostWrapper, ImageWrapper, PostText, PostDetails } from "./styles";

const Reply = ({ isOpen, onClose, author, post }) => {
  const { setPageTitle } = usePageDetails();
  const { doToast } = useCustomToast();
  const focusRef = React.useRef();
  const [mutate, { status, error }] = useMutation(replyPost);

  function handleSubmit(values) {
    return mutate(
      { postId: post.id, values },
      {
        onSuccess: () => {
          queryCache.invalidateQueries("fetchUsersPosts");
          queryCache.invalidateQueries("fetchUsersLikes");
          doToast("Success", "Post succesfully created!");
          onClose();
        }
      }
    );
  }

  React.useLayoutEffect(() => {
    // setPageTitle("Reply Post");
    document.title = "Buddy | Reply Post";
  }, [setPageTitle]);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      overlayClose={true}
      isCentered={false}
      initialFocusRef={focusRef}
      size={{ base: "90%", tablet: "55%", laptop: "530px" }}
      title="Reply Post"
    >
      <PostWrapper>
        <ImageWrapper>
          <Avatar src={author?.photo} name={`${author?.firstName} ${author?.lastName}`} />
        </ImageWrapper>

        <PostDetails>
          <h3>{`${author?.firstName} ${author?.lastName}` ?? ""}</h3>
          <PostText>{post?.text}</PostText>
        </PostDetails>
      </PostWrapper>
      <Formik
        initialValues={{ post: "" }}
        validationSchema={createPostSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <TextArea
              name="text"
              placeholder="Enter your reply........"
              label=""
              height="12rem"
              tabIndex={0}
              ref={focusRef}
            />
            <ShowError
              status={status}
              error={error === "Invalid credentials" ? "email or password incorrect" : error}
            />
            <Button type="submit" disabled={status === "loading" || isSubmitting || !isValid}>
              {status === "loading" || isSubmitting ? <Spinner /> : "Save"}
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default Reply;
