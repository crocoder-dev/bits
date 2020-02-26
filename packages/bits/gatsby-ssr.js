import React from 'react';
import { renderToString } from 'react-dom/server';
import AppProvider from 'store/provider';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => <AppProvider>{bodyComponent}</AppProvider>;
  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};
