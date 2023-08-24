// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCaFMaiyiFdaUFsOFrOMiJy00nSJ_MXqcE",
    authDomain: "clone-975c2.firebaseapp.com",
    projectId: "clone-975c2",
    storageBucket: "clone-975c2.appspot.com",
    messagingSenderId: "949753675594",
    appId: "1:949753675594:web:25d5adfe076f19e5fd8bb3",
    measurementId: "G-BL4TBR6LVT"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();
  const auth=firebase.auth();

  export {db, auth};