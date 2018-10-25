import styled from 'styled-components';
import NavigationMenu from './NavigationMenu';
import PropTypes from 'prop-types';
import React from 'react';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledAppCreatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
`

export default function MenuAndAppCreatorContainer({ children }) {
  console.log(children)
  return (
    <StyledContainer>
      <NavigationMenu />
      <StyledAppCreatorContainer>
      {children}
      </StyledAppCreatorContainer>
    </StyledContainer>
  );
}

MenuAndAppCreatorContainer.propTypes = {
  children: PropTypes.node
};
