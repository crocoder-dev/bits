import React from 'react';
import styled from 'styled-components';
import LogoInput from './Logo';
import SnippetInput from './Snippet';
import TitleInput from './Title';
import SignatureInput from './Signature';
import BackgroundInput from './Background';

const Wrapper = styled.section`
  height: 100vh;
  width: 50vw;
  overflow-y: scroll;
  padding: 24px;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
`;

const InputSectionTitle = styled.h2`
  font-size: 24px;
  padding: 24px 0;
`;

const InputSection = ({ title, children }) => (
  <div>
    <InputSectionTitle>{title}</InputSectionTitle>
    {children}
    <hr />
  </div>
);

const Input = ({
  snippet,
  setSnippet,
  logo,
  setLogo,
  uploadedLogo,
  setUploadedLogo,
  title,
  titleFontSize,
  titleFontSizes,
  setTitleFontSize,
  setTitle,
  titleColor,
  titleColors,
  setTitleColor,
  titleStyle,
  setTitleStyle,
  titleStyles,
  signature,
  setSignature,
  background,
  setBackground,
  language,
  languages,
  setLanguage,
  theme,
  setTheme,
  themes,
  snippetFontSize,
  setSnippetFontSize,
  snippetFontSizes,
  signatureFontSize,
  signatureFontSizes,
  setSignatureFontSize,
  signatureColor,
  signatureColors,
  setSignatureColor,
  logoWidth,
  logoWidths,
  setLogoWidth,
}) => (
  <Wrapper>
    <InputSection title="Background">
      <BackgroundInput background={background} setBackground={setBackground} />
    </InputSection>
    <InputSection title="Logo">
      <LogoInput
        logo={logo}
        setLogo={setLogo}
        uploadedLogo={uploadedLogo}
        setUploadedLogo={setUploadedLogo}
        logoWidth={logoWidth}
        logoWidths={logoWidths}
        setLogoWidth={setLogoWidth}
      />
    </InputSection>
    <InputSection title="Title">
      <TitleInput
        title={title}
        setTitle={setTitle}
        titleFontSize={titleFontSize}
        titleFontSizes={titleFontSizes}
        setTitleFontSize={setTitleFontSize}
        titleColor={titleColor}
        titleColors={titleColors}
        setTitleColor={setTitleColor}
        titleStyle={titleStyle}
        setTitleStyle={setTitleStyle}
        titleStyles={titleStyles}
      />
    </InputSection>
    <InputSection title="Snippet">
      <SnippetInput
        snippet={snippet}
        setSnippet={setSnippet}
        language={language}
        languages={languages}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        themes={themes}
        snippetFontSize={snippetFontSize}
        setSnippetFontSize={setSnippetFontSize}
        snippetFontSizes={snippetFontSizes}
      />
    </InputSection>
    <InputSection title="Signature">
      <SignatureInput
        signature={signature}
        setSignature={setSignature}
        signatureFontSize={signatureFontSize}
        signatureFontSizes={signatureFontSizes}
        setSignatureFontSize={setSignatureFontSize}
        signatureColor={signatureColor}
        signatureColors={signatureColors}
        setSignatureColor={setSignatureColor}
      />
    </InputSection>
  </Wrapper>
);

export default Input;
