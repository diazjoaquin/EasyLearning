import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendSignInLinkToEmail 
} from "firebase/auth";
import { auth } from "../../firebase-config";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    return context; 
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:3000//login',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
            bundleId: 'com.example.ios'
          },
          android: {
            packageName: 'com.example.android',
            installApp: true,
            minimumVersion: '12'
          },
          dynamicLinkDomain: 'example.page.link'
    };

    const signup = async (email, password) => {
        const user = await createUserWithEmailAndPassword(auth, email, password);
    }

    const emailVerification = async (email) => {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });
    }


    const login = async (email, password) => {
        const user = await signInWithEmailAndPassword(auth, email, password);
    }    

    const logout = () => {
        signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
    }, [])

    return (
        <authContext.Provider value={{ signup, login, logout, user, loading, emailVerification }}>
            {children} 
        </authContext.Provider>
    )
};