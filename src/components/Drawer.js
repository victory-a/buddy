import React from "react";

import {
  useDisclosure,
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody
} from "@chakra-ui/core";

const Drawer = props => {
  return (
    <ChakraDrawer size="xs" placement="left" {...props}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>{props.children}</DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};

export function useDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return {
    isOpen,
    onOpen,
    onClose
  };
}
export default Drawer;
