import React from 'react';

const SignatureInput = ({ signature, setSignature }) => {
  const updateSignature = (event) => {
    setSignature(event.target.value);
  }

  return (
    <input type="text" value={signature} onChange={updateSignature} />
  )
}

export default SignatureInput;