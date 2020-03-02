import React from 'react';
import InputField from '../Input';

const SignatureInput = ({ signature, setSignature }) => {
  const updateSignature = (event) => {
    setSignature(event.target.value);
  };

  return (
    <InputField label="Signature text" placeholder="Enter your twitter handle, website, etc." id="signature" value={signature} onChange={updateSignature} inputType="text" />
  );
};

export default SignatureInput;
