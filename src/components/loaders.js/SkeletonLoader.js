import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { device } from "styles";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  width: 100%;

  @media ${device.laptop} {
    padding: 2.5rem;
  }

  .title {
    margin: 1rem 0;
  }

  div.center {
    margin: 1.5rem 0;
    width: 80%;
  }
`;
const SkeletonLoader = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1441px)"
  });

  return (
    <SkeletonTheme color="rgba(10,46,101,0.04)" highlightColor="rgba(186, 198, 216, 0.04)">
      <Container>
        <div className="title">
          <Skeleton duration={1} height={40} width={300} />
        </div>

        <div className="center">
          <Skeleton duration={1} height={100} />
        </div>

        <div className="center">
          <Skeleton duration={1} height={250} width="90%" />
        </div>

        <div className="center">
          <Skeleton duration={1} height={150} width="90%" />
        </div>

        {isDesktop && (
          <div className="center">
            <Skeleton duration={1} height={150} width="90%" />
          </div>
        )}
      </Container>
    </SkeletonTheme>
  );
};

const PostsWrapper = styled.div`
  width: 100%;
  flex-direction: column;

  @media ${device.laptop} {
    padding: 2rem;
  }

  .post {
    display: flex;
    margin: 0.5em 0 3.5rem;
    width: 100%;
    align-items: center;
  }

  .avatar {
    margin: 0 1rem;
  }

  .text {
    width: 80%;
  }
`;

const Post = () => {
  return (
    <div className="post">
      <div className="avatar">
        <Skeleton circle={true} height={40} width={40} />
      </div>
      <div className="text">
        <Skeleton duration={1} height={40} />
      </div>
    </div>
  );
};

export const PostSkeleton = () => {
  return (
    <SkeletonTheme color="rgba(10,46,101,0.04)" highlightColor="rgba(186, 198, 216, 0.04)">
      <PostsWrapper>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsWrapper>
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
