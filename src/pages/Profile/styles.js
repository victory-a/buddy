import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

const ProfileContainer = styled.section`
  padding: 1.3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    padding: 2rem;

    h2 {
      margin-bottom: 0.5rem;
    }
  }
`;

const EditButton = styled.button`
  align-self: flex-end;
  margin-right: 0.8rem;
  margin-top: -3rem;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 2px;
  letter-spacing: 1px;
  border: 1px solid ${colors.primary};

  @media ${device.mobile} {
    margin-top: 0;

    margin-right: 6rem;
  }
`;

const ProfileImageWrapper = styled.div`
  margin-top: 0.5rem;
  position: relative;
  width: 7rem;
  height: auto;

  @media ${device.tablet} {
    margin-top: 2rem;
    width: 11rem;
  }

  img {
    position: absolute;
    width: 6.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media ${device.tablet} {
      width: 10.5rem;
    }
  }

  .progress-stat {
    position: absolute;
    font-size: 0.6rem;
    font-weight: bold;
    color: #fff;
    top: 0;
    right: 3%;
    transform: translate(-4%, 0);
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
    border-radius: 50%;

    @media ${device.tablet} {
      font-size: 0.8rem;
      width: 25px;
      height: 25px;
      right: 4%;
    }
  }
`;

const BioContainer = styled.div`
  margin: 1.2rem auto;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    margin: 2rem 0;
  }

  p {
    text-align: center;
    font-size: 1.4rem;
    padding: 0 0.5rem;
  }
`;

const NameWrapper = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const ConnectionStats = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.9rem;

  & span {
    font-weight: bold;
  }
`;

// TABS STYLE
const TabContainer = styled.section`
  margin: 1.5rem 0;
  width: 90%;
`;
const TabWrapper = styled.div`
  min-height: 50vh;
`;

export {
  ProfileContainer,
  ProfileImageWrapper,
  BioContainer,
  NameWrapper,
  ConnectionStats,
  EditButton,
  TabContainer,
  TabWrapper
};
