import React from 'react';
import styled, { css } from 'styled-components';
import Logo from '../Logo';
import Title from '../Title';
import Snippet from '../Snippet';
import Signature from '../Signature';
import okaidia from './okaidia';
import defaultTheme from './default';

export const themeStyles = {
  default: {
    label: 'Default',
    css: defaultTheme,
  },
  okaidia: {
    label: 'Okaidia',
    css: okaidia,
  },
};

const BitContainer = styled.div`
  height: 1080px;
  width: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px #000 dashed;
  box-sizing: border-box;
  ${(props) => css`
    background-color: ${props.background || 'red'};
  `}
  ${(props) => themeStyles[props.theme].css}

  @media (min-width: 1920px) and (max-width: 2160px) {
    transform: translate(-5.55%, -5.55%) scale(0.888);
  }

  @media (min-width: 1600px) and (max-width: 1919px) {
    transform: translate(-13%, -13%) scale(0.74);
  }

  @media (min-width: 1440px) and (max-width: 1599px) {
    transform: translate(-17%, -17%) scale(0.66);
  }

  @media (min-width: 1366px) and (max-width: 1439px) {
    transform: translate(-19%, -19%) scale(0.62);
  }

  @media (min-width: 1200px) and (max-width: 1365px) {
    transform: translate(-22%, -22%) scale(0.56);
  }

  @media (orientation: landscape) and (min-width: 1024px) and (max-width: 1199px) {
    transform: translate(-26.5%, -26.5%) scale(0.47);
  }

  @media (orientation: landscape) and (min-width: 900px) and (max-width: 1023px) {
    transform: translate(-29.2%, -29.2%) scale(0.417);
  }

  @media (orientation: landscape) and (min-width: 1024px) and (max-width: 1199px) {
    transform: translate(-26.5%, -26.5%) scale(0.47);
  }

  @media (orientation: landscape) and (min-width: 900px) and (max-width: 1023px) {
    transform: translate(-29.2%, -29.2%) scale(0.417);
  }
`;

const Bit = ({
  title,
  signature,
  background,
  logo,
  snippet,
  language,
  captureRef,
  titleFontSize,
  titleColor,
  titleStyle,
  theme,
  snippetFontSize,
}) => (
  <BitContainer ref={captureRef} theme={theme} background={background}>
    <Logo logo={logo} />
    <Title
      title={title}
      titleFontSize={titleFontSize}
      titleColor={titleColor}
      titleStyle={titleStyle}
    />
    <Snippet snippet={snippet} language={language} snippetFontSize={snippetFontSize} />
    <Signature signature={signature} />
  </BitContainer>
);

export default Bit;
