import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBrWr4NjbW94j9Nw-K_t0ocYu2lmGXPcnc",
  authDomain: "revisedoscardata.firebaseapp.com",
  databaseURL: "https://revisedoscardata-default-rtdb.firebaseio.com",
  projectId: "revisedoscardata",
  storageBucket: "revisedoscardata.appspot.com",
  messagingSenderId: "807859127622",
  appId: "1:807859127622:web:82a8d6963b311116749147"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

 