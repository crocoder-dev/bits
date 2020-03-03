import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/ext-language_tools';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-scss';
import 'ace-builds/src-noconflict/mode-typescript';

import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/snippets/markdown';
import 'ace-builds/src-noconflict/snippets/scss';
import 'ace-builds/src-noconflict/snippets/typescript';
import styled from 'styled-components';


import SelectField from '../Select';

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
max-width: 440px;
`;


const SnippetInput = ({
  snippet,
  setSnippet,
  language,
  setLanguage,
  languages,
  theme,
  setTheme,
  themes,
  snippetFontSize,
  setSnippetFontSize,
  snippetFontSizes,
}) => {
  const updateLanguage = (event) => {
    setLanguage(event.target.value);
  };
  const updateTheme = (event) => {
    setTheme(event.target.value);
  };
  const updateFontSize = (event) => {
    setSnippetFontSize(event.target.value);
  };


  return (
    <>
      <Wrapper>
        <SelectField
          id="lang"
          label="Set language"
          options={languages}
          value={language}
          onChange={updateLanguage}
        />
        <SelectField
          id="theme"
          label="Set theme"
          options={themes}
          value={theme}
          onChange={updateTheme}
        />
        <SelectField
          id="snippet-font"
          label="Code font size"
          options={snippetFontSizes}
          value={snippetFontSize}
          onChange={updateFontSize}
        />
      </Wrapper>
      <AceEditor
        placeholder="Placeholder Text"
        mode={language}
        theme="github"
        name="blah2"
        fontSize={16}
        onChange={setSnippet}
        showPrintMargin
        showGutter
        highlightActiveLine
        value={snippet}
        width="100%"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
          useWorker: false,
        }}
      />
    </>
  );
};


export default SnippetInput;
