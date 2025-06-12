// js/app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// ── Your real Firebase config ───────────────────────────────
const firebaseConfig = {
  apiKey:    "AIzaSy…",
  authDomain:"camp-auth.firebaseapp.com",
  projectId: "camp-auth",
  // …
};
initializeApp(firebaseConfig);
const auth = getAuth();

// ── ALLOW-LIST ────────────────────────────────────────────────
// Only users in this list may proceed to dashboard.html
const ALLOWED_USERS = ["testuser@example.com"];

// ── LOGIN FLOW ───────────────────────────────────────────────
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
          // not allowed → sign out immediately
          signOut(auth);
          msgBox.textContent = "Bu hesab icazəli deyil.";
        } else {
          // allowed → go to dashboard
          window.location = "dashboard.html";
        }
      })
      .catch(e => msgBox.textContent = e.message);
  };
}

// ── PROTECT DASHBOARD & LOGOUT ───────────────────────────────
if (window.location.pathname.endsWith("dashboard.html")) {
  onAuthStateChanged(auth, user => {
    if (!user || !ALLOWED_USERS.includes(user.email)) {
      // not logged in or not on allow-list
      signOut(auth);
      window.location = "login.html";
    }
  });
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) logoutBtn.onclick = () =>
    signOut(auth).then(() => window.location = "index.html");
}
