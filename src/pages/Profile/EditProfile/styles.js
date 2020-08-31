import styled from "styled-components";
import colors from "styles/colors";
import { device } from "styles";
import { InlineFields } from "layout/AuthLayout/styles";

const ProfileContentContainer = styled.div`
  margin: 0 auto;
  /* width: 50rem; */
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tip = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;

  h4 {
    font-size: 1.3rem;
  }
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  label {
    cursor: pointer;
    position: relative;

    img {
      opacity: 0.8;
      object-fit: cover;
      border: 4px solid rgb(232, 232, 232);
    }

    div.icon {
      opacity: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media ${device.tablet} {
    padding: 0;
    justify-content: flex-start;

    label {
      img {
        opacity: 1;
        transition: 0.5s ease;
      }

      div.icon {
        opacity: 0;
        transition: 0.5s ease;
      }

      &:hover img {
        opacity: 0.8 !important;
      }

      &:hover div.icon {
        opacity: 1;
      }
    }
  }
`;

const FieldsContainer = styled.div`
  margin: 2rem auto;

  @media ${device.tablet} {
    margin: 3.5rem auto;
  }
`;

const NameContainer = styled(InlineFields)`
  width: 100%;
`;

export {
  ProfileContentContainer,
  ProfileImageContainer,
  Tip,
  ProfileImageWrapper,
  FieldsContainer,
  NameContainer
};
