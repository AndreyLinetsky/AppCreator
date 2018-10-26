import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 10px;
  text-align: center;
`;

export default function AppSettingsMockPanel({ appSettingsMessage }) {
  return (
    <StyledContainer>
      <div>{appSettingsMessage}</div>
    </StyledContainer>
  );
}

AppSettingsMockPanel.propTypes = {
  appSettingsMessage: PropTypes.string
};
