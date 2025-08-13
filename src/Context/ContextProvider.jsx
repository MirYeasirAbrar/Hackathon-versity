import React, { useEffect, useState } from "react";
import Context from "./Context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    axios.get(`http://localhost:7254/users/${user?.email}`).then((res) => {
      setCurrUser(res.data);
    });
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  console.log(currUser);
  const value = {
    user,
    setUser,
    loading,
    createUser,
    logInUser,
    logOutUser,
    currUser,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
