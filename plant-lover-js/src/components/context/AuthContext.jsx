import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isAuth, setIsAuth] = useState();

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(doc(db, "users", user.uid)).then((snapshot) => {
          setCurrentUser({
            email: user.email,
            uid: user.uid,
            ...snapshot.data(),
          });
        });
        setIsAuth(true);
      } else {
        setIsAuth(false);
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    logout,
    isAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default useAuth;

// useEffect(() => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       getDoc(doc(db, "users", user.uid)).then((snapshot) => {
//         setCurrentUser({
//           email: user.email,
//           ...snapshot.data(),
//         });
//       });
//       setIsAuth(true);
//     } else {
//       setIsAuth(false);
//       setCurrentUser(null);
//     }
//   });
// });
