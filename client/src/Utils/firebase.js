import firebase from "firebase";
const {
    REACT_APP_FIREBASE_CONFIGS_apiKey,
REACT_APP_FIREBASE_CONFIGS_authDomain,
REACT_APP_FIREBASE_CONFIGS_databaseURL,
REACT_APP_FIREBASE_CONFIGS_projectId,
REACT_APP_FIREBASE_CONFIGS_storageBucket,
REACT_APP_FIREBASE_CONFIGS_messagingSenderId,
REACT_APP_FIREBASE_CONFIGS_appId,
REACT_APP_FIREBASE_CONFIGS_measurementId,
} = process.env;

console.log(process.env);
const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_CONFIGS_apiKey,
    authDomain: REACT_APP_FIREBASE_CONFIGS_authDomain,
    databaseURL: REACT_APP_FIREBASE_CONFIGS_databaseURL,
    projectId: REACT_APP_FIREBASE_CONFIGS_projectId,
    storageBucket: REACT_APP_FIREBASE_CONFIGS_storageBucket,
    messagingSenderId: REACT_APP_FIREBASE_CONFIGS_messagingSenderId,
    appId: REACT_APP_FIREBASE_CONFIGS_appId,
    measurementId: REACT_APP_FIREBASE_CONFIGS_measurementId,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const storage = firebase.storage();

export default db;
