import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDU9DEOAjVVDM3NeOSIGLs35He9IK4cxYA",
  authDomain: "robinhood-95327.firebaseapp.com",
  projectId: "robinhood-95327",
  storageBucket: "robinhood-95327.appspot.com",
  messagingSenderId: "1074724931853",
  appId: "1:1074724931853:web:87406f0cf2c36d5fdac844",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
