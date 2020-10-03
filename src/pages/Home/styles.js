import styled from "styled-components";
import { ImageWrapper } from "pages/Profile/Tabs/styles";
import { device } from "styles";
import colors from "styles/colors";

const PageTitleWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
  background-color: #fff;
  padding: 1.2rem;
  border-bottom: 0.5px solid rgba(18, 39, 140, 0.1);
  font-weight: bold;
`;

const CreatePostWrapper = styled.div`
  padding: 2rem 1rem;
  border-bottom: 0.5px solid rgba(18, 39, 140, 0.1);
  display: flex;
  align-items: "center";
  font-size: 1.4rem;
`;

const AvatarContainer = styled(ImageWrapper)`
  cursor: pointer;
`;

const SendButtonContainer = styled.span`
  align-self: center;
  margin: 0 0.7rem;
  cursor: pointer;
`;

export { PostsContainer } from "../Profile/Tabs/styles";
export { PageTitleWrapper, SendButtonContainer, CreatePostWrapper, AvatarContainer };
