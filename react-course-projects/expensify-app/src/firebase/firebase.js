import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDvCjQnSt-TROTSQcSv_hWU7Nl4WIWfFK0',
  authDomain: 'expensify-app-udemy-9d776.firebaseapp.com',
  databaseURL: 'https://expensify-app-udemy-9d776.firebaseio.com',
  projectId: 'expensify-app-udemy-9d776',
  storageBucket: 'expensify-app-udemy-9d776.appspot.com',
  messagingSenderId: '779354009920',
  appId: '1:779354009920:web:0542c1e6c15f9c36ba0aa5',
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
