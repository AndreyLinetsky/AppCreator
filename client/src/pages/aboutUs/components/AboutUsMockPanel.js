import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 10px;
`;

const StyledHeadline = styled.h4`
  margin: 0;
  text-align: center;
  font-weight: 400;
  min-height: 20px;
`;

export default function AboutUsMockPanel({ name, description, url }) {
  return (
    <StyledContainer>
      <StyledHeadline>{name}</StyledHeadline>
      <p>{description}</p>
      {url && (
        <>
          <div>Join us on:</div>
          <a {...{ href: url }}>{url}</a>
        </>
      )}
    </StyledContainer>
  );
}

AboutUsMockPanel.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string
};
