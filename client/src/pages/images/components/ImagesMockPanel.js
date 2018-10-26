import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const StyledContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`

const StyledListItem = styled.li`
  display: flex;
`
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border: 2px solid blue;
`;

export default function ImagesMockPanel({ imageUrls }) {    
    return (
      <StyledContainer>
        {imageUrls.map((url, key) => 
<StyledListItem {...{key}}><StyledImage {...{key, src: url}}/> </StyledListItem>
        )}
      </StyledContainer>
    );
  }
  
  ImagesMockPanel.propTypes = {
    imageUrls: PropTypes.array
  };
  