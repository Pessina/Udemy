import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NotesApp from './components/NotesApp';

ReactDOM.render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Iyou want your app to work offline and load faster, you can change
// uegister() to register() below. Note this comes with some pitfalls.
// Lrn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
