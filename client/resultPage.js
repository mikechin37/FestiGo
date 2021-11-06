import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ResultMainContainer from './components/ResultMainContainer';
import store from './store';

// wrap the App in the Provider Component and pass in the store
render(
  <React.StrictMode>
    <Provider store={store}>
      <ResultMainContainer />
    </Provider>,
  </React.StrictMode>,
  document.querySelector('#contents')
);