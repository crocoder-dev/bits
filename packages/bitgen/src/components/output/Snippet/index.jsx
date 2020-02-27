import React, { useMemo } from 'react';
import Prism from 'prismjs';

const Snippet = ({ language, snippet }) => {

  const highlight = useMemo(
    () => {
      return Prism.highlight(snippet, Prism.languages[language], language);
    },
    [snippet, language],
  );
  console.log(snippet);
  return (
    <pre className="language-javascript" dangerouslySetInnerHTML={{__html: highlight}} />
  )
};

export default Snippet;