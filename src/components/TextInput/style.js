import styled from "styled-components";
import colors from "styles/colors";
import { device } from "styles";

const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 2rem;

  &.error input {
    border-color: ${colors.error};
  }
`;

const Label = styled.label`
  display: block;
  letter-spacing: 0.1px;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

const Span = styled.span`
  display: block;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 1.5%;
    cursor: pointer;
    transform: translate(1.5%, -50%);
  }
`;

const Input = styled.input`
  border: 1px solid red;
  width: 100%;
  padding: 1.2rem;
  outline: none;
  position: relative;
  border: 1px solid ${colors?.lightGrey};
  border-radius: 0.25rem;
  color: ${colors.grey};
  background-color: ${colors?.white};
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "Raleway", sans-serif;
  text-indent: 1rem;
  letter-spacing: 0.1px;
  transition: border-color 0.25s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: ${colors?.blue};
  }

  @media ${device.tablet} {
    font-size: 1.4rem;
  }
`;

const ErrorSpan = styled.span`
  color: ${colors?.error};
  font-size: 1.1rem;
`;

export { Container, Input, Label, Span, ErrorSpan };
