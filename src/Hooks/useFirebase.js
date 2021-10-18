import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth,signInWithPopup } from "firebase/auth";
import initFirebase from '../firebase/firebaseInit';
 initFirebase()
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState([])

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn =()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>setUser(result.user))
    }
    return {googleSignIn, user}
};


export default useFirebase;