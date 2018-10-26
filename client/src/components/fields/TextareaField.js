import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { fieldStyle } from '../../styles/commonStyles'
import FieldWrapper from './FieldWrapper'

const StyledTextarea = styled.textarea`
  ${fieldStyle};
  resize: none;
`

export default function TextareaField({ value, label, onChange, name }) {
    const textareaProps = {
      name,
      onChange,
      value,
      rows: 7
    };
    return (
      <FieldWrapper {...{label}}>
        <StyledTextarea {...textareaProps} />
      </FieldWrapper>
    );
  }
  
  TextareaField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };
  
