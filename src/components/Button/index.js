import styled from "styled-components";
import colors from "styles/colors";

const Button = styled.button`
  height: fit-content;
  color: ${colors.white};
  background-color: ${colors.blue};
  border-radius: 5px;
  width: 100%;
  padding: 1.5rem 0;
  letter-spacing: 0.8px;
  transform: translateY(0);
  transition: all 0.7s ease-in-out;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  font-family: "Raleway", sans-serif;

  &:hover {
    transform: translateY(2px);
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    transform: translateY(0);
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
