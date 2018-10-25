import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { MENU_OPTIONS, ROUTE_PATHS } from '../consts/routes';
import MenuOption from './MenuOption'

const { ABOUT_US, DEFAULT } = ROUTE_PATHS;

const StyledContainer = styled.nav`
  display: flex;
  flex-direction: row;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

function NavigationMenu({ location }) {
  const { pathname: activeRoutePath } = location;
  return (
    <StyledContainer>
        <StyledList>
      {MENU_OPTIONS.map((option, key) => {
        const isSelected =
          option.to === activeRoutePath ||
          (option.to === ABOUT_US && activeRoutePath === DEFAULT);
        return <MenuOption {...{ key, isSelected, ...option }} />;
      })}
      </StyledList>
    </StyledContainer>
  );
}

export default withRouter(NavigationMenu);
