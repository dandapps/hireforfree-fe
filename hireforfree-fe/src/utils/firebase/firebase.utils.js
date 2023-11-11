// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { getFirestore,doc,getDoc,setDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCMg6U2fhALiC4kCbheBdnAJyhFME7oHP8",
  authDomain: "hireforfree-db.firebaseapp.com",
  projectId: "hireforfree-db",
  storageBucket: "hireforfree-db.appspot.com",
  messagingSenderId: "1012580929957",
  appId: "1:1012580929957:web:19ab8e75cd8190fb6a184c",
  measurementId: "G-9G270REM8Q"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    promt: "select-account"
})
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);

export const db = getFirestore();

//Below methodmis to get data form authenmtication and store it in fireStore Database
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef)
    const userSnapshot =  await getDoc(userDocRef);
    console.log(userSnapshot)
  //If user data doesnot exist on DB then create  or set the   document with the data from userAuth in my Collection
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        console.log(userAuth)
        const createdAt = new Date();
        try {
            await setDoc(
                userDocRef, {
                    displayName,
                email,
                createdAt,
                ...additionalInformation,
            }
            )
            
        } catch (error) {
            console.log('Erorr while creating the user:', error.message);
        }
    }

    return userDocRef;
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback); 