import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import InputField from '../../components/fields/InputField';
import Button from '../../components/button/Button';
import ImagesMockPanel from './components/ImagesMockPanel';
import {
  getImageUrlsSelector,
  getImagesDisplayErrorMessageSelector,
  getImageSearchKeywordSelector,
  getAppColorsSelector
} from './imagesSelector';
import { StyledMain, StyledErrorField } from '../../styles/commonStyles';
import MenuAndAppCreatorContainer from '../../containers/MenuAndAppCreatorContainer';
import AppMockContainer from '../../containers/AppMockContainer';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function mapStateToProps(state) {
  return {
    imageUrls: getImageUrlsSelector(state),
    imagesDisplayError: getImagesDisplayErrorMessageSelector(state),
    imageSearchKeyword: getImageSearchKeywordSelector(state),
    appColors: getAppColorsSelector(state)
  };
}

function Images({
  imageUrls,
  imagesDisplayError,
  imageSearchKeyword,
  displayImages,
  updateImageSearchKeyword,
  appColors
}) {
  const inputProps = {
    name: 'imageSearchKeyword',
    value: imageSearchKeyword,
    onChange: (event) => {
      const {
        target: { value }
      } = event;
      updateImageSearchKeyword({ imageSearchKeyword: value });
    }
  };
  const buttonProps = {
    text: 'Search',
    onClick: () => {
      displayImages({ imageSearchKeyword });
    }
  };

  const { color: imageBorderColor } = appColors;
  const mockPanelProps = {
    imageUrls,
    imageBorderColor
  };

  return (
    <StyledMain>
      <MenuAndAppCreatorContainer>
        {imagesDisplayError && (
          <StyledErrorField>{imagesDisplayError}</StyledErrorField>
        )}
        <StyledContainer>
          <InputField {...inputProps} />
          <Button {...buttonProps} />
        </StyledContainer>
      </MenuAndAppCreatorContainer>
      <AppMockContainer {...{ appColors }}>
        <ImagesMockPanel {...mockPanelProps} />
      </AppMockContainer>
    </StyledMain>
  );
}

export default connect(
  mapStateToProps,
  actions
)(Images);
