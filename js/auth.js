// js/auth.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const msg  = document.getElementById('login-message');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const user = form.username.value.trim();
    const pass = form.password.value;

    if (user === 'campuser' && pass === 'camp1234') {
      window.location.href = 'dashboard.html';
    } else {
      msg.textContent = '❌ İstifadəçi adı və ya şifrə yanlışdır.';
      msg.style.color = '#e74c3c';
    }
  });
});
