import React from 'react';
import styled from 'styled-components';

const StyledSignature = styled.div`
  color: ${(props) => props.signatureColor};
  font-size: ${(props) => props.signatureFontSize}px;
  max-width: 80%;
  overflow: hidden;
`;

const Signature = ({
  signature,
  signatureColor,
  signatureFontSize,
}) => (
  <StyledSignature signatureColor={signatureColor} signatureFontSize={signatureFontSize}>
    {signature}
  </StyledSignature>
);

export default Signature;
