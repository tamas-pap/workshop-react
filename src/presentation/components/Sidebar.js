import React from 'react';
import PropTypes from 'prop-types';
import {
  Sidebar as SidebarContainer,
  SidebarList,
  SidebarListTitle,
  SidebarListItem,
} from './styled';

const Sidebar = ({ isOpen, close }) => (
  <SidebarContainer isOpen={isOpen} onMouseLeave={close}>
    <SidebarList>
      <SidebarListTitle>Getting started with React</SidebarListTitle>
      <SidebarListItem to="#">Introducing JSX</SidebarListItem>
      <SidebarListItem to="#">Introducing JSX</SidebarListItem>
      <SidebarListItem to="#">Introducing JSX</SidebarListItem>
      <SidebarListItem to="#">Introducing JSX</SidebarListItem>
      <SidebarListItem to="#">Introducing JSX</SidebarListItem>
      <SidebarListItem to="#">Introducing JSX</SidebarListItem>
      <SidebarListItem to="#">Introducing JSX</SidebarListItem>
      <SidebarListItem to="#">Introducing JSX</SidebarListItem>
      <SidebarListItem to="#">Introducing JSX</SidebarListItem>
    </SidebarList>
  </SidebarContainer>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default Sidebar;
