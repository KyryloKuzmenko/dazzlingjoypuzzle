document.addEventListener('DOMContentLoaded', () => {
  const menuOpenBtn = document.querySelector('.open-menu-btn');
  const menuCloseBtn = document.querySelector('.close-menu-btn');
  const backdrop = document.querySelector('.backdrop');
  const headerLogo = document.querySelector('.header-logo');
  const backdropLinks = document.querySelectorAll('.backdrop-item a');
  const menuDesktopLinks = document.querySelectorAll('.hiden-menu-link');
  const sections = document.querySelectorAll('section[id]');

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

  function highlightMenu() {
    const scrollY = window.scrollY + 10;
    let currentSectionId = null;

    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        currentSectionId = section.id;
      }
    });

    menuDesktopLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', highlightMenu);
  highlightMenu();
});
