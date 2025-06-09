const translations = {};
let currentLang = 'pl';
fetch('lang/i18n.json')
  .then(res => res.json())
  .then(data => { Object.assign(translations, data); setLang(currentLang); });
document.getElementById('languageSwitcher').addEventListener('change', e => {
  currentLang = e.target.value; setLang(currentLang);
});
function setLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key];
  });
}