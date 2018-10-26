import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 5px;
`

const StyledName = styled.h4`
  margin: 0;
  text-align: center;
  font-weight: 400;
`

const StyledLink = styled.a`
  
`

export default function AboutUsMockPanel({ name, description, url, appColors }) {    
    return (
      <StyledContainer>
        <StyledName>{name}</StyledName>
        <p>{description}</p>
        Join us on:
        <StyledLink {...{href: url}}>{url}</StyledLink>
      </StyledContainer>
    );
  }
  
  AboutUsMockPanel.propTypes = {
    description: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    appColors: PropTypes.object
  };
  