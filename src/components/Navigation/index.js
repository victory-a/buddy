import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { RiQuillPenLine } from "react-icons/ri";
import { useDisclosure } from "@chakra-ui/core";

import { useAuth } from "contexts/AuthContext";
import { usePageDetails } from "layout/AppLayout";
import { useUserDetails } from "lib/user-client";
import navList from "routes/navList";

import Drawer, { useDrawer } from "components/Drawer";

import { ReactComponent as Logo } from "assets/logo.svg";
import CreatePost from "pages/CreatePost";
import {
  NavListContainer,
  NavLogoContainer,
  NavList,
  NavListItem,
  MobileNavContainer
} from "./styles";

import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/core";

const MainNav = () => {
  const { pathname } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <NavListItem>
          <div className="toggle-post-modal" onClick={onOpen}>
            <RiQuillPenLine />
            <span>Post</span>
            <CreatePost isOpen={isOpen} onClose={onClose} />
          </div>
        </NavListItem>
      </NavList>
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
  // const { push } = useHistory();
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
              <Avatar size="md" name={`${user?.firstName} ${user?.lastName}`} src={user?.photo} />
            </MenuButton>
            <MenuList borderRadius="8px" placement="bottom-end" border="1.5px solid #C5D4F6">
              {/* <MenuItem py="0.7rem" onClick={onOpenCreatePost}>
                <span className="icon">
                  <CreatePost isOpen={isCreatePostOpen} onClose={onCloseCreatePost} />
                </span>
                <span>Profile</span>
              </MenuItem> */}
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
      {/* <NavDrawer isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
};

export { MainNav, MobileNav };
