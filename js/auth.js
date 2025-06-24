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
  mnihad7v2:  '7492',
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
  sfurqan7:   'B',
  tmelek4:    'B',
  qbahar7:    'A',
  efariz7:    'A',
  ekenan6:    'A',
  helvin7:    'B',
  aelcan6:    'B',
  mnihad7:    'B',
  mmahmud6:   'B',
  rahmed5:    'B',
  zonur6:     'B',
  nselcuq7:   'B',
  ryasin3:    'B',
  hbehlul7:   'A',
  mnihad7v2:  'B',
  mnurhan7:   'B',
  milkin6:    'B',
  efiruz5:    'B',
  btunar8:    'B',
  srasul9:    'B'
};

const PROFILES = {
  smehemmed8: 'Məhəməd Salmanov',
  qmehri8:    'Mehri Qasımzadə',
  asona8:     'Sona Əsgərova',
  aalidavud8: 'Alidavud Alışov',
  aaysu8:     'Aysu Abbasova',
  sfurqan7:   'Fürqan Süleymanlı',
  tmelek4:    'Mələk Təhməzli',
  qbahar7:    'Bahar Qasımzadə',
  efariz7:    'Fariz Əliyev',
  ekenan6:    'Kənan Əlili',
  helvin7:    'Elvin Hüseynov',
  aelcan6:    'Elcan Ağazadə',
  mnihad7:    'Nihad Məmmədli',
  mmahmud6:   'Mahmud Mehrəlizadə',
  rahmed5:    'Ahmed Ramazan',
  zonur6:     'Onur Zaman',
  nselcuq7:   'Səlcuq Nağıyev',
  ryasin3:    'Yasin Ramazan',
  hbehlul7:   'Bəhlul Həsrətzadə',
  mnihad7v2:  'Nihad Məmmədli (Nicat)',
  mnurhan7:   'Nurhan Məmmədli',
  milkin6:    'İlkin Məmmədov',
  efiruz5:    'Firuz Əliyev',
  btunar8:    'Tunar Babayev',
  srasul9:    'Rəsul Şükür'
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
