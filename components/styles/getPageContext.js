/* eslint-disable no-underscore-dangle */
// See https://github.com/mui-org/material-ui/blob/master/examples/nextjs/src/getPageContext.js
import { SheetsRegistry } from 'jss';
import { createGenerateClassName } from '@material-ui/core/styles';
import chittawelaTheme from './styles';

const createPageContext = () => {
    return {
        theme: chittawelaTheme,
        // This is needed in order to deduplicate the injection of CSS in the page.
        sheetsManager: new Map(),
        // This is needed in order to inject the critical CSS.
        sheetsRegistry: new SheetsRegistry(),
        // The standard class name generator.
        generateClassName: createGenerateClassName(),
    };
};

const getPageContext = () => {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
};

export default getPageContext;