import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { fieldStyle } from '../../styles/commonStyles';
import FieldWrapper from './FieldWrapper';

const StyledInput = styled.input`
  ${fieldStyle};
`;

export default function InputField({ value, label, onChange, name }) {
  const inputProps = {
    name,
    onChange,
    value
  };
  return (
    <FieldWrapper {...{ label }}>
      <StyledInput {...inputProps} />
    </FieldWrapper>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
