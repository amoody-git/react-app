import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWfS0GUoeaK92z7Q_Gh3yXy4VmiD4aOUA",
    authDomain: "react-app-3ed21.firebaseapp.com",
    databaseURL: "https://react-app-3ed21.firebaseio.com",
    projectId: "react-app-3ed21",
    storageBucket: "",
    messagingSenderId: "1010834998349",
    appId: "1:1010834998349:web:5fd1e0433ee27cf9900804"
  };

Firebase.initializeApp(config);

export const auth = Firebase.auth();
export const firestore = Firebase.firestore();

const provider = new Firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default Firebase;
