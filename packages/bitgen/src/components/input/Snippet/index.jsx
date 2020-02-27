import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

const SnippetInput = ({ snippet, setSnippet }) => {
  return (
    <AceEditor
        placeholder="Placeholder Text"
        mode="javascript"
        theme="github"
        name="blah2"
        fontSize={16}
        onChange={setSnippet}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={snippet}
        width={'100%'}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }} />
  )
};


export default SnippetInput;