import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../pages/registration/authentication/fitebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // google sign in
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(res => {
        setUser(res.user)
      })
  }


  return {
    user,
    googleSignIn
  };
}

export default useFirebase;