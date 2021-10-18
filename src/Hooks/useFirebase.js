import { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import initFirebase from '../firebase/firebaseInit';
initFirebase()
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState([])
    const [errors, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
       return signInWithPopup(auth, googleProvider).finally(()=>setLoading(false))
            
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser([])
                setError('')
            })
            .catch((err) => setError(err.message))
            .finally(()=>setLoading(false))
            
    }

    const emailPassSignIn = (email, pass, name) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                updateProfile(auth.currentUser, { displayName: `${name}` })
                setError('')
                    .then(() => {
                        setUser(result.user)
                        setError('')
                    })
                    .catch((err) => setError(err))
            })
            .catch((err) => setError(err.message))
    }

    const emailPassLogin = (email, password) => {
        console.log(email, password)
       return signInWithEmailAndPassword(auth,email,password)
       .finally(()=>setLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser([])
            }
            setLoading(false)
        })
    }, [])
    return { googleSignIn,loading, setUser,auth, errors, user, logOut, emailPassSignIn, emailPassLogin }
};


export default useFirebase;