import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { fieldStyle } from '../../styles/commonStyles';
import FieldWrapper from './FieldWrapper';

const StyledInputFile = styled.input`
  ${fieldStyle};
  background-color: initial;
  padding: 0;
  margin-top: 5px;
  :focus {
    outline: 0;
  }
`;

export default function InputFileField({ accept, label, onChange, name }) {
  const inputFileProps = {
    name,
    onChange,
    accept,
    type: 'file'
  };
  return (
    <FieldWrapper {...{ label }}>
      <StyledInputFile {...inputFileProps} />
    </FieldWrapper>
  );
}

InputFileField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  accept: PropTypes.string,
  onChange: PropTypes.func
};
