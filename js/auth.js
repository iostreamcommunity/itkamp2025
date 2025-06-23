const ACCOUNTS = {
  smehemmed8: '1234',
  saygun8:    '5678',
  ssona8:     '2345',
  salidavud8: '3456',
  saysu8:     '4567',
  sürqan7:    '5678',
  smalek4:    '6789',
  sbahar7:    '7890',
  sfariz7:    '8901',
  skonan6:    '9012',
  selvin7:    '0123',
  selcan6:    '1357',
  snihad7:    '2468',
  smahmud6:   '3579',
  sahmed5:    '4680',
  sonur6:     '5791',
  sselcuq7:   '6802',
  syasin3:    '7913',
  sbəhlul7:   '8024',
  snihad7v2:  '9135',
  snurhan7:   '0246',
  silkin6:    '1358',
  sfiruz5:    '2469',
  stunar8:    '3570',
  srasul9:    '4681',
};
const GROUP = {
  smehemmed8: 'A',
  saygun8:    'A',
  ssona8:     'A',
  salidavud8: 'A',
  saysu8:     'A',
  sürqan7:    'B',
  smalek4:    'B',
  sbahar7:    'A',
  sfariz7:    'A',
  skonan6:    'A',
  selvin7:    'B',
  selcan6:    'B',
  snihad7:    'B',
  smahmud6:   'B',
  sahmed5:    'B',
  sonur6:     'B',
  sselcuq7:   'B',
  syasin3:    'B',
  sbəhlul7:   'A',
  snihad7v2:  'B',
  snurhan7:   'B',
  silkin6:    'B',
  sfiruz5:    'B',
  stunar8:    'B',
  srasul9:    'B',
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const user  = form.username.value.trim().toLowerCase();
  const pass  = form.password.value.trim();
  const msg   = document.getElementById('login-message');

  if (ACCOUNTS[user] && ACCOUNTS[user] === pass) {
    const page = GROUP[user] === 'A' ? 'pageA.html' : 'pageB.html';
    window.location.href = page;
  } else {
    msg.textContent = '❌ İstifadəçi adı və ya şifrə yanlışdır.';
    msg.style.color = '#e74c3c';
  }
});
});
