import React from "react";
import { IoIosClose } from "react-icons/io";
import { Modal, ModalOverlay, ModalContent, ModalBody, Scale } from "@chakra-ui/core";
import { StatusContainer, CloseButton } from "./styles";
import colors from "styles/colors";

// const CreatePostModal = ({ isOpen, onClose, title = "", children }) => {

const CustomModal = ({
  isOpen,
  onClose,
  children,
  showCloseBtn = true,
  overlayClose = true,
  size = "lg",
  type = "padded"
}) => {
  return (
    <Scale in={isOpen}>
      {() => (
        <Modal
          isOpen={isOpen}
          size={size}
          scrollBehavior="inside"
          px="5rem"
          isCentered={true}
          closeOnOverlayClick={overlayClose}
        >
          <ModalOverlay />
          <ModalContent borderRadius={type === "padded" ? 4 : 0}>
            {showCloseBtn && (
              <CloseButton
                type="button"
                onClick={onClose}
                aria-label="Close Modal"
                aria-labelledby="close-modal"
              >
                <IoIosClose size={27} />
              </CloseButton>
            )}

            <ModalBody p={0}>
              {type === "padded" ? <StatusContainer>{children}</StatusContainer> : children}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Scale>
  );
};

export default CustomModal;
