import React from 'react';
import Background from './Background';
import Bit from './Bit';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100vh;
  max-width: 50vw;
`;

const Output = ({
  background,
  title,
  signature,
  logo,
}) => {
  return (
    <Wrapper>
      <Background background={background}>
        <Bit
          background={background}
          title={title}
          signature={signature}
          logo={logo}
        />
      </Background>
    </Wrapper>
  )
};

export default Output;