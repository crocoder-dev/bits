import React, { useState } from 'react';
import Output from './components/output';
import Input from './components/input';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/command-line/prism-command-line.css';

const App = () => {

  const [ snippet, setSnippet ] = useState(``);
  const [ logo, setLogo ] = useState('/logo.png');
  const [ title, setTitle ] = useState('');
  const [ signature, setSignature ] = useState('');
  const [ background, setBackground ] = useState('#FFF');

  return (
    <div style={{display: 'flex'}}>
      <Input
        snippet={snippet}
        setSnippet={setSnippet}
        logo={logo}
        setLogo={setLogo} 
        title={title}
        setTitle={setTitle}
        signature={signature}
        setSignature={setSignature}
        background={background}
        setBackground={setBackground}
      />
      <Output snippet={snippet} language="javascript" title={title} background={background} signature={signature} logo={logo} />
    </div>
  );
}

export default App;
