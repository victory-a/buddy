import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Scale
} from "@chakra-ui/core";
const CreatePostModal = ({ isOpen, onClose, title = "", children }) => {
  return (
    <Scale in={isOpen}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </Scale>
  );
};

export default CreatePostModal;
