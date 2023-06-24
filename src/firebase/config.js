import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBZyJgnKf5PIbbThHR8hsKrgdoCw_Pxn-s",
    authDomain: "mymoney-f3e8d.firebaseapp.com",
    projectId: "mymoney-f3e8d",
    storageBucket: "mymoney-f3e8d.appspot.com",
    messagingSenderId: "1004650942592",
    appId: "1:1004650942592:web:29760b63a9fd25f070d665",
    measurementId: "G-RCJQ1GED8G"
  };
  firebase.initializeApp(firebaseConfig);

  const projectFirestore= firebase.firestore();
  const projectAuth= firebase.auth();
  const timestamp= firebase.firestore.Timestamp

  export {projectFirestore,projectAuth,timestamp};