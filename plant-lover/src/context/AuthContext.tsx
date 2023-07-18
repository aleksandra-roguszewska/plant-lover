import React, { ReactElement, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User as FirebaseUser,
  UserCredential as FirebaseUserCredential,
} from "firebase/auth";

type AuthContextProviderProps = {
  children: ReactElement;
};

type AuthContextState = {
  currentUser: FirebaseUser | null;
  isAuth: boolean | null;
  register: (
    email: string,
    password: string
  ) => Promise<FirebaseUserCredential>;
  login: (email: string, password: string) => Promise<FirebaseUserCredential>;
  logout: () => Promise<void>;
};

const defaultContextValue = {} as AuthContextState;

export const AuthContext = React.createContext(defaultContextValue);

const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  function register(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setIsAuth(true);
      } else {
        setIsAuth(false);
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default useAuth;
