import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const StyledInput = styled.input`
  padding: 7px 8px;
  margin: 5px 0px;
  font-family: inherit;
  font-size: 12px;
  border-width: 1px;
`;

const StyledLabel = styled.label`
  color: black;
`;

export default function FieldWithLabel({ value, label, onChange, name }) {
  const inputProps = {
    name,
    onChange,
    value
  };
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...inputProps} />
    </>
  );
}

FieldWithLabel.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
