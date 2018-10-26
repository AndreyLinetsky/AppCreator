import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import SelectField from '../../../components/fields/SelectField'
import { getFromSelectOptions, getToSelectOptions } from '../../../utils/openingHours'
import { HOUR_OPTIONS, DAY_OPTIONS} from '../../../consts/openingHours'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export default function OpeningHour({ openingHour, updateOpeningHour }) {
    const { id, fromHour, toHour, fromDay, toDay} = openingHour
    const handleChange =  (fieldName, selectedOption) => {
const {value: fieldValue} = selectedOption
updateOpeningHour({id, fieldName, fieldValue})
    }
    const commonFromProps = {
        handleChange,
        label: 'From'
    }
    const commonToProps = {
        handleChange,
        label: 'To'
    }
    const fromDayProps = {
        ...commonFromProps,
        value: fromDay,
        options: getFromSelectOptions(DAY_OPTIONS, toDay),
        name: 'fromDay'
    }
    const toDayProps = {
        ...commonToProps,
        value: toDay,
        options: getToSelectOptions(DAY_OPTIONS, fromDay),
        name: 'toDay'
    }
    const fromHourProps = {
        ...commonFromProps,
        value: fromHour,
        options: getFromSelectOptions(HOUR_OPTIONS, toHour),
        name: 'fromHour',
    }
    const toHourProps = {
        ...commonToProps,
        value: toHour,
        options: getToSelectOptions(HOUR_OPTIONS, fromHour),
        name: 'toHour'
    }
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
  
