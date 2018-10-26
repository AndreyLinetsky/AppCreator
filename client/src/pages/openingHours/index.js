import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Button from '../../components/button/Button';
import OpeningHoursMockPanel from './components/OpeningHoursMockPanel';
import OpeningHour from './components/OpeningHour';
import {
  getOpeningHoursSelector,
  getAppColorsSelector
} from './openingHoursSelector';
import { StyledMain } from '../../styles/commonStyles';
import MenuAndAppCreatorContainer from '../../containers/MenuAndAppCreatorContainer';
import AppMockContainer from '../../containers/AppMockContainer';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

function mapStateToProps(state) {
  return {
    openingHours: getOpeningHoursSelector(state),
    appColors: getAppColorsSelector(state)
  };
}

function OpeningHours({
  openingHours,
  updateOpeningHour,
  addOpeningHour,
  appColors
}) {
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
          <StyledList>
            {openingHours.map((openingHour, key) => (
              <OpeningHour {...{ key, openingHour, updateOpeningHour }} />
            ))}
          </StyledList>
          <Button {...buttonProps} />
        </StyledContainer>
      </MenuAndAppCreatorContainer>
      <AppMockContainer {...{ appColors }}>
        <OpeningHoursMockPanel {...mockPanelProps} />
      </AppMockContainer>
    </StyledMain>
  );
}

export default connect(
  mapStateToProps,
  actions
)(OpeningHours);
