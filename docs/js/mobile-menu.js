export const initMobileMenu = () => {
  const toggle = document.querySelector('.nav_mobile-toggle');
  const menu = document.getElementById('primary-nav');
  if (!toggle || !menu) {
    return;
  }

  const closeMenu = () => {
    toggle.classList.remove('is-open');
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    toggle.classList.add('is-open');
    menu.classList.add('is-open');
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
  };

  const toggleMenu = () => {
    if (toggle.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      closeMenu();
    }
  });
};
