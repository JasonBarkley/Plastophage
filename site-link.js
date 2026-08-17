(() => {
  if (document.getElementById('siteLink')) return;
  const anchor = document.getElementById('inviteBar') || document.querySelector('.head');
  if (!anchor) return;
  const params = new URLSearchParams(location.search);
  const lang = (params.get('lang') || '').toLowerCase();
  const href = lang === 'en' ? 'https://plastophage.com/en/' : 'https://plastophage.com/';
  const link = document.createElement('a');
  link.id = 'siteLink';
  link.className = 'btn ghost';
  link.href = href;
  link.textContent = 'PLASTOPHAGE.COM ↗';
  link.setAttribute('aria-label', 'Vai al sito PLASTOPHAGE');
  link.style.margin = '8px 0 12px';
  anchor.insertAdjacentElement('afterend', link);
})();
