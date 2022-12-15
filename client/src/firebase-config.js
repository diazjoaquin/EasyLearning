import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });

export const firebaseConfig = {
    
        apiKey: "AIzaSyD48-m6BpBJXVQanmLp7aBWWFUSHUNedLg",
        authDomain: "easylearning-fp.firebaseapp.com",
        databaseURL: "https://easylearning-fp-default-rtdb.firebaseio.com",
        projectId: "easylearning-fp",
        storageBucket: "easylearning-fp.appspot.com",
        messagingSenderId: "858975070973",
        appId: "1:858975070973:web:1d2a790bf1cd14ff42ac94",
        measurementId: "G-ZSCERXL0XX",

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

