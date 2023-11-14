// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, Auth, User, UserCredential, sendEmailVerification as sendVerificationEmail, sendPasswordResetEmail } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, Firestore, DocumentReference, DocumentSnapshot } from 'firebase/firestore'

// Your web app's Firebase configuration
import { getAnalytics } from "firebase/analytics";

interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  }

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyCMg6U2fhALiC4kCbheBdnAJyhFME7oHP8",
  authDomain: "hireforfree-db.firebaseapp.com",
  projectId: "hireforfree-db",
  storageBucket: "hireforfree-db.appspot.com",
  messagingSenderId: "1012580929957",
  appId: "1:1012580929957:web:19ab8e75cd8190fb6a184c",
  measurementId: "G-9G270REM8Q"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig as FirebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  promt: "select-account"
})

export const auth: Auth = getAuth();
export const signInWithGooglePopup = (): Promise<UserCredential> => signInWithPopup(auth, googleProvider);

export const db: Firestore = getFirestore();

// Below method is to get data from authentication and store it in Firestore Database
export const createUserDocumentFromAuth = async (userAuth: User, additionalInformation: Record<string, any> = {}): Promise<DocumentReference> => {
  const userDocRef: DocumentReference = doc(db, 'users', userAuth.uid);
  const userSnapshot: DocumentSnapshot = await getDoc(userDocRef);

  // If user data does not exist in DB then create or set the document with the data from userAuth in my Collection
  if (!userSnapshot.exists()) {
    const { displayName, email,uid } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(
        userDocRef, {
          email,
          createdAt,
          userId : uid,
          ...additionalInformation,
        }
      );
    } catch (error: any) {
      console.error('Error while creating the user:', error.message);
    }
  }
  console.log(`User record: ${userAuth}`);
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential | User | any> => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential | User | any> => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const sendEmailVerification = async (user: any) => {
  try {
    await sendVerificationEmail(user);
  } catch (error: any) {
    console.error('Email verification error:', error.message);
  }
};

export const sendPasswordChangeEmail = async (email: string) => {
  try{
    await sendPasswordResetEmail(auth,email);
  } catch(error: any) {
    console.error('Passwordreset error:', error.message);
  }
}


export const signOutUser = async (): Promise<void> => await signOut(auth);

export const onAuthStateChangedListener = (callback: (user: User | null) => void): (() => void) => onAuthStateChanged(auth, callback);

