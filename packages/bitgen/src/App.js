import React from 'react';
import Output from './components/output';

const App = () => {
  return (
    <div style={{display: 'flex'}}>
      <div style={{ height: '100vh', width: '50vw' }}>
        input
      </div>
      <Output />
    </div>
  );
}

export default App;
