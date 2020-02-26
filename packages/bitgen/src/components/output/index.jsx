import React from 'react';
import Background from './Background';
import Bit from './Bit';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100vh;
  max-width: 50vw;
`;

const Output = () => {
  return (
    <Wrapper>
      <Background>
        <Bit />
      </Background>
    </Wrapper>
  )
};

export default Output;