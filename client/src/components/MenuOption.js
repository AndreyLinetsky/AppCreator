import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const maybeSelected = (isSelected) =>
   isSelected ? 'border: 1px solid black' : '' 
const StyledOption = styled.li`
  margin: 10px 0;
  
  
  border-radius: 3px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function MenuOption({ isSelected, to, text, color }) {
  const optionProps = {
    color,
    isSelected
  };
  return (
    <StyledOption {...optionProps}>
      <StyledLink {...{ to }}>{text}</StyledLink>
    </StyledOption>
  );
}

MenuOption.propTypes = {
  isSelected: PropTypes.bool,
  to: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string
};
