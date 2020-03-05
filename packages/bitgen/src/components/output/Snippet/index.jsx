import React, { useMemo } from 'react';
import Prism from 'prismjs';
import styled from 'styled-components';

const StyledPre = styled.pre`
  font-size: ${(props) => `${props.snippetFontSize}px !important`};
  width: 80%;
  overflow: hidden !important;
`;


const Snippet = ({ language, snippet, snippetFontSize }) => {
  const highlight = useMemo(
    () => Prism.highlight(snippet, Prism.languages[language], language),
    [snippet, language],
  );
  return (
    <StyledPre
      snippetFontSize={snippetFontSize}
      className={`language-${language}`}
      dangerouslySetInnerHTML={{ __html: highlight }}
    />
  );
};

export default Snippet;
