import React, { ReactElement, useContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User as FirebaseUser,
  UserCredential as FirebaseUserCredential,
} from "firebase/auth";
import { Timestamp, doc, onSnapshot } from "firebase/firestore";

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
  currentUserData: UserData | null;
  isLoading: boolean | null;
};

export type UserData = {
  userName: string;
  email: string;
  plants: Array<PlantData>;
};

export type PlantData = {
  id: string;
  plantName: string;
  location: string;
  imgUrl: string;
  wateringFrequency: number;
  lastWatering: Timestamp;
  fertilizationFrequency: number;
  lastFertilization: Timestamp;
  description: string;
  isDead: boolean;
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
  const [currentUserData, setCurrentUserData] = useState<UserData | null>(null);
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

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
    setIsLoading(true);
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

  useEffect(() => {
    if (currentUser) {
      setIsLoading(true);
      const docRef = doc(db, "users", currentUser.uid);
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const downloadedUserData = docSnap.data() as UserData;
          setCurrentUserData(downloadedUserData);
        } else {
          setCurrentUserData(null);
        }
      });
      return unsubscribe;
    }
    setIsLoading(false);
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        isAuth,
        currentUserData,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default useAuth;
