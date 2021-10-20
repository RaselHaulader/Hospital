import { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import initFirebase from '../firebase/firebaseInit';
import swal from 'sweetalert';
initFirebase()
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState([])
    const [errors, setError] = useState('')
    const [loading, setLoading] = useState(true)
       
    // google provider
    const googleProvider = new GoogleAuthProvider()
    

    // google popup sign in authentication
    const googleSignIn = () => {
       return signInWithPopup(auth, googleProvider).finally(()=>setLoading(false))
            
    }
    // log out functionality
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser([])
                swal("Good job!", "Successfully Log out" ,"success");
                setError('')
            })
            .catch((err) => setError(err.message))
            .finally(()=>setLoading(false))
            
    }
    
    // create user by email and pass
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
   
    // login user by email and pass
    const emailPassLogin = (email, password) => {
        console.log(email, password)
       return signInWithEmailAndPassword(auth,email,password)
       .finally(()=>setLoading(false))
    }
    
    // control auth state changed by user
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

    // return all auth fo use from components by use useAuth hook
    return { googleSignIn,loading, setUser,auth, errors, user, logOut, emailPassSignIn, emailPassLogin }
};


export default useFirebase;