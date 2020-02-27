import React from 'react';

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

  
  return (
    <>
      <label for="logo">Logo:</label>
      <input id="logo" type="file" onChange={getImage} />
    </>
  )
}

export default LogoInput;