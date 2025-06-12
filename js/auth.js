// js/auth.js
// simple in-memory allow-list
const ALLOWED = {
  "campuser": "camp1234",    // username: password
  // add more here as needed:
  // "alice": "alicePass",
  // "bob":   "bobPass"
};

// redirect to login if not authenticated
function requireAuth() {
  if (!sessionStorage.getItem("loggedInUser")) {
    window.location = "login.html";
  }
}

// handle login form
const loginForm = document.getElementById("login-form");
if (loginForm) {
  const u = document.getElementById("login-username");
  const p = document.getElementById("login-password");
  const msg = document.getElementById("login-message");
  document.getElementById("login-btn").onclick = () => {
    const user = u.value.trim();
    const pass = p.value;
    if (ALLOWED[user] && ALLOWED[user] === pass) {
      sessionStorage.setItem("loggedInUser", user);
      window.location = "dashboard.html";
    } else {
      msg.textContent = "Yanlış istifadəçi adı və ya şifrə.";
    }
  };
}

// handle logout on dashboard
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  requireAuth(); // protect page
  logoutBtn.onclick = () => {
    sessionStorage.removeItem("loggedInUser");
    window.location = "index.html";
  };
}
