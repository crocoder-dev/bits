import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import styled, { css } from 'styled-components';

const Swatch = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1);
  display: inline-block;
  cursor: pointer;
`;

const Color = styled.div`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  ${props => css`
    background-color: ${props.color};
  `}
`;

const Popover = styled.div`
  position: absolute;
  z-index: 2;
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const ColorPicker = ({ color, setColor, colors }) => {
  
  const [displayColorPicker, setDisplayColorPicker] = useState(null);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (c) => {
    setColor(c.hex);
  };


  return (
    <div>
      <Swatch onClick={ handleClick }>
        <Color color={color} />
      </Swatch>
      { displayColorPicker ? <Popover>
        <Cover onClick={ handleClose }/>
        <SketchPicker presetColors={colors} color={color} onChange={ handleChange } />
      </Popover> : null }

    </div>
  )
}

export default ColorPicker;