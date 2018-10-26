import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { fieldStyle } from '../../styles/commonStyles';
import Select from 'react-select';

const StyledSelect = styled(Select)`
  ${fieldStyle};
  background-color: initial;
  width: 100px;
`;

const styles = {
  dropdownIndicator: baseStyle => ({ ...baseStyle, display: 'none' }),
  indicatorSeparator: baseStyle => ({ ...baseStyle, display: 'none' }),
  control: baseStyle => ({ ...baseStyle, cursor: 'pointer' }),
  option: baseStyle => ({ ...baseStyle, cursor: 'pointer' })
};

export default function SelectField({
  label,
  handleChange,
  name,
  ...selectProps
}) {
  const composedSelectProps = {
    ...selectProps,
    name,
    onChange: (selectedOption) => {
      handleChange(name, selectedOption);
    },
    styles
  };
  return <StyledSelect {...composedSelectProps} />;
}

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.object,
  handleChange: PropTypes.func,
  options: PropTypes.array
};
