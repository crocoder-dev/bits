import React from 'react';
import styled from 'styled-components';
import InputField from '../Input';
import SelectField from '../Select';
import ColorPicker from '../ColorPicker';

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
max-width: 440px;
`;

const SignatureInput = ({
  signature,
  setSignature,
  signatureFontSize,
  signatureFontSizes,
  setSignatureFontSize,
  signatureColor,
  signatureColors,
  setSignatureColor,
}) => {
  const updateSignature = (event) => {
    setSignature(event.target.value);
  };
  const updateSignatureFontSize = (event) => {
    setSignatureFontSize(event.target.value);
  };

  return (
    <>
      <InputField label="Signature text" placeholder="Enter your twitter handle, website, etc." id="signature" value={signature} onChange={updateSignature} inputType="text" />
      <Wrapper>
        <SelectField id="signature-font" label="Signature font size" options={signatureFontSizes} value={signatureFontSize} onChange={updateSignatureFontSize} />
        <ColorPicker
          top
          label="Signature color"
          setColor={setSignatureColor}
          color={signatureColor}
          colors={signatureColors}
        />
      </Wrapper>
    </>
  );
};

export default SignatureInput;
