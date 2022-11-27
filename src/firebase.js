import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABxBO-o2n0YMr6JafMSnfRNmVuG8M72ag",
  authDomain: "marketplace-d0524.firebaseapp.com",
  projectId: "marketplace-d0524",
  storageBucket: "marketplace-d0524.appspot.com",
  messagingSenderId: "1070924261379",
  appId: "1:1070924261379:web:4c8afcd25f81f8bb314636",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
