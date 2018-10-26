import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  :active {
    transform: translateY(1px);
  }
  :focus {
    outline: 0;
  }
  width: 80px;
  font-family: inherit;
  font-weight: 600;
  font-size: 12px;
  margin: 7px 8px;
  border-radius: 8px;
  color: white;
  background-color: #57a0d3;
  padding: 9px;
`;

export default function Button({ onClick, text }) {
  return <StyledButton {...{ onClick }}>{text}</StyledButton>;
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
};
