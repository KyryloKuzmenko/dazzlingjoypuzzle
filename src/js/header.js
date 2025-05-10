document.addEventListener('DOMContentLoaded', () => {
  const menuOpenBtn = document.querySelector('.open-menu-btn');
  const menuCloseBtn = document.querySelector('.close-menu-btn');
  const backdrop = document.querySelector('.backdrop');
  const headerLogo = document.querySelector('.header-logo');
  const backdropLinks = document.querySelectorAll('.backdrop-item a');

  function toggleMenu(show) {
    backdrop.classList.toggle('show', show);
    menuOpenBtn.style.display = show ? 'none' : 'block';
    menuCloseBtn.style.display = show ? 'block' : 'none';
    headerLogo.style.display = show ? 'none' : 'block';
    document.body.style.overflow = show ? 'hidden' : 'auto';
  }

  menuOpenBtn?.addEventListener('click', () => toggleMenu(true));
  menuCloseBtn?.addEventListener('click', () => toggleMenu(false));

  backdropLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) toggleMenu(false);
  });
});
