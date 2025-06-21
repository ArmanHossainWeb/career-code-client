import React, {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const AuthProvider = ({children }) => {
    const [loading,setLoading]= useState(true)
    const[user, setUser]=useState(null)
    const provider = new GoogleAuthProvider();

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
    // Login User 
    const loginUser = (email, password) => {
        setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
    // login with google 
    const LoginWithGoogle = () => {
      setLoading(true)
      signInWithPopup(auth,provider)
    }

    // LogOut user 
    const logoutUser = () => {
        setLoading(true)
      return signOut(auth)
    }

    // useEffect 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false)
            console.log("user in the auth state change", currentUser);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        user,
        loading,
        LoginWithGoogle,
        loginUser,
        logoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;