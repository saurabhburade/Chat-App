import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDgfCdKbVc8blDf_gUSbJMLMPkoS1Aw360",
    authDomain: "slack-clone-test1.firebaseapp.com",
    databaseURL: "https://slack-clone-test1.firebaseio.com",
    projectId: "slack-clone-test1",
    storageBucket: "slack-clone-test1.appspot.com",
    messagingSenderId: "589618908573",
    appId: "1:589618908573:web:9ab03f58c5c4f39821b374",
    measurementId: "G-VR3KL3PVVC",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
export const storage=firebase.storage()

export  default db