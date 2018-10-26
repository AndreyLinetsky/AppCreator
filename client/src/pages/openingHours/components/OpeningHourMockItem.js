import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { convertHourToDisplayString } from '../../../utils/openingHours'

const StyledItem = styled.div`
  
`

export default function OpeningHourMockItem({ openingHour }) {
    const { fromHour, toHour, fromDay, toDay} = openingHour
    const displayString = `${fromDay} - ${toDay} | ${convertHourToDisplayString(fromHour)} : ${convertHourToDisplayString(toHour)}`
    return (
      <StyledItem>{displayString}</StyledItem>
    );
  }
  
  OpeningHourMockItem.propTypes = {
    openingHour: PropTypes.object
  };
  
