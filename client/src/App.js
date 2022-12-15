import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from 'react';
import Login from "./pages/Login";
import Home from "./pages/Home";
import { login, selectUser } from "../src/features/userSlice";
import { auth } from "./firebase"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
      }
    });
  }, [dispatch]);
  
  return <div>{
    user ? 
    <Home /> : 
    <Login />
  }</div>;
}

export default App;