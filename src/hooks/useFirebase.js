import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeFirebaseAuthentication from '../Pages/Login/Firebase/firebase.init';


// initializing Firebase
initializeFirebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
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

    // sign in with email & Pass
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));
    }


    // sign in using Google account
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
            })
            .finally(() => setIsLoading(false));
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

        });
        return () => unsubscribe;
    }, [auth]);


    const logOut = (history) => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
                if (history) {
                    history.replace('/')
                }
            })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        console.log(user)
        fetch('https://quiet-reef-72973.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };

    useEffect(() => {
        fetch(`https://quiet-reef-72973.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])
    console.log(admin)

    return {
        registerUser,
        user,
        isLoading,
        loginUser,
        logOut,
        signInWithGoogle,
        admin
    };
};

export default useFirebase;