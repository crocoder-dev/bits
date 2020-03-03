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
  width: 43px;
  height: 22px;
  border-radius: 2px;
  ${(props) => css`
    background-color: ${props.color};
  `}
  border: 1px #000 solid;
`;

const Popover = styled.div`
  position: absolute;
  z-index: 2;
`;
// bottom: 100%;
const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const StyledLabel = styled.label`
font-size: 14px;
line-height: 1.5;
color: #24292e;
background-color: #fff;
font-weight: 600;
`;

const StyledDT = styled.dt`
  margin: 0 0 6px;
  box-sizing: border-box;
`;

const StyledDL = styled.dl`
  margin: 15px 0;
  box-sizing: border-box;
`;

const StyledDD = styled.dd`
  position: relative;
`;

const ColorPicker = ({
  label, color, setColor, colors,
}) => {
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
    <StyledDL>
      <StyledDT>
        <StyledLabel>{label}</StyledLabel>
      </StyledDT>
      <StyledDD>
        <Swatch onClick={handleClick}>
          <Color color={color} />
        </Swatch>
        {displayColorPicker ? (
          <Popover>
            <Cover onClick={handleClose} />
            <SketchPicker presetColors={colors} color={color} onChange={handleChange} />
          </Popover>
        ) : null}
      </StyledDD>
    </StyledDL>
  );
};

export default ColorPicker;
