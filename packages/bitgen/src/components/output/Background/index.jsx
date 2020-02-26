import React from 'react';
import styled from 'styled-components';

const BG = styled.div`
  height: 100vh;
  width: 100%;
  background-color: blue;
`;

const Background = ({ children }) => {
  return (
    <BG>
      { children }
    </BG>
  )
};

export default Background;