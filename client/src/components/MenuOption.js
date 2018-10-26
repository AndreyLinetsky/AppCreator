import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledListItem = styled.li`
  margin: 0 20px;
`
const maybeSelected = ({isSelected}) =>
   isSelected ? 'border: 2px solid black' : '' 
const StyledOption = styled.div`
  margin: 10px 0;
  height: 70px;
  width: 80px;
  border-radius: 10px;
  text-align: center; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({color}) => color};
  border: none;  
  ${maybeSelected};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  :link,
  :visited,
  :hover {
    color: initial;
  }
`;

export default function MenuOption({ isSelected, to, text, color }) {
  const optionProps = {
    color,
    isSelected
  };
  return (
    <StyledListItem>
      <StyledLink {...{ to }}>
      <StyledOption  {...optionProps}>
      {text}
      </StyledOption>
      </StyledLink>
    </StyledListItem>
  );
}

MenuOption.propTypes = {
  isSelected: PropTypes.bool,
  to: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string
};
