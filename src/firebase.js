import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6rIpSZcVG7lR_M31ROSykc1-LDRq93To",
  authDomain: "istiaka-mazon-clone.firebaseapp.com",
  databaseURL: "https://istiaka-mazon-clone.firebaseio.com",
  projectId: "istiaka-mazon-clone",
  storageBucket: "istiaka-mazon-clone.appspot.com",
  messagingSenderId: "248234849106",
  appId: "1:248234849106:web:4b5dfcd3244f715dbc408b",
  measurementId: "G-NKZY1DWN0M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
