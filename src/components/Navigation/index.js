import React from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import navList from "routes/navList";
import { NavLink, Link, useLocation, useHistory } from "react-router-dom";

import { NavListContainer, NavLogoContainer, NavList, NavListItem } from "./styles";

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

export { MainNav };
