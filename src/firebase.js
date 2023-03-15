
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj0D7IKK_RO_c_2opsZt1NqXVQDljdOgs",
  authDomain: "bangla-talk-e401b.firebaseapp.com",
  projectId: "bangla-talk-e401b",
  storageBucket: "bangla-talk-e401b.appspot.com",
  messagingSenderId: "533016264858",
  appId: "1:533016264858:web:86591504081a75df3e1f23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage=getStorage();
export const db = getFirestore()