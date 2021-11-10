import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import initializeFirebaseAuthentication from '../Pages/Login/Firebase/firebase.init';


// initializing Firebase
initializeFirebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


                const newUser = { email, displayName: name };
                setUser(newUser);

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                history.replace('/')
            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false))
    }


    // observer for check user start
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
            console.log(user)
        });
        return () => unsubscribe;
    }, []);


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }


    return {
        registerUser,
        user,
        isLoading,
        logOut,
    };
};

export default useFirebase;