import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Button from '../../components/button/Button';
import OpeningHoursMockPanel from './components/OpeningHoursMockPanel';
import OpeningHour from './components/OpeningHour';
import { getOpeningHoursSelector
} from './openingHoursSelector';
import { StyledMain } from '../../styles/commonStyles';
import MenuAndAppCreatorContainer from '../../components/MenuAndAppCreatorContainer';
import AppMockContainer from '../../components/AppMockContainer';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

function mapStateToProps(state) {
  return {
    openingHours: getOpeningHoursSelector(state)
  };
}

function OpeningHours({ openingHours, updateOpeningHour, addOpeningHour }) {  
  const buttonProps = {
    text: 'Add',
    onClick: addOpeningHour
  };

  const mockPanelProps = {
    openingHours
  };

  return (
    <StyledMain>
      <MenuAndAppCreatorContainer>
        <StyledContainer>
          {openingHours.map((openingHour, key) => 
            <OpeningHour {...{key, openingHour, updateOpeningHour}}/>)}
          <Button {...buttonProps} />
          </StyledContainer>
      </MenuAndAppCreatorContainer>
      <AppMockContainer>
        <OpeningHoursMockPanel {...mockPanelProps} />
      </AppMockContainer>
    </StyledMain>
  );
}

export default connect(
  mapStateToProps,
  actions
)(OpeningHours);
