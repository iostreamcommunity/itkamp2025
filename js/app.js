// js/app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVEdKPlRuPuUllZbpo92UI54xifYily9s",
  authDomain: "dusherge-auth.firebaseapp.com",
  projectId: "dusherge-auth",
  storageBucket: "dusherge-auth.firebasestorage.app",
  messagingSenderId: "146901857317",
  appId: "1:146901857317:web:c85e2c7bfd5d4c0497bbcc",
  measurementId: "G-CBXZLPL9HV"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email    = document.getElementById('email');
const password = document.getElementById('password');
const msgBox   = document.getElementById('message');

document.getElementById('signup').onclick = () =>
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => { msgBox.textContent = 'Signed up! Redirecting…'; })
    .catch(e => msgBox.textContent = e.message);

document.getElementById('login').onclick = () =>
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => { window.location = 'dashboard.html'; })
    .catch(e => msgBox.textContent = e.message);

if (window.location.pathname.endsWith('dashboard.html')) {
  onAuthStateChanged(auth, user => {
    if (!user) window.location = 'login.html';
  });
  document.getElementById('logout').onclick = () =>
    signOut(auth).then(() => window.location = 'index.html');
}
