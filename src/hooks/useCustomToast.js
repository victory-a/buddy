import { useToast } from "@chakra-ui/core";

const useCustomToast = () => {
  const toast = useToast();

  const doToast = (
    title = "Successful!",
    description = "Operation successful!",
    status = "success",
    position = "top-right",
    duration = 5000,
    isClosable = true
  ) => toast({ position, title, description, status, duration, isClosable });

  return { doToast };
};

export default useCustomToast;
