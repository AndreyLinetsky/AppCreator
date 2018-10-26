import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import InputFileField from '../../components/fields/InputFileField';
import AppSettingsMockPanel from './components/AppSettingsMockPanel';
import {
  getAppColorsSelector,
  getAppSettingsMessageSelector
} from './appSettingsSelector';
import { StyledMain } from '../../styles/commonStyles';
import MenuAndAppCreatorContainer from '../../containers/MenuAndAppCreatorContainer';
import AppMockContainer from '../../containers/AppMockContainer';

function mapStateToProps(state) {
  return {
    appColors: getAppColorsSelector(state),
    appSettingsMessage: getAppSettingsMessageSelector(state)
  };
}

function Images({ updateAppColorsFromImage, appColors, appSettingsMessage }) {
  const inputFileProps = {
    name: 'uploadImage',
    onChange: (event) => {
      const {
        target: { files }
      } = event;
      updateAppColorsFromImage({ fileBlob: files[0] });
    },
    accept: 'image/*',
    label: 'Set app colors from image'
  };

  const mockPanelProps = {
    appSettingsMessage
  };

  return (
    <StyledMain>
      <MenuAndAppCreatorContainer>
        <InputFileField {...inputFileProps} />
      </MenuAndAppCreatorContainer>
      <AppMockContainer {...{ appColors }}>
        <AppSettingsMockPanel {...mockPanelProps} />
      </AppMockContainer>
    </StyledMain>
  );
}

export default connect(
  mapStateToProps,
  actions
)(Images);
