import React from 'react';
import { InputField } from '../Input';

const LogoInput = ({ logo, setLogo }) => {
  const getImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setLogo(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  const linkImage = (event) => {
    setLogo(event.target.value);
  }


  return (
    <>
      <InputField label="Upload a logo" id="logo" inputType="file" onChange={getImage} />
      <InputField label="Link it" placeholder="Paste an url here" id="logo" inputType="text" onChange={linkImage} />
    </>
  )
}

export default LogoInput;