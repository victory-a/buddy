import styled from "styled-components";
import colors from "styles/colors";

const CloseButton = styled.button`
  /* width: 32px; */
  /* height: 32px; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: all 0.2s;
  flex: 0 0 auto;
  position: absolute;
  top: 10px;
  right: 5px;
  z-index: 2;
  border-radius: 5px;
  background-color: rgba(18, 39, 140, 0.1);

  &:focus {
    outline: none;
  }
`;

const StatusContainer = styled.div`
  padding: 1.875rem;
`;

export { StatusContainer, CloseButton };
