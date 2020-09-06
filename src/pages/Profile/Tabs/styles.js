import styled from "styled-components";
import { device } from "styles";

const PostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PostWrapper = styled.div`
  padding: 1rem;
  border-bottom: 0.5px solid rgba(18, 39, 140, 0.1);
  display: flex;
  align-items: flex-end;
`;

const ImageWrapper = styled.div`
  margin-right: 0.8rem;
  align-self: flex-start;

  img {
    width: 5.5rem;
    height: 5.5rem;
  }
`;

const PostDetails = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.6rem;
    font-weight: bold;

    @media ${device.mobile} {
      font-size: 1.4rem;
    }
  }
`;

const PostText = styled.div`
  display: flex;
  font-size: 1.6;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

const Insights = styled.div`
  display: flex;
  margin-top: 0.5rem;

  & span:first-of-type {
    margin-right: 2.5rem;
  }
`;
const InsightGroup = styled.span`
  svg {
    cursor: pointer;
    padding: 3px;
    border-radius: 50%;
  }

  &:nth-of-type(2):hover {
    svg {
      color: red;
      background-color: rgba(255, 1, 0, 0.1);
    }
  }

  p {
    font-size: 1.5rem;
    margin: 0 0.3rem;
    cursor: pointer;

    @media ${device.mobile} {
      font-size: 1.3rem;
    }
  }
`;

export { PostsContainer, PostWrapper, ImageWrapper, PostText, PostDetails, Insights, InsightGroup };
