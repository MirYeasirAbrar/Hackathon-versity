import React, { useEffect, useState } from "react";
import Context from "./Context";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // Create user with email & password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() =>
      setLoading(false)
    );
  };

  // Login with email & password
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() =>
      setLoading(false)
    );
  };

  // Logout
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  // Login with Google
  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setLoading(false)
    );
  };

  // Login with Github
  const logInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider).finally(() =>
      setLoading(false)
    );
  };

  // Fetch current user from backend
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:7254/users/${user.email}`)
        .then((res) => setCurrUser(res.data))
        .catch((err) => console.error(err));
    } else {
      setCurrUser(null);
    }
  }, [user]);

  // Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // stop loading after Firebase initialization
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    setUser,
    loading,
    createUser,
    logInUser,
    logOutUser,
    currUser,
    logInWithGoogle,
    logInWithGithub,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
