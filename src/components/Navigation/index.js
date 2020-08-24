import React, { Fragment } from "react";
import { NavLink, Link, useLocation, useHistory } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";

import { useAuth } from "contexts/AuthContext";
import { usePageDetails } from "layout/AppLayout";
import { useUserDetails } from "lib/auth-client";
import navList from "routes/navList";

import { ReactComponent as Logo } from "assets/logo.svg";
import {
  NavListContainer,
  NavLogoContainer,
  NavList,
  NavListItem,
  MobileNavContainer
} from "./styles";
import { useDisclosure } from "@chakra-ui/core";

const MainNav = () => {
  const { pathname } = useLocation();

  return (
    <NavListContainer>
      <NavLogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </NavLogoContainer>

      <NavList>
        {navList.map(link => {
          if (link.path === "/") {
            return (
              <NavListItem key={`navlink-${link.path}`}>
                <NavLink to={link.path} activeClassName={`${pathname === "/" && "active"}`}>
                  {link.logo}
                  <span>{link.title}</span>
                </NavLink>
              </NavListItem>
            );
          }

          return (
            <NavListItem key={`navlink-${link.path}`}>
              <NavLink to={link.path} activeClassName="active">
                {link.logo}
                <span>{link.title}</span>
              </NavLink>
            </NavListItem>
          );
        })}
      </NavList>
    </NavListContainer>
  );
};

const MobileNav = () => {
  const { push } = useHistory();
  const { user } = useUserDetails();
  const { pageTitle } = usePageDetails();
  const { logout } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MobileNavContainer>
      <div className="burger-menu" onClick={onOpen}>
        <RiMenu2Line size={20} />
      </div>

      <div className="page-title">{pageTitle}</div>
    </MobileNavContainer>
  );
};

export { MainNav, MobileNav };
