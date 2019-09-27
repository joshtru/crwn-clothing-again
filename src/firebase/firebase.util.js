import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCYB5FhP8w0zdkgH6K-thCzGwcbns92IKk",
  authDomain: "crwn-db-59322.firebaseapp.com",
  databaseURL: "https://crwn-db-59322.firebaseio.com",
  projectId: "crwn-db-59322",
  storageBucket: "crwn-db-59322.appspot.com",
  messagingSenderId: "701010817494",
  appId: "1:701010817494:web:62314a74b052e0b4133477"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exits) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
