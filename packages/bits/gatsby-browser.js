import React from 'react';
import PropTypes from 'prop-types';
import AppProvider from 'store/provider';

require('./src/global.scss');

require('./src/styles/highlights/okaidia.scss');
require('./src/styles/highlights/vs.scss');
require('./src/styles/highlights/duotone-light.scss');
require('./src/styles/highlights/a11y-dark.scss');
require('./src/styles/highlights/light.scss');
require('./src/styles/highlights/solarized-light.scss');
require('./src/styles/highlights/tomorrow-night.scss');

require('prismjs/plugins/line-numbers/prism-line-numbers.css');
require('prismjs/plugins/command-line/prism-command-line.css');

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

wrapRootElement.propTypes = {
  element: PropTypes.element,
};
