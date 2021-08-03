import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyChrhlA07ozzi2ilVYxiknvXtUUmpUMXfE",
    authDomain: "fb-clone-d6935.firebaseapp.com",
    projectId: "fb-clone-d6935",
    storageBucket: "fb-clone-d6935.appspot.com",
    messagingSenderId: "115550839619",
    appId: "1:115550839619:web:608dcb330aef980adf05f6",
    measurementId: "G-J57KN2EDQ8"
  };




const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebaseApp.firestore()

export { auth, provider }
export default db