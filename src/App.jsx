import React from 'react';
import Router from '@router/Router';
import { Global } from '@emotion/core';
import ResetStyle from '@styles/ResetStyle';
const App = () => {
  return (
    <>
      <Global styles={ResetStyle} />
      <Router />
    </>
  );
};

export default App;
