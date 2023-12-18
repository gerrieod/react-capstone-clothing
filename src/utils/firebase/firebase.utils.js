// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, 
    GoogleAuthProvider, createUserWithEmailAndPassword,
signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore, doc,getDoc, setDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMhZmmOfXDOLV9nGWyuhJZDdDr4hUlaak",
  authDomain: "capstone-clothing-db-e24d9.firebaseapp.com",
  projectId: "capstone-clothing-db-e24d9",
  storageBucket: "capstone-clothing-db-e24d9.appspot.com",
  messagingSenderId: "458279093432",
  appId: "1:458279093432:web:6da62fdaf4ca4e3087e04d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//google authentication providers
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


// create db
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    //check if user data exists
    if(!userSnapshot.exists()){
        //create user doc and set with user snapshot
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });

        }catch(err){
            console.log("error creating the user ", err);
        }
    } else {
        return userDocRef
    }
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{

    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);

}


export const signInAuthUserWithEmailAndPassword = async (email, password) =>{

    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);

}