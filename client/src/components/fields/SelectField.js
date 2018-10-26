import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { fieldStyle } from '../../styles/commonStyles';
import FieldWrapper from './FieldWrapper';
import Select  from 'react-select';

const StyledSelect = styled(Select)`
  ${fieldStyle}
`

export default function SelectField({ value, label, handleChange, name, options }) {
    const selectProps = {
      name,
      onChange: (selectedOption) => {
        handleChange(name, selectedOption)
      },
      value,
      options
    };
    return (
      <FieldWrapper {...{label}}>
        <StyledSelect {...selectProps} />
      </FieldWrapper>
    );
  }
  
  SelectField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    options: PropTypes.array
  };
  
