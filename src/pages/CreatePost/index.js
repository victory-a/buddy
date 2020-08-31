import React from "react";
import { usePageDetails } from "layout/AppLayout";
import { useDisclosure } from "@chakra-ui/core";
import Modal from "components/Modal";

const CreatePost = ({ isOpen, onClose }) => {
  const { setPageTitle } = usePageDetails();

  React.useLayoutEffect(() => {
    setPageTitle("Post");
    document.title = "Buddy | Create Post";
  }, [setPageTitle]);

  return <Modal isOpen={isOpen} onClose={onClose} overlayClose={true} size="md"></Modal>;
};

export function useCreatePost() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return { isOpen, onOpen, onClose };
}
export default CreatePost;
