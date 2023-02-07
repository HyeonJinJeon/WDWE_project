import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage';
import "firebase/firestore";
import "firebase/auth";


firebase.initializeApp({
    apiKey: "AIzaSyCCFJQ3d2CByNJ57yMOEevRy06OezzrWrs",
    authDomain: "what-do-we-eat-92c3a.firebaseapp.com",
    projectId: "what-do-we-eat-92c3a",
    storageBucket: "what-do-we-eat-92c3a.appspot.com",
    messagingSenderId: "1022492461368",
    appId: "1:1022492461368:web:d5f804dd6c367c7c2019cd",
    measurementId: "G-DBQ3ZZTMTL"
});

firebase.auth().languageCode = 'ko'

const auth = firebase.auth()
const firestore = firebase.firestore()
const functions = firebase.app().functions('asia-northeast3')

export {auth, firestore, functions, firebase}
