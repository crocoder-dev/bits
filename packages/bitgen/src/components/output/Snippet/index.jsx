import React, { useMemo } from 'react';
import Prism from 'prismjs';

const Snippet = ({ language, snippet }) => {
  const highlight = useMemo(
    () => Prism.highlight(snippet, Prism.languages[language], language),
    [snippet, language],
  );
  return (
    <pre className={`language-${language}`} dangerouslySetInnerHTML={{ __html: highlight }} />
  );
};

export default Snippet;
