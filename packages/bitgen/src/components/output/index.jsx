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
  signatureColor,
  signatureFontSize,
}) => {
  const capture = useRef(null);

  const onButtonClick = async () => {
    const canvas = await html2canvas(capture.current);
    if (canvas.getContext) {
      const anchor = document.createElement('a');
      anchor.appendChild(document.createTextNode('download'));
      anchor.href = canvas.toDataURL('image/png');
      anchor.download = 'bit.png';
      const imageWindow = window.open('');
      imageWindow.document.write(anchor.outerHTML);
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
          signatureColor={signatureColor}
          signatureFontSize={signatureFontSize}
        />
      </Background>
    </Wrapper>
  );
};

export default Output;
