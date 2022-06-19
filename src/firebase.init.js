// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxxpFBAznJSAKd09R181hWRQrasuOkOhk",
  authDomain: "uviom-web-test.firebaseapp.com",
  projectId: "uviom-web-test",
  storageBucket: "uviom-web-test.appspot.com",
  messagingSenderId: "993636044319",
  appId: "1:993636044319:web:efe2f18078a53c2cf94f2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export default auth