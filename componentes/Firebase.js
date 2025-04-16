import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDgKVNbSwhW29zjTL6v8-a9UnHwGe9sE6E",
  authDomain: "appacesso-96f81.firebaseapp.com",
  projectId: "appacesso-96f81",
  storageBucket: "appacesso-96f81.firebasestorage.app",
  messagingSenderId: "652816039171",
  appId: "1:652816039171:web:5f517c413679e13674bd36",
  measurementId: "G-9FZ12LMRW9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };