import React from 'react';
import InputField from '../Input';
import SelectField from '../Select';

const LogoInput = ({
  setLogo,
  logoWidth,
  logoWidths,
  setLogoWidth,
}) => {
  const getImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setLogo(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const linkImage = async (event) => {
    const response = await fetch(event.target.value);
    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.addEventListener('load', () => {
      setLogo(reader.result);
    }, false);
  };
  const updateLogoWidth = (event) => {
    setLogoWidth(event.target.value);
  };


  return (
    <>
      <InputField label="Upload a logo" id="logo" inputType="file" onChange={getImage} />
      <InputField label="Link it" placeholder="Paste an url here" id="logo" inputType="text" onChange={linkImage} />
      <SelectField id="logo-width" label="Logo width" options={logoWidths} value={logoWidth} onChange={updateLogoWidth} />
    </>
  );
};

export default LogoInput;
