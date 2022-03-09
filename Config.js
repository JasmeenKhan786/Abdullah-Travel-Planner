import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDgsdbzKLj8XYDKanoRF6QcpW7w_Uxc3WY",
  authDomain: "travelapp-3385c.firebaseapp.com",
  projectId: "travelapp-3385c",
  storageBucket: "travelapp-3385c.appspot.com",
  messagingSenderId: "384813012556",
  appId: "1:384813012556:web:24bcb57289d52552dac6e9"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }


export default firebase.firestore();
