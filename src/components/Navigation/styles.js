import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

const MobileNavContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  & .burger-menu {
    padding: 0.3rem;
  }

  & .page-title {
    font-weight: 600;
    font-size: 1.7rem;
    text-align: center;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  & .nav-menu {
    text-align: end;

    img {
      width: auto;
      height: 2.5rem;
      margin-left: auto;
    }

    span.icon {
      margin-right: 0.5rem;

      svg {
        width: 20px;
      }
    }
  }
`;

const NavListContainer = styled.nav`
  display: flex;
  flex-direction: column;
  position: relative;

  & .nav-menu {
    justify-self: flex-end;
    align-self: center;
    position: absolute;
    display: block;
    bottom: 3%;
    transform: translateY(3%);

    img {
      width: 5rem;
      height: 5rem;
      margin-left: auto;
    }

    span.icon {
      margin-right: 0.5rem;

      svg {
        width: 20px;
      }
    }
  }
`;

const NavLogoContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  margin: 2rem 0 4rem 0;

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
  a,
  .toggle-post-modal {
    align-self: flex-start;
    border-radius: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 2.5rem;
    color: ${colors.primary};
    /* font-size: 1.4rem; */
    text-decoration: none;
    transition: all 0.1s ease-in;
    padding: 1rem;

    @media ${device.tablet} {
      font-size: 1.6rem;
    }

    /* hide the navlink text on smaller screens */

    & span {
      @media ${device.mobile} {
        display: none;
      }

      @media ${device.tablet} {
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
      width: 2.5rem;
      margin-right: 0.8rem;
      transition: fill 0.1s ease;

      @media ${device.mobile} {
        display: block;
        width: 2rem;
        margin-right: 0;
      }

      @media ${device.tablet} {
        margin-right: 0.8rem;
        width: 1.7rem;
      }
    }

    &.active {
      background-color: ${colors.blue};
      color: ${colors.white};
      opacity: 0.9;
    }
  }

  @media ${device.tablet} {
    a,
    .toggle-post-modal {
      padding: 1rem 1.5rem;
      display: flex;
      left: initial;
    }
  }

  @media ${device.laptop} {
    a,
    .toggle-post-modal {
      padding: 1rem 2rem;
    }
  }
`;

export { NavListContainer, NavLogoContainer, NavList, NavListItem, MobileNavContainer };
