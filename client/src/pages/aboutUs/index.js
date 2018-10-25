import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import FieldWithLabel from './components/FieldWithLabel';
import AboutUsMockPanel from './components/AboutUsMockPanel';
import {
  getAppColorsSelector,
  getDescriptionSelector,
  getNameSelector,
  getUrlSelector
} from './aboutUsSelector';
import { StyledMain } from '../../styles/commonStyles';
import MenuAndAppCreatorContainer from '../../components/MenuAndAppCreatorContainer';
import AppMockContainer from '../../components/AppMockContainer';

function mapStateToProps(state) {
  return {
    name: getNameSelector(state),
    description: getDescriptionSelector(state),
    url: getUrlSelector(state),
    appColors: getAppColorsSelector(state)
  };
}

function AboutUs({ updateField, name, description, url, appColors }) {
  const onChange = event => {
    const {
      target: { name: fieldName, value: fieldValue }
    } = event;
    updateField({ fieldName, fieldValue });
  };

  const nameFieldProps = {
    label: 'Business Name',
    name: 'name',
    value: name,
    onChange
  };
  const descriptionFieldProps = {
    label: 'Description',
    name: 'Description',
    value: description,
    onChange
  };
  const urlFieldProps = {
    label: 'Website Url',
    name: 'url',
    value: url,
    onChange
  };

  const mockPanelProps = {
    name,
    description,
    url,
    appColors
  };

  return (
    <StyledMain>
      <MenuAndAppCreatorContainer>
          <FieldWithLabel {...nameFieldProps} />
          <FieldWithLabel {...descriptionFieldProps} />
          <FieldWithLabel {...urlFieldProps} />
      </MenuAndAppCreatorContainer>
      <AppMockContainer>
        <AboutUsMockPanel {...mockPanelProps} />
      </AppMockContainer>
    </StyledMain>
  );
}

export default connect(
  mapStateToProps,
  actions
)(AboutUs);
