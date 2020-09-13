import styled from "styled-components";
import colors from "styles/colors";

const Button = styled.button`
  height: fit-content;
  color: ${colors.white};
  background-color: ${colors.primary};
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

export const FollowersButton = styled(Button)`
  width: 10rem;
  padding: 0.5rem 0;
  border-radius: 50px;
  margin-right: 1rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  background-color: ${props => (props.following ? `${colors.primary}` : "transparent")};
  color: ${props => (props.following ? `${colors.white}` : `${colors.primary}`)};
  border: 1px solid ${colors.primary};
  margin-bottom: 0;

  &:hover {
    transform: translateY(0);
    background-color: ${props => props.following && "red"};
    border-color: ${props => props.following && "red"};

    &:after {
      content: "unfollow";
      display: ${props => (props.following ? "initial" : "none")};
      z-index: 2;
      width: 100%;
      height: 100%;
    }

    &:before {
      display: none;
    }
  }

  &:before {
    content: "following";
    display: ${props => (props.following ? "initial" : "none")};
    z-index: 2;
    width: 100%;
    height: 100%;
  }
`;

export const FollowingButton = styled(Button)`
  width: 10rem;
  padding: 0.5rem 0;
  border-radius: 50px;
  margin-right: 1rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: 1px solid ${colors.primary};
  transition: all 0.2s ease-in-out;
  position: relative;
  margin-bottom: 0;
  z-index: 1;

  &:hover {
    transform: translateY(0);
    background-color: red;
    border-color: red;

    :after {
      display: initial;
    }
    :before {
      display: none;
    }
  }

  :after {
    content: "unfollow";
    z-index: 2;
    display: none;
    width: 100%;
    height: 100%;
  }
  :before {
    content: "following";
    z-index: 2;
    width: 100%;
    height: 100%;
  }
`;
export default Button;
