import { createContext, useState, useEffect, ReactNode } from 'react';
import React from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  firebaseApp
} from '../utils/firebase/firebase.utils';

interface User {
  setCurrentUser: React.Dispatch<React.SetStateAction<any | null>>;
  currentUser: any | null;
  token: string | null;
  auth: boolean;
  isEmailVerified: boolean;
  setIsEmailVerified: React.Dispatch<React.SetStateAction<any | null>>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<User>({
  setCurrentUser: () => null,
  currentUser: null,
  token: null,
  auth: false,
  isEmailVerified: false,
  setIsEmailVerified: () => null,
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any| null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [auth, setAuth] = useState<boolean>(
    false || window.localStorage.getItem('auth') === 'true'
  );
  const [isEmailVerified, setIsEmailVerified] = useState<any>(false);

  const value: User = { currentUser, setCurrentUser, token, auth, isEmailVerified, setIsEmailVerified };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        const userToken = await user.getIdToken();
        setToken(userToken);
        setAuth(true);
        window.localStorage.setItem('auth', 'true');
        // Check email verification status
         // Check if the user signed in with Google
      const isGoogleSignIn = user.providerData.some(
        (provider) => provider.providerId === 'google.com'
      );

      // Update auth based on email verification, but not for Google sign-ins
      if (!isGoogleSignIn) {
        setIsEmailVerified(user.emailVerified);
      } else {
        setIsEmailVerified(true);
      }
      } else {
        setAuth(false);
        window.localStorage.setItem('auth', 'false');
        setIsEmailVerified(false);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [currentUser]);
  

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
