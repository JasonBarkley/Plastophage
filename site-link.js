(() => {
  const params = new URLSearchParams(location.search);
  const lang = (params.get('lang') || '').toLowerCase();
  const isEn = lang === 'en';
  const href = isEn ? 'https://plastophage.com/en/' : 'https://plastophage.com/';

  // Link permanente al sito, visibile nell'app completa.
  if (!document.getElementById('siteLink')) {
    const anchor = document.getElementById('inviteBar') || document.querySelector('.head');
    if (anchor) {
      const link = document.createElement('a');
      link.id = 'siteLink';
      link.className = 'btn ghost';
      link.href = href;
      link.textContent = 'PLASTOPHAGE.COM ↗';
      link.setAttribute('aria-label', isEn ? 'Go to the PLASTOPHAGE website' : 'Vai al sito PLASTOPHAGE');
      link.style.margin = '8px 0 12px';
      anchor.insertAdjacentElement('afterend', link);
    }
  }

  // Nella demo, mostra il ritorno al sito solo dopo che il ceppo è stato liberato.
  const plain = document.getElementById('plain');
  const keyInput = document.getElementById('okey');
  if (!plain || !keyInput || document.getElementById('demoReturnSite')) return;

  const back = document.createElement('a');
  back.id = 'demoReturnSite';
  back.className = 'btn';
  back.href = href;
  back.textContent = isEn ? '← BACK TO PLASTOPHAGE.COM' : '← TORNA A PLASTOPHAGE.COM';
  back.setAttribute('aria-label', isEn ? 'Back to the PLASTOPHAGE website' : 'Torna al sito PLASTOPHAGE');
  back.style.display = 'none';
  back.style.marginTop = '14px';
  plain.insertAdjacentElement('afterend', back);

  const updateDemoReturn = () => {
    const demoCompleted = keyInput.value.trim().toLowerCase() === 'demo' && plain.classList.contains('show');
    back.style.display = demoCompleted ? 'flex' : 'none';
  };

  const observer = new MutationObserver(updateDemoReturn);
  observer.observe(plain, { attributes: true, attributeFilter: ['class'] });
  keyInput.addEventListener('input', updateDemoReturn);
  updateDemoReturn();
})();
