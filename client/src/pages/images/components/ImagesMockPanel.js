import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { DEFAULT_COLOR } from '../../../consts/appSettings';

const StyledContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: flex;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border: 2px solid
    ${({ imageBorderColor }) => imageBorderColor || DEFAULT_COLOR};
`;

export default function ImagesMockPanel({ imageUrls, imageBorderColor }) {
  return (
    <StyledContainer>
      {imageUrls.map((url, key) => (
        <StyledListItem {...{ key }}>
          <StyledImage {...{ src: url, imageBorderColor }} />
        </StyledListItem>
      ))}
    </StyledContainer>
  );
}

ImagesMockPanel.propTypes = {
  imageUrls: PropTypes.array,
  imageBorderColor: PropTypes.string
};
