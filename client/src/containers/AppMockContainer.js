import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const StyledContainer = styled.div`
  position: relative;
  width: 220px;
  height: 400px;
  margin: 0 auto;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  ::before {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: grey;
    border-radius: 10px;
  }
  ::after {
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 50%;
    bottom: -65px;
    transform: translate(-50%, -50%);
    border: 1px solid grey;
    border-radius: 50%;
  }
`;

const StyledContent = styled.div`
  height: 100%;
  overflow-y: auto;
  font-size: 12px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default function AppMockContainer({ children, appColors }) {
  return (
    <StyledContainer>
      <StyledContent {...appColors}>{children}</StyledContent>
    </StyledContainer>
  );
}

AppMockContainer.propTypes = {
  children: PropTypes.node,
  appColors: PropTypes.object
};
