import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { Link } from 'react-router-dom';

export const SidebarListTitle = styled.span`
  display: block;
  margin: 0 0 10px 15px;
  font-weight: ${props => props.theme.fontWeightMedium};
`;

export const SidebarListItem = styled(Link)`
  display: block;
  padding: 6px 25px;
  font-size: 13px;

  &:hover {
    background-color: ${props => props.theme.grayLight};
  }
`;

export const SidebarList = styled.div`
  margin-bottom: 20px;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 240px;
  height: 100vh;
  padding: 20px 0;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 4px 16px ${transparentize(0.9, '#000')};
  transform: translateX(-260px);
  transition: transform 0.3s ease-out;

  ${props =>
    props.isOpen &&
    css`
      transform: none;
    `};
`;
