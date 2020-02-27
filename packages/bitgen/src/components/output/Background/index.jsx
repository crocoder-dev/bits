import React from 'react';
import styled, { css } from 'styled-components';

const BG = styled.div`
  height: 100vh;
  width: 100%;
  ${props => css`
    background-color: ${props.background || 'red'};
  `}
`;

const Background = ({ background, children }) => {
  return (
    <BG background={background}>
      {children}
    </BG>
  )
};

export default Background;