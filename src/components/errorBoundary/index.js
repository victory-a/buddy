import * as React from "react";
import { device } from "styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 4rem);

  h2 {
    font-size: 10rem;
  }
`;

export const Message = styled.div`
  border: 2px #78909c solid;
  border-radius: 5px;
  font-size: 24px;
  color: #78909c;
  text-align: center;
  padding: 20px;

  @media ${device.laptop} {
    padding: 40px;
  }
`;

export const Link = styled.div`
  cursor: pointer;
  padding-top: 1.5rem;
  text-decoration: underline;
`;

const ErrorBoundaryFallbackComponent = () => (
  <Container>
    <Message>
      Hey, something went wrong! .. Please refresh!
      <span role="img" aria-label="face-emoji">
        {" "}
        😞
      </span>
    </Message>
  </Container>
);

class ErrorBoundary extends React.Component {
  state = {
    error: null,
    info: null
  };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <ErrorBoundaryFallbackComponent />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
