import React from "react";
import { NavLink, Link, useLocation, useHistory } from "react-router-dom";
import CustomModal from "components/Modal";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { RiQuillPenLine } from "react-icons/ri";

import { useAuth } from "contexts/AuthContext";
import { usePageDetails } from "layout/AppLayout";
import { useUserDetails } from "lib/user-client";
import navList from "routes/navList";

import { ReactComponent as Logo } from "assets/logo.svg";
import {
  NavListContainer,
  NavLogoContainer,
  NavList,
  NavListItem,
  MobileNavContainer
} from "./styles";

import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar
} from "@chakra-ui/core";
import Post from "pages/Post";

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
        <NavListItem>
          <div className="toggle-post-modal">
            <RiQuillPenLine />
            <span>Post</span>
            {/* <Post/> */}
          </div>
        </NavListItem>
      </NavList>
    </NavListContainer>
  );
};

const NavDrawer = ({ onClose, isOpen }) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="xs" placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <MainNav />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const MobileNav = () => {
  const { push } = useHistory();
  const { user } = useUserDetails();
  const { pageTitle } = usePageDetails();
  const { handleLogout } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MobileNavContainer>
        <div className="burger-menu" onClick={onOpen}>
          <RiMenu2Line size={24} />
        </div>

        <div className="page-title">{pageTitle}</div>

        <div className="nav-menu">
          <Menu autoSelect={false}>
            <MenuButton>
              <Avatar size="md" name={`${user?.firstName} ${user?.lastName}`} src={user?.photo} />
            </MenuButton>
            <MenuList borderRadius="8px" placement="bottom-end" border="1.5px solid #C5D4F6">
              {/* <MenuItem py="0.7rem" onClick={() => push("profile")}>
                <span className="icon">
                  <Profile />
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
      <NavDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export { MainNav, MobileNav };
