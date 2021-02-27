import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyBShd76vX7EyQ-B2Cb3VEnkKtrkmryQG_0",
        authDomain: "todo-12a23.firebaseapp.com",
        databaseURL: "https://todo-12a23.firebaseio.com",
        projectId: "todo-12a23",
        storageBucket: "todo-12a23.appspot.com",
        messagingSenderId: "1073440315238",
        appId: "1:1073440315238:web:4445aedde65cefc7151aa7",
        measurementId: "G-HLTSD77HEN"
})

const db = firebaseApp.firestore();

export default db;