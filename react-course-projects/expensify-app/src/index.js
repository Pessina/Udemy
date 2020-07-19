import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter, { history } from './routers/AppRouter';

import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';

const store = configureStore();

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root'),
    );
    hasRendered = true;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <p>Loading ...</p>
  </React.StrictMode>,
  document.getElementById('root'),
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    renderApp();
    history.push('/');
  }
});
