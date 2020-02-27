import React from 'react';
import Output from './components/output';
import Input from './components/input';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/command-line/prism-command-line.css';
import './okaida.css';

const App = () => {
  return (
    <div style={{display: 'flex'}}>
      <Input />
      <Output snippet={`var data = 1;`} language="javascript" title="test" background="yellow" signature="@devabram" logo="logo.png" />
    </div>
  );
}

export default App;
