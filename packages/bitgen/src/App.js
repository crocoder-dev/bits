import React from 'react';
import Output from './components/output';
import Input from './components/input';

const App = () => {
  return (
    <div style={{display: 'flex'}}>
      <Input />
      <Output title="test" background="yellow" signature="@devabram" logo="logo.png" />
    </div>
  );
}

export default App;
