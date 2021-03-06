import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const StyledContainer = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: column;
`;

export default function FieldWrapper({ label, children }) {
  return (
    <StyledContainer>
      {label && <label>{label}</label>}
      {children}
    </StyledContainer>
  );
}

FieldWrapper.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node
};
