import { initializeApp } from 'firebase/app'

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDC4Zo_Cfgzxa2ZQFmkvwRtDl0T3qctpK8",
    authDomain: "crwn-db-18cf0.firebaseapp.com",
    projectId: "crwn-db-18cf0",
    storageBucket: "crwn-db-18cf0.appspot.com",
    messagingSenderId: "123946358777",
    appId: "1:123946358777:web:de2313c2212bf74f090f28"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }catch(error){
            console.log('error creating user', error)
        }
    }

    return userDocRef
}
