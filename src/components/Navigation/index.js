import React from "react";
import { NavLink, Link, useLocation, useHistory } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosLogOut, IoIosSettings } from "react-icons/io";
import { Image } from "@chakra-ui/core";

import { useAuth } from "contexts/AuthContext";
import { usePageDetails, NonMobileScreen } from "layout/AppLayout";
import { useUserDetails } from "lib/auth-client";
import navList from "routes/navList";

import Drawer, { useDrawer } from "components/Drawer";

import maleFB from "assets/male-fb.svg";
import femaleFB from "assets/female-fb.svg";

import {
  NavListContainer,
  NavLogoContainer,
  NavList,
  NavListItem,
  MobileNavContainer
} from "./styles";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/core";

const MainNav = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const { user } = useUserDetails();
  const { handleLogout } = useAuth();

  return (
    <NavListContainer>
      <NavLogoContainer>
        <Link to="/">
          <span role="img" aria-label="product logo">
            <span className="text">Buddy</span>✌🏽
          </span>
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

      <NonMobileScreen>
        <div className="nav-menu">
          <Menu autoSelect={false}>
            <MenuButton>
              <Image
                rounded="full"
                src={user?.photo}
                fallbackSrc={user?.gender === "female" ? femaleFB : maleFB}
              />
            </MenuButton>
            <MenuList borderRadius="8px" placement="bottom-end" border="1.5px solid #C5D4F6">
              <MenuItem py="0.7rem" onClick={() => push("settings")}>
                <span className="icon">
                  <IoIosSettings />
                </span>
                <span>Settings</span>
              </MenuItem>
              <MenuItem p="1rem" onClick={handleLogout}>
                <span className="icon">
                  <IoIosLogOut />
                </span>
                <span>Logout</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </NonMobileScreen>
    </NavListContainer>
  );
};

const NavDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="xs" placement="left">
      <MainNav />
    </Drawer>
  );
};

const MobileNav = () => {
  const { push } = useHistory();
  const { user } = useUserDetails();
  const { pageTitle } = usePageDetails();
  const { handleLogout } = useAuth();

  const { isOpen: isDrawerOpen, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDrawer();

  return (
    <>
      <MobileNavContainer>
        <div className="burger-menu" onClick={onOpenDrawer}>
          <RiMenu2Line size={24} />
        </div>

        <div className="page-title">{pageTitle}</div>

        <div className="nav-menu">
          <Menu autoSelect={false}>
            <MenuButton>
              <Image
                rounded="full"
                src={user?.photo}
                fallbackSrc={user?.gender === "female" ? femaleFB : maleFB}
              />
            </MenuButton>
            <MenuList borderRadius="8px" placement="bottom-end" border="1.5px solid #C5D4F6">
              <MenuItem p="1rem" onClick={() => push("settings")}>
                <span className="icon">
                  <IoIosSettings />
                </span>
                <span>Settings</span>
              </MenuItem>
              <MenuItem p="1rem" onClick={handleLogout}>
                <span className="icon">
                  <IoIosLogOut />
                </span>
                <span>Logout</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </MobileNavContainer>
      <NavDrawer isOpen={isDrawerOpen} onClose={onCloseDrawer} />
    </>
  );
};

export { MainNav, MobileNav };
