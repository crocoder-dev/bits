import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: ${props => `${props.titleFontSize}px`};
  color: ${props => props.titleColor};
`;

const Neon = styled(StyledTitle)`
  text-shadow: ${props => `0 0 calc(${props.titleFontSize}px / 25.6) #FFF, 0 0 calc(${props.titleFontSize}px / 12.8) #FFF, 0 0 calc(${props.titleFontSize}px / 8.53) #FFF, 0 0 calc(${props.titleFontSize}px / 6.4) #49ff18, 0 0 calc(${props.titleFontSize}px / 4.27) #49FF18, 0 0 calc(${props.titleFontSize}px / 3.2) #49FF18, 0 0 calc(${props.titleFontSize}px / 2.33) #49FF18, 0 0 calc(${props.titleFontSize}px / 1.7) #49ff18`};
`;

const Flaming = styled(StyledTitle)`
  text-shadow: ${props => `0 calc(-${props.titleFontSize}px / 64) calc(${props.titleFontSize}px / 16) #FFF, 0 calc(-${props.titleFontSize}px / 32) calc(${props.titleFontSize}px / 6.4) #ff0, 0 calc(-${props.titleFontSize}px / 6.4) calc(${props.titleFontSize}px / 3.2) #ff8000, 0 calc(-${props.titleFontSize}px / 3.6) calc(${props.titleFontSize}px / 1.6) #F00`};
`;

const Glowing = styled(StyledTitle)`
  text-shadow: ${props => `0 0 calc(${props.titleFontSize}px / 9.6) ${props.titleColor}`};
`;

const Title = ({ title, titleFontSize, titleColor, titleStyle='default' }) => {
  const TitleEl = titleStyles[titleStyle].element;
  return (
    <TitleEl titleFontSize={titleFontSize} titleColor={titleColor}>
      {title}
    </TitleEl>
  )
};

export default Title;


export const titleStyles = {
  default: {
    label: 'Default',
    element: StyledTitle,
  },
  neon: {
    label: 'Neon',
    element: Neon,
  },
  flaming: {
    label: 'Flaming',
    element: Flaming,
  },
  glowing: {
    label: 'Glowing',
    element: Glowing,
  }
};