import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

const NavListContainer = styled.nav`
  display: flex;
  flex-direction: column;

  /* @media ${device.tablet} { */
    align-items: center;
  /* } */
`;

const NavLogoContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  margin: 4rem 0;

  svg {
    width: 4rem;
    height: auto;
    fill: transparent;
  }

  @media ${device.laptop} {
    align-items: center;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const NavListItem = styled.li`
  a {
    align-self: center;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 2.5rem;
    color: ${colors.primary};
    font-size: 1.6rem;
    text-decoration: none;
    transition: all 0.1s ease-in;
    padding: 1rem;

    svg {
      display: block;
    }

    /* hide the navlink text on smaller screens */
    & span {
      display: none;
    }

    @media ${device.tablet} {
      & span {
        display: initial;
      }
    }

    &:hover {
      outline: 0;
      opacity: 0.9;
      text-decoration: none;
      background-color: rgba(18, 39, 140, 0.2);
    }

    svg {
      height: auto;
      width: 2rem;
      transition: fill 0.1s ease;

      @media ${device.tablet} {
        margin-right: 0.8rem;
        width: 1.7rem;
      }
    }

    &.active {
      font-weight: bold;
      background-color: rgba(18, 39, 140, 0.4);
    }
  }

  @media ${device.tablet} {
    a {
      padding: 1rem 1.5rem;
      display: flex;
      left: initial;
    }
  }

  @media ${device.laptop} {
    a {
      padding: 1rem 2rem;
    }
  }
`;

export { NavListContainer, NavLogoContainer, NavList, NavListItem };
