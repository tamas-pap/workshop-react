import styled from 'styled-components';
import { transparentize } from 'polished';
import { Link } from 'react-router-dom';
import { BareButtonStyle } from '../../../core/components/styled';
import { Icon } from '../../../core/components';

export const NavigationBarTitle = styled.button`
  ${BareButtonStyle};
  padding: 0 10px;
  font-weight: ${props => props.theme.fontWeightMedium};
  font-size: 12px;

  &:active {
    background-color: ${props => props.theme.grayLight};
  }
`;

export const NavigationBarLinkIcon = styled(Icon)`
  width: 12px;
  height: 12px;
`;

export const NavigationBarLink = styled(Link)`
  display: inline-block;
  width: 28px;
  height: 28px;
  padding: 7px 0;
  background-color: #fff;
  text-align: center;

  &:active {
    background-color: ${props => props.theme.grayLight};
  }
`;

export const NavigationBarLinks = styled.div``;

export const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28px;
  background-color: #fff;
  border-top: 1px solid ${transparentize(0.9, '#000')};
`;
