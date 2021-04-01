import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyALyrlaM1uMLNr6VoLstrsLYix-xXRKsiA",
  authDomain: "buzzer-app-be6e6.firebaseapp.com",
  databaseURL:'https://buzzer-app-be6e6-default-rtdb.firebaseio.com/',
  projectId: "buzzer-app-be6e6",
  storageBucket: "buzzer-app-be6e6.appspot.com",
  messagingSenderId: "894515108404",
  appId: "1:894515108404:web:3c75360c62330fdd0fc861"
};
if(!firebase.apps.length)
 firebase.initializeApp(firebaseConfig);
export default firebase.database();