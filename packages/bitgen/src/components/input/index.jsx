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
`;

const InputSectionTitle = styled.h2`
  font-size: 24px;
  padding: 24px 0;
`;

const InputSection = ({ title, children }) => {
  return (
    <div>
      <InputSectionTitle>{title}</InputSectionTitle>
      {children}
      <hr />
    </div>
  )
}

const Input = ({
  snippet,
  setSnippet,
  logo,
  setLogo, uploadedLogo, setUploadedLogo, title, titleFontSize, titleFontSizes, setTitleFontSize, setTitle, signature, setSignature, background, setBackground }) => {
  return (
    <Wrapper>
      <InputSection title="Logo">
        <LogoInput logo={logo} setLogo={setLogo} uploadedLogo={uploadedLogo} setUploadedLogo={setUploadedLogo} />
      </InputSection>
      <InputSection title="Title">
        <TitleInput title={title} setTitle={setTitle} titleFontSize={titleFontSize} titleFontSizes={titleFontSizes} setTitleFontSize={setTitleFontSize} />
      </InputSection>
      <InputSection title="Snippet">
        <SnippetInput snippet={snippet} setSnippet={setSnippet} />
      </InputSection>
      <InputSection title="Signature">
        <SignatureInput signature={signature} setSignature={setSignature} />
      </InputSection>
      <InputSection title="Background">
        <BackgroundInput background={background} setBackground={setBackground} />
      </InputSection>
    </Wrapper>
  )
};

export default Input;