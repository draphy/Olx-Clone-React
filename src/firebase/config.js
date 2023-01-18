import firebase from "firebase";
import 'firebase/auth'
 import 'firebase/firebase'
 import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtRSJ5WNJ1lih7C0-zcPpTAWUhCngr9uA",
  authDomain: "olx-react-clone-9bedd.firebaseapp.com",
  projectId: "olx-react-clone-9bedd",
  storageBucket: "olx-react-clone-9bedd.appspot.com",
  messagingSenderId: "445600921534",
  appId: "1:445600921534:web:bba8ce344aad2ee76aebef",
  measurementId: "G-RJB01LY96G"
};

 export default firebase.initializeApp(firebaseConfig)