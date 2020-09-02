import React from "react";
import { IoIosClose } from "react-icons/io";

import { Modal, ModalOverlay, ModalContent, ModalBody, SlideIn } from "@chakra-ui/core";

import { StatusContainer, CloseButton, ModalTitle } from "./styles";

const CustomModal = ({
  isOpen,
  onClose,
  children,
  showCloseBtn = true,
  overlayClose = false,
  size,
  type = "padded",
  title = "",
  isCentered = true,
  // initialFocusRef=null,
  ...props
}) => {
  // const ref={focusRef}
  return (
    <SlideIn in={isOpen}>
      {() => (
        <Modal
          isOpen={isOpen}
          size={size}
          isCentered={isCentered}
          closeOnOverlayClick={overlayClose}
          onClose={onClose}
          initialFocusRef={props.initialFocusRef ?? null}
          {...props}
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
