import { createContext, useState, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  token: null,
  auth: false, // Initialize auth state
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem('auth') === 'true'
  );
  const value = { currentUser, setCurrentUser, token, auth }; // Include auth in the context value

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        const userToken = await user.getIdToken();
        setToken(userToken);
        setAuth(true); // Update auth state when user is authenticated
        window.localStorage.setItem('auth', 'true'); // Store in local storage
      } else {
        setAuth(false); // Update auth state when user is not authenticated
        window.localStorage.setItem('auth', 'false'); // Store in local storage
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
