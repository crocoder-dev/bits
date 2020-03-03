import React, { useRef } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import Background from './Background';
import Bit from './Bit';

const Wrapper = styled.section`
  height: 100vh;
  max-width: 50vw;
`;

const Output = ({
  background,
  title,
  signature,
  logo,
  snippet,
  theme,
  language,
  titleFontSize,
  titleColor,
  titleStyle,
  snippetFontSize,
}) => {
  const capture = useRef(null);

  const onButtonClick = async () => {
    const canvas = await html2canvas(capture.current);
    if (canvas.getContext) {
      const image = new Image();
      image.src = canvas.toDataURL('image/png');
      const imageWindow = window.open('');
      imageWindow.document.write(image.outerHTML);
    }
  };

  return (
    <Wrapper>
      <Background background={background}>
        <button type="button" onClick={onButtonClick}>A</button>
        <Bit
          captureRef={capture}
          background={background}
          title={title}
          titleColor={titleColor}
          titleFontSize={titleFontSize}
          titleStyle={titleStyle}
          signature={signature}
          logo={logo}
          snippet={snippet}
          snippetFontSize={snippetFontSize}
          language={language}
          theme={theme}
        />
      </Background>
    </Wrapper>
  );
};

export default Output;
