export const initMobileMenu = () => {
  const toggle = document.querySelector('.nav_menu-button button');
  const menu = document.getElementById('mobile-menu');
  const dropdownToggle = document.querySelector('.dropdown-mobile .is-for-dropdown');
  const dropdownMenu = document.querySelector('.dropdown-container-mobile');

  if (!toggle || !menu) {
    return;
  }

  const topPath = toggle.querySelector('.top');
  const middlePath = toggle.querySelector('.middle');
  const bottomPath = toggle.querySelector('.bottom');

  const closeMenu = () => {
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    topPath.setAttribute('d', 'M 2 2.5 L 20 2.5');
    middlePath.style.opacity = '1';
    bottomPath.setAttribute('d', 'M 2 16.346 L 20 16.346');
  };

  const openMenu = () => {
    menu.classList.add('is-open');
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    topPath.setAttribute('d', 'M 3 16.5 L 17 2.5');
    middlePath.style.opacity = '0';
    bottomPath.setAttribute('d', 'M 3 2.5 L 17 16.346');
  };

  const toggleMenu = () => {
    if (menu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      dropdownToggle.parentElement.classList.toggle('is-open');
    });
  }


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
