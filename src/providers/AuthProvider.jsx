import React, { createContext, useEffect, useState } from 'react';
import {app} from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,sendPasswordResetEmail } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(null);

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    } 

    const userLogIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        });
    }

    const resetPassword = (email) => {
      setLoading(true);
      return sendPasswordResetEmail(auth, email);
    };

    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(loggedUser)=>{
            setUser(loggedUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const authInfo={
        user,
        loading,setLoading,createUser,userLogIn,googleSignIn,logOut,updateUserProfile,resetPassword
    }
    return (<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>);
};

export default AuthProvider;