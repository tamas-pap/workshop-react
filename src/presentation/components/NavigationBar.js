import React from 'react';
import PropTypes from 'prop-types';
import {
  NavigationBar as NavigationBarContainer,
  NavigationBarTitle,
  NavigationBarLinks,
  NavigationBarLink,
  NavigationBarLinkIcon,
} from './styled';

const NavigationBar = ({ title, previous, next, openSidebar }) => (
  <NavigationBarContainer>
    <NavigationBarTitle onClick={openSidebar}>{title}</NavigationBarTitle>
    <NavigationBarLinks>
      <NavigationBarLink to={previous}>
        <NavigationBarLinkIcon icon="previous" />
      </NavigationBarLink>

      <NavigationBarLink to={next}>
        <NavigationBarLinkIcon icon="next" />
      </NavigationBarLink>
    </NavigationBarLinks>
  </NavigationBarContainer>
);

NavigationBar.propTypes = {
  title: PropTypes.string,
  previous: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  openSidebar: PropTypes.func.isRequired,
};

NavigationBar.defaultProps = {
  title: undefined,
};

export default NavigationBar;
