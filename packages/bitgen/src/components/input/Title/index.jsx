import React from 'react';
import { InputField } from '../Input';
import { SelectField } from '../Select';
import ColorPicker from '../ColorPicker';

const TitleInput = ({ title, setTitle, titleFontSize, titleFontSizes, setTitleFontSize }) => {
  const updateTitle = (event) => {
    setTitle(event.target.value);
  }

  const updateFontSize = (event) => {
    setTitleFontSize(event.target.value);
  }

  
  return (
    <>
      <InputField label="Title text" placeholder="Enter something catchy" id="title" value={title} onChange={updateTitle} inputType="text" />
      <SelectField id="test" label="Title font size" options={titleFontSizes} value={titleFontSize} onChange={updateFontSize} />
      <ColorPicker
        label={'Title color'}
        setColor={console.log}
        color={'#FF6900'}
        colors={['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF']}
      />
    </>
  )
}

export default TitleInput;