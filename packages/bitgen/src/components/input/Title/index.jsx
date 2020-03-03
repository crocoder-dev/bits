import React from 'react';
import InputField from '../Input';
import SelectField from '../Select';
import ColorPicker from '../ColorPicker';

const TitleInput = ({
  title,
  setTitle,
  titleFontSize,
  titleFontSizes,
  setTitleFontSize,
  titleColor,
  titleColors,
  setTitleColor,
  titleStyle,
  setTitleStyle,
  titleStyles,
}) => {
  const updateTitle = (event) => {
    setTitle(event.target.value);
  };

  const updateFontSize = (event) => {
    setTitleFontSize(event.target.value);
  };

  const updateTitleStyle = (event) => {
    setTitleStyle(event.target.value);
  };
  return (
    <>
      <InputField label="Title text" placeholder="Enter something catchy" id="title" value={title} onChange={updateTitle} inputType="text" />
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '440px' }}>
        <SelectField id="test" label="Title font size" options={titleFontSizes} value={titleFontSize} onChange={updateFontSize} />
        <ColorPicker
          label="Title color"
          setColor={setTitleColor}
          color={titleColor}
          colors={titleColors}
        />
        <SelectField id="test1" label="Title style" options={titleStyles} value={titleStyle} onChange={updateTitleStyle} />
      </div>
    </>
  );
};

export default TitleInput;
