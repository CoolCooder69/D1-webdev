import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

import { createContext, useContext } from "react";
import type ICreateUser from "./interface/createUser";
import type { IauthContextType } from "./interface/createUserContext";
 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};


//  Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireBaseAuth = getAuth(app);

export const useFirebase = () => useContext(FirebaseContext);

const FirebaseContext = createContext<IauthContextType | null>(null);
export const FirebaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const createUserWithMail = ({ email, password }: ICreateUser) => {
    return createUserWithEmailAndPassword(fireBaseAuth, email, password);
  };
  const loginInWIthMailAndPassword = ({ email, password }: ICreateUser) => {
    return signInWithEmailAndPassword(fireBaseAuth, email, password);
  };
  const loginInWithToken = (token: string) => {
    return signInWithCustomToken(fireBaseAuth, token);
  };
  const logoutUser = async (): Promise<boolean> => {
    try {
      await signOut(fireBaseAuth);
      return true;
    } catch (e) {
      return false;
    }
    return false;
  };

  return (
    <FirebaseContext.Provider
      value={{
        createUserWithMail,
        loginInWIthMailAndPassword,
        loginInWithToken,
        logoutUser,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
