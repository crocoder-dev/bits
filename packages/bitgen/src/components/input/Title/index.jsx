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
      <Wrapper>
        <SelectField id="test" label="Title font size" options={titleFontSizes} value={titleFontSize} onChange={updateFontSize} />
        <ColorPicker
          label="Title color"
          setColor={setTitleColor}
          color={titleColor}
          colors={titleColors}
        />
        <SelectField id="test1" label="Title style" options={titleStyles} value={titleStyle} onChange={updateTitleStyle} />
      </Wrapper>
    </>
  );
};

export default TitleInput;
