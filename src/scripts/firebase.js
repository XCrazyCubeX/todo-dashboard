// firebase.js
const firebaseConfig = {
    apiKey: "AIzaSyAYTI-MpywjzNY_NOrl1UtBVo6rs4k3SZY",
    authDomain: "todo-dashboard-eece5.firebaseapp.com",
    projectId: "todo-dashboard-eece5",
    storageBucket: "todo-dashboard-eece5.appspot.com",
    messagingSenderId: "809234933453",
    appId: "1:809234933453:web:d0195745e88df783f62b84",
};

// Initialize Firebase if it hasn't been initialized yet
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

window.auth = auth;
window.provider = provider;
