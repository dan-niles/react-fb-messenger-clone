import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC1TDEOWNnr6ur588SSod_jpQ7s2ZZJzyM",
    authDomain: "fb-messenger-clone-d8adc.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-d8adc.firebaseio.com",
    projectId: "fb-messenger-clone-d8adc",
    storageBucket: "fb-messenger-clone-d8adc.appspot.com",
    messagingSenderId: "684833587192",
    appId: "1:684833587192:web:86e526b3ff62709295e00d",
    measurementId: "G-065T806Q3L"
})

const db = firebaseApp.firestore()

export default db