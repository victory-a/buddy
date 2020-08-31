import React from "react";
import { IoIosClose } from "react-icons/io";
import { Modal, ModalOverlay, ModalContent, ModalBody, SlideIn } from "@chakra-ui/core";

import { StatusContainer, CloseButton, ModalTitle } from "./styles";

const CustomModal = ({
  isOpen,
  onClose,
  children,
  showCloseBtn = true,
  overlayClose = true,
  size = "lg",
  type = "padded",
  title = ""
}) => {
  return (
    <SlideIn in={isOpen}>
      {() => (
        <Modal
          isOpen={isOpen}
          size={size}
          width="auto"
          scrollBehavior="inside"
          isCentered={true}
          closeOnOverlayClick={overlayClose}
        >
          <ModalOverlay bg="hsla(222, 74%, 17%, 0.4)" />
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
            <ModalTitle>{title}</ModalTitle>
            <ModalBody p={0}>
              {type === "padded" ? <StatusContainer>{children}</StatusContainer> : children}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </SlideIn>
  );
};

export default CustomModal;
