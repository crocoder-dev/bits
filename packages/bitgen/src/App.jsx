import React, { useState } from 'react';
import Output from './components/output';
import Input from './components/input';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/command-line/prism-command-line.css';
import { titleStyles } from './components/output/Title';
import { themeStyles } from './components/output/Bit';

const App = () => {
  const [snippet, setSnippet] = useState(`<!DOCTYPE HTML>
  <html>

  <body>

    <script>
      alert( 'Hello, JS!' );
    </script>

  </body>

  </html>`);
  const [logo, setLogo] = useState('/logo.png');
  const [uploadedLogo, setUploadedLogo] = useState(false);
  const [title, setTitle] = useState('Hello, JS');
  const [signature, setSignature] = useState('crocoder.dev @crocoderdev');
  const [background, setBackground] = useState('#000');
  const [titleFontSize, setTitleFontSize] = useState('128');
  const [titleColor, setTitleColor] = useState('#FFF');
  const [titleStyle, setTitleStyle] = useState(undefined);
  const [theme, setTheme] = useState('okaidia');
  const [snippetFontSize, setSnippetFontSize] = useState('26');
  const [signatureFontSize, setSignatureFontSize] = useState('20');
  const [signatureColor, setSignatureColor] = useState('#FFF');
  const [language, setLanguage] = useState('html');
  const [logoWidth, setLogoWidth] = useState('150');

  const titleColors = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'];
  const signatureColors = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'];
  const backgroundColors = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'];

  const logoWidths = [
    { value: '100', label: '100px' },
    { value: '150', label: '150px' },
    { value: '200', label: '200px' },
    { value: '250', label: '250px' },
    { value: '300', label: '300px' },
    { value: '350', label: '350px' },
    { value: '400', label: '400px' },
    { value: '450', label: '450px' },
    { value: '500', label: '500px' },
    { value: '550', label: '550px' },
  ];

  const signatureFontSizes = [
    { value: '14', label: '14px' },
    { value: '16', label: '16px' },
    { value: '18', label: '18px' },
    { value: '20', label: '20px' },
    { value: '22', label: '22px' },
    { value: '24', label: '24px' },
    { value: '26', label: '26px' },
    { value: '28', label: '28px' },
    { value: '30', label: '30px' },
  ];

  const snippetFontSizes = [
    { value: '14', label: '14px' },
    { value: '16', label: '16px' },
    { value: '18', label: '18px' },
    { value: '20', label: '20px' },
    { value: '22', label: '22px' },
    { value: '24', label: '24px' },
    { value: '26', label: '26px' },
    { value: '28', label: '28px' },
    { value: '30', label: '30px' },
  ];

  const titleFontSizes = [
    { value: '24', label: '24px' },
    { value: '32', label: '32px' },
    { value: '48', label: '48px' },
    { value: '64', label: '64px' },
    { value: '96', label: '96px' },
    { value: '128', label: '128px' },
    { value: '256', label: '256px' },
  ];

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'markdown', label: 'Markdown' },
    { value: 'scss', label: 'SCSS' },
    { value: 'typescript', label: 'TypeScript' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Input
        snippet={snippet}
        setSnippet={setSnippet}
        logo={logo}
        setLogo={setLogo}
        uploadedLogo={uploadedLogo}
        setUploadedLogo={setUploadedLogo}
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
        titleStyles={
          Object.entries(titleStyles)
            .map((style) => ({ label: style[1].label, value: style[0] }))
        }
        language={language}
        languages={languages}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        themes={
          Object.entries(themeStyles)
            .map((style) => ({ label: style[1].label, value: style[0] }))
        }
        snippetFontSize={snippetFontSize}
        setSnippetFontSize={setSnippetFontSize}
        snippetFontSizes={snippetFontSizes}
        signature={signature}
        setSignature={setSignature}
        signatureFontSize={signatureFontSize}
        signatureFontSizes={signatureFontSizes}
        setSignatureFontSize={setSignatureFontSize}
        signatureColor={signatureColor}
        signatureColors={signatureColors}
        setSignatureColor={setSignatureColor}
        background={background}
        setBackground={setBackground}
        backgroundColors={backgroundColors}
        logoWidth={logoWidth}
        logoWidths={logoWidths}
        setLogoWidth={setLogoWidth}
      />
      <Output
        snippet={snippet}
        snippetFontSize={snippetFontSize}
        language={language}
        theme={theme}
        title={title}
        titleFontSize={titleFontSize}
        titleColor={titleColor}
        titleStyle={titleStyle}
        background={background}
        signature={signature}
        signatureColor={signatureColor}
        signatureFontSize={signatureFontSize}
        logo={logo}
        logoWidth={logoWidth}
      />
    </div>
  );
};

export default App;
