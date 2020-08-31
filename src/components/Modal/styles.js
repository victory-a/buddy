import styled from "styled-components";
import { device } from "styles";

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: all 0.2s;
  flex: 0 0 auto;
  position: absolute;
  top: 10px;
  right: 5px;
  z-index: 4;
  border-radius: 5px;
  background-color: rgba(18, 39, 140, 0.1);

  &:focus {
    outline: none;
  }
`;

const StatusContainer = styled.div`
  padding: 1.5rem;
  padding-bottom: 0;

  @media ${device.tablet} {
    padding: 2.5rem;
  }
`;

const ModalTitle = styled.h3`
  margin-top: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  font-size: 1.6rem;
  margin-left: 0;

  @media ${device.tablet} {
    text-align: left;
    margin-left: 1.5rem;
  }
`;

export { StatusContainer, CloseButton, ModalTitle };
