import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvavAkVc5ebYefF3zghywGLgttHVR_pRI",
  authDomain: "pizza-hut-e4c25.firebaseapp.com",
  projectId: "pizza-hut-e4c25",
  storageBucket: "pizza-hut-e4c25.appspot.com",
  messagingSenderId: "297406139715",
  appId: "1:297406139715:web:0e45065a145a9da19ff3f6",
  measurementId: "G-JGXK2R1QZ2"
};

const fireApp = initializeApp(firebaseConfig);

export const db = getFirestore(fireApp);

