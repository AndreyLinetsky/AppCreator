import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const StyledButton = styled.button`
cursor: pointer;
border: none;
:active {
  transform: translateY(1px);
}
:focus {
    outline:0;
}
  width: 80px;
  font-family: inherit;
  font-weight: 600;
  font-size: 12px;
  align-self: flex-end;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 8px;
  color: white;
  background-color: #57a0d3;
  padding: 9px;
`;

export default function Button({ onClick, text, isDisabled = false }){
  const buttonProps = {
    onClick,
    isDisabled
  }
    return <StyledButton {...buttonProps}>{text}</StyledButton>
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
  };