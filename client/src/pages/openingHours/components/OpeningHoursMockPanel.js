import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import OpeningHourMockItem from './OpeningHourMockItem'

const StyledContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`

const StyledListItem = styled.li`
  display: flex;
`
export default function OpeningHoursMockPanel({ openingHours }) {    
    return (
      <StyledContainer>
        {openingHours.map((openingHour, key) => 
<StyledListItem {...{key}}>
<OpeningHourMockItem {...{openingHour}}> </OpeningHourMockItem>
 </StyledListItem>
        )}
      </StyledContainer>
    );
  }
  
  OpeningHoursMockPanel.propTypes = {
    openingHours: PropTypes.array
  };
  