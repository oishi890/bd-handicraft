// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
  
  apiKey: "AIzaSyDCUCyj1LivRRnIGcT88Z2RZa07AqCWlUg",
  authDomain: "bangladesh-handicraft.firebaseapp.com",
  projectId: "bangladesh-handicraft",
  storageBucket: "bangladesh-handicraft.appspot.com",
  messagingSenderId: "1053946348300",
  appId: "1:1053946348300:web:a07abfc98a5a1d56937f29",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
