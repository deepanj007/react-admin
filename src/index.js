import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';

function Root1() {
  return (
    <DarkModeContextProvider>
    <App/>
    </DarkModeContextProvider>
  );
}

ReactDom.render(<Root1/>, document.getElementById('root'));