import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppStore from './redux/AppStore'
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
