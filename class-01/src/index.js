import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const rootElement = document.getElementById('app');

const renderApp = () => {
  const App = require('./App')
  render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootElement
  );
};

renderApp();

if (module.hot) {
	module.hot.accept(
    './App.js',
    () => renderApp()
  );
}