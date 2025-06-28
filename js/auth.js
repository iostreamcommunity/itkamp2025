const ACCOUNTS = {
  smehemmed8: '4837',
  qmehri8:    '9204',
  asona8:     '7561',
  aalidavud8: '3185',
  aaysu8:     '6479',
  sfurqan7:   '5942',
  tmelek4:    '8306',
  qbahar7:    '2179',
  efariz7:    '6490',
  ekenan6:    '3752',
  helvin7:    '5813',
  aelcan6:    '7034',
  mnihad7:    '4928',
  mmahmud6:   '8641',
  rahmed5:    '5397',
  zonur6:     '9275',
  nselcuq7:   '2461',
  ryasin3:    '6158',
  hbehlul7:   '3804',
  mnihad72:  '7492',
  mnurhan7:   '1583',
  milkin6:    '8064',
  efiruz5:    '4927',
  btunar8:    '6359',
  srasul9:    '2748'
};

const GROUP = {
  smehemmed8: 'A',
  qmehri8:    'A',
  asona8:     'A',
  aalidavud8: 'A',
  aaysu8:     'A',
  sfurqan7:   'A',
  tmelek4:    'B',
  qbahar7:    'A',
  efariz7:    'A',
  ekenan6:    'A',
  helvin7:    'A',
  aelcan6:    'B',
  mnihad7:    'B',
  mmahmud6:   'B',
  rahmed5:    'B',
  zonur6:     'B',
  nselcuq7:   'B',
  ryasin3:    'B',
  hbehlul7:   'A',
  mnihad72:  'B',
  mnurhan7:   'B',
  milkin6:    'B',
  efiruz5:    'B',
  btunar8:    'B',
  srasul9:    'B'
};

const PROFILES = {
  smehemmed8: 'Məhəməd',
  qmehri8:    'Mehri',
  asona8:     'Sona',
  aalidavud8: 'Alidavud',
  aaysu8:     'Aysu',
  sfurqan7:   'Fürqan',
  tmelek4:    'Mələk',
  qbahar7:    'Bahar',
  efariz7:    'Fariz',
  ekenan6:    'Kənan',
  helvin7:    'Elvin',
  aelcan6:    'Elcan',
  mnihad7:    'Nihad',
  mmahmud6:   'Mahmud',
  rahmed5:    'Ahmed',
  zonur6:     'Onur',
  nselcuq7:   'Səlcuq',
  ryasin3:    'Yasin',
  hbehlul7:   'Bəhlul',
  mnihad72:  'Nihad',
  mnurhan7:   'Nurhan',
  milkin6:    'İlkin',
  efiruz5:    'Firuz',
  btunar8:    'Tunar',
  srasul9:    'Rəsul'
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const msg  = document.getElementById('login-message');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const user = form.username.value.trim().toLowerCase();
    const pass = form.password.value.trim();

    if (ACCOUNTS[user] && ACCOUNTS[user] === pass) {
      sessionStorage.setItem('fullName', PROFILES[user] || user);
      const targetPage = GROUP[user] === 'A' ? 'LxDSFJKSAssdaflJSDFK.html' : 'BCAVAJSsdafakjfaFSDKAFA.html';
      window.location.href = targetPage;
    } else {
      msg.textContent = '❌ İstifadəçi adı və ya şifrə yanlışdır.';
      msg.style.color = '#e74c3c';
    }
  });
});
