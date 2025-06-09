const langSwitcher = document.getElementById('langSwitcher');
const elements = document.querySelectorAll('[data-i18n]');

function loadLang(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.textContent = data[key];
      });
    });
}

langSwitcher.addEventListener('change', e => loadLang(e.target.value));
window.addEventListener('DOMContentLoaded', () => loadLang(langSwitcher.value));
