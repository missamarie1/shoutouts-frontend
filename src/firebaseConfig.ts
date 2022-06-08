import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcgSI9W9kSIO4NVcw6AEodhogcLpteEwo",
  authDomain: "shoutouts-7b793.firebaseapp.com",
  projectId: "shoutouts-7b793",
  storageBucket: "shoutouts-7b793.appspot.com",
  messagingSenderId: "451977864639",
  appId: "1:451977864639:web:35713119a0493b561d2d0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export const signInWithGoogle = (): void => {
  signInWithPopup(auth, authProvider);
};

export const signOut = (): void => {
  auth.signOut();
};
