import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBI3kydHZpTzebng-tc27IjIp3nd0f5RJY",
    authDomain: "application-project-1f641.firebaseapp.com",
    databaseURL: "https://application-project-1f641.firebaseio.com",
    projectId: "application-project-1f641",
    storageBucket: "application-project-1f641.appspot.com",
    messagingSenderId: "211885324749",
    appId: "1:211885324749:web:951427403d42e792"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase