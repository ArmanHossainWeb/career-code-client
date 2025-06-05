import React, { Children, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children }) => {
    const [loading,setLoading]= useState(true)

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

    const authInfo = {
        createUser,
        loading,
        loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;