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
  padding: 10px 20px;
  margin-top: 10px;
`

export default function MenuAndAppCreatorContainer({ children }) {
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
