import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { getOpeningHourDisplayString } from '../../../utils/openingHours';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

export default function OpeningHourMockItem({ openingHour }) {
  const { dayRange, hourRange } = getOpeningHourDisplayString(openingHour);
  return (
    <StyledContainer>
      <div>{dayRange}</div>
      <div>{hourRange}</div>
    </StyledContainer>
  );
}

OpeningHourMockItem.propTypes = {
  openingHour: PropTypes.object
};
