import React, { useState } from 'react';
import Output from './components/output';
import Input from './components/input';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/command-line/prism-command-line.css';
import { titleStyles } from './components/output/Title';
import { themeStyles } from './components/output/Bit';

const App = () => {
  const [snippet, setSnippet] = useState(`function abc() {
  return 'a';
}`);
  const [logo, setLogo] = useState('/logo.png');
  const [uploadedLogo, setUploadedLogo] = useState(false);
  const [title, setTitle] = useState('Calculate the product of two numbers');
  const [signature, setSignature] = useState('🐦 @devabram 🌐 devabram.com');
  const [background, setBackground] = useState('#000');
  const [titleFontSize, setTitleFontSize] = useState('64');
  const [titleColor, setTitleColor] = useState('#FFF');
  const [titleStyle, setTitleStyle] = useState(undefined);
  const [theme, setTheme] = useState('okaidia');
  const [snippetFontSize, setSnippetFontSize] = useState('20');

  const [language, setLanguage] = useState('javascript');


  const titleColors = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'];
  const backgroundColors = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'];

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
        background={background}
        setBackground={setBackground}
        backgroundColors={backgroundColors}
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
        logo={logo}
      />
    </div>
  );
};

export default App;
