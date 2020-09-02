import React from "react";
import { Formik, Form } from "formik";
import { queryCache, useMutation } from "react-query";

import { createPost } from "lib/post-client";
import useCustomToast from "hooks/useCustomToast";

import { usePageDetails } from "layout/AppLayout";
import { createPostSchema } from "utils/validationSchema";
import TextArea from "components/TextInput/TextArea.js";
import { ShowError } from "components/ShowError/ShowError";
import { Spinner } from "components/loaders.js";
import Modal from "components/Modal";
import Button from "components/Button";

const CreatePost = ({ isOpen, onClose }) => {
  const { setPageTitle } = usePageDetails();
  const { doToast } = useCustomToast();
  const [mutate, { status, error }] = useMutation(createPost);
  const focusRef = React.useRef();

  React.useLayoutEffect(() => {
    setPageTitle("Post");
    document.title = "Buddy | Create Post";
  }, [setPageTitle]);

  async function handleSubmit(values) {
    await mutate(values, {
      onSuccess: async () => {
        await queryCache.invalidateQueries("user");
        doToast("Success", "Post succesfully created!");
        // onClose();
      }
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      overlayClose={true}
      isCentered={false}
      initialFocusRef={focusRef}
      size={{ base: "90%", tablet: "55%", laptop: "530px" }}
      title="Create Post"
    >
      <Formik
        initialValues={{ post: "" }}
        validationSchema={createPostSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <TextArea
              name="text"
              placeholder="Hey! Whats happening........"
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

export default CreatePost;
