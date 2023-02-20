import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCDQSPFzxdwnT8aFYwbA-K_vJKiPim_yrw',
  authDomain: 'eshop-ed66f.firebaseapp.com',
  projectId: 'eshop-ed66f',
  storageBucket: 'eshop-ed66f.appspot.com',
  messagingSenderId: '1058072830262',
  appId: '1:1058072830262:web:7ea77cb4903f9d7a331397',
};

// Initialize Firebase
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
