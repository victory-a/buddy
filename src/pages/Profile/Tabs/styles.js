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

  &:hover {
    background-color: rgba(18, 39, 140, 0.1);
  }
`;

const ImageWrapper = styled.div`
  margin-right: 0.8rem;
  align-self: flex-start;
  width: 3rem;
  height: 3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: center;
  }
`;

const ImageWrapper2 = styled(ImageWrapper)`
  width: 3rem;
  height: auto;

  @media ${device.tablet} {
    width: 5rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: center;
  }
`;

const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    font-size: 1.6rem;
    font-weight: bold;
    text-transform: capitalize;

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

// const

export {
  PostsContainer,
  PostWrapper,
  ImageWrapper,
  ImageWrapper2,
  PostText,
  PostDetails,
  Insights,
  InsightGroup
};
