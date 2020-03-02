import React, { useState } from 'react';
import Output from './components/output';
import Input from './components/input';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/command-line/prism-command-line.css';

const App = () => {
  const [snippet, setSnippet] = useState(`var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}`);
  const [logo, setLogo] = useState('/logo.png');
  const [uploadedLogo, setUploadedLogo] = useState(false);
  const [title, setTitle] = useState('Calculate the product of two numbers');
  const [signature, setSignature] = useState('🐦 @devabram 🌐 devabram.com');
  const [background, setBackground] = useState('#000');
  const [titleFontSize, setTitleFontSize] = useState('64');
  const [titleColor, setTitleColor] = useState('#FFF');

  const titleColors = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'];
  const backgroundColors = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'];

  const titleFontSizes = [
    { value: '24', label: '24px' },
    { value: '32', label: '32px' },
    { value: '48', label: '48px' },
    { value: '64', label: '64px' },
    { value: '96', label: '96px' },
    { value: '128', label: '128px' },
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
        signature={signature}
        setSignature={setSignature}
        background={background}
        setBackground={setBackground}
        backgroundColors={backgroundColors}
      />
      <Output
        snippet={snippet}
        language="javascript"
        title={title}
        titleFontSize={titleFontSize}
        titleColor={titleColor}
        background={background}
        signature={signature}
        logo={logo}
      />
    </div>
  );
};

export default App;
