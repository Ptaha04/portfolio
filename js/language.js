
document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('langSwitcher');
  const currentLang = localStorage.getItem('lang') || 'pl';
  langSelect.value = currentLang;
  loadLang(currentLang);

  langSelect.addEventListener('change', () => {
    const lang = langSelect.value;
    localStorage.setItem('lang', lang);
    loadLang(lang);
  });

  function loadLang(lang) {
    fetch(`lang/${lang}.json`)
      .then(res => res.json())
      .then(data => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (data[key]) {
            el.innerText = data[key];
          }
        });
      });
  }
});
