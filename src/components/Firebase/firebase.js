import app from 'firebase/app';
import 'firebase/auth';



const config = {
  apiKey: "AIzaSyBGfiG8HE_NAwKuZ36GdpeVFzYvCqMZU-Q",
  authDomain: "react-demo-2e9b7.firebaseapp.com",
  databaseURL: "https://react-demo-2e9b7.firebaseio.com",
  projectId: "react-demo-2e9b7",
  storageBucket: "react-demo-2e9b7.appspot.com",
  messagingSenderId: "437294181207",
  appId: "1:437294181207:web:d465505982f27723d02c12",
  measurementId: "G-M26TD2F6ZT"
};

class Firebase {

  constructor() {

    app.initializeApp(config);
    this.auth = app.auth();

  }

  registerWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  loginWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  logout = () => this.auth.signOut();


}
export default Firebase;