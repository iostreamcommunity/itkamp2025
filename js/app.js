import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey:    "AIzaSy…",
  authDomain:"camp-auth.firebaseapp.com",
  projectId: "camp-auth",
  // …
};
initializeApp(firebaseConfig);
const auth = getAuth();

const ALLOWED_USERS = ["testuser@example.com"];

const loginForm = document.getElementById("login-form");
if (loginForm) {
  const emailIn  = document.getElementById("login-email");
  const pwdIn    = document.getElementById("login-password");
  const msgBox   = document.getElementById("login-message");

  document.getElementById("login-btn").onclick = () => {
    const email = emailIn.value.trim();
    const pwd   = pwdIn.value;
    signInWithEmailAndPassword(auth, email, pwd)
      .then(({ user }) => {
        if (!ALLOWED_USERS.includes(user.email)) {

          signOut(auth);
          msgBox.textContent = "Bu hesab icazəli deyil.";
        } else {
          window.location = "dashboard.html";
        }
      })
      .catch(e => msgBox.textContent = e.message);
  };
}

if (window.location.pathname.endsWith("dashboard.html")) {
  onAuthStateChanged(auth, user => {
    if (!user || !ALLOWED_USERS.includes(user.email)) {
      signOut(auth);
      window.location = "login.html";
    }
  });
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) logoutBtn.onclick = () =>
    signOut(auth).then(() => window.location = "index.html");
}
