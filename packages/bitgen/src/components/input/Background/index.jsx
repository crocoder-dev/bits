import React from 'react';
import ColorPicker from '../ColorPicker';

const BackgroundInput = ({ background, setBackground }) => (
  <ColorPicker
    label="Background color"
    setColor={setBackground}
    color={background}
    colors={['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF']}
  />
);

export default BackgroundInput;
