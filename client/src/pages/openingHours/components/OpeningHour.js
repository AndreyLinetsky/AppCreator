import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import SelectField from '../../../components/fields/SelectField';
import {
  getFromSelectOptions,
  getToSelectOptions
} from '../../../utils/openingHours';
import { HOUR_OPTIONS, DAY_OPTIONS } from '../../../consts/openingHours';

const StyledContainer = styled.li`
  display: flex;
  flex-direction: row;
`;

export default function OpeningHour({ openingHour, updateOpeningHour }) {
  const { id, fromHour, toHour, fromDay, toDay } = openingHour;
  const handleChange = (fieldName, selectedOption) => {
    updateOpeningHour({ id, fieldName, fieldValue: selectedOption });
  };

  const fromDayProps = {
    handleChange,
    value: fromDay,
    options: getFromSelectOptions(DAY_OPTIONS, toDay),
    name: 'fromDay'
  };
  const toDayProps = {
    handleChange,
    value: toDay,
    options: getToSelectOptions(DAY_OPTIONS, fromDay),
    name: 'toDay'
  };
  const fromHourProps = {
    handleChange,
    value: fromHour,
    options: getFromSelectOptions(HOUR_OPTIONS, toHour),
    name: 'fromHour'
  };
  const toHourProps = {
    handleChange,
    value: toHour,
    options: getToSelectOptions(HOUR_OPTIONS, fromHour),
    name: 'toHour'
  };
  return (
    <StyledContainer>
      <SelectField {...fromDayProps} />
      <SelectField {...toDayProps} />
      <SelectField {...fromHourProps} />
      <SelectField {...toHourProps} />
    </StyledContainer>
  );
}

OpeningHour.propTypes = {
  openingHour: PropTypes.object,
  updateOpeningHour: PropTypes.func
};
