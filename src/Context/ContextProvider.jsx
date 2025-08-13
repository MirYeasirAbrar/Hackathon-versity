import React, { useEffect, useState } from "react";
import Context from "./Context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    return () => unsubscribe();
  }, [])
  const value = { user, setUser, loading, createUser, logInUser };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
