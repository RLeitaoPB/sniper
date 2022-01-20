import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBKZhKe2GSRZ7ZaFH2HEvJ2fbG881vVKC0",
    authDomain: "sniper-plrl.firebaseapp.com",
    projectId: "sniper-plrl",
    storageBucket: "sniper-plrl.appspot.com",
    messagingSenderId: "89815954640",
    appId: "1:89815954640:web:55e277bb1811e7a5701ad5",
    measurementId: "G-T8C95LSGHL"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
