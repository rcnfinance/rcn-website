const menu = () => {
  const open = document.getElementById('menu');
  const close = document.getElementById('close');
  const menuResponsive = document.getElementById('menu-dropdown');

  open.addEventListener('click', function () {
    if (menuResponsive.classList.contains('--open')) {
      menuResponsive.classList.remove('--open');
      menuResponsive.classList.add('--close');
    } else {
      menuResponsive.classList.add('--open');
      menuResponsive.classList.remove('--close');
    }
  });
  close.addEventListener('click', function () {
    if (menuResponsive.classList.contains('--close')) {
      menuResponsive.classList.remove('--close');
      menuResponsive.classList.add('--open');
    } else {
      menuResponsive.classList.add('--close');
      menuResponsive.classList.remove('--open');
    }
  });

  const menu = document.getElementById('menu-sticky');
  const logo = document.getElementById('logo');
  let lastPosition = 0;
  window.addEventListener('scroll', function (e) {
    lastPosition = window.scrollY;
    if (lastPosition >= 100) {
      menu.classList.add('--active');
      open.classList.add('--revert');
      logo.classList.add('logo--revert');
    } else {
      menu.classList.remove('--active');
      open.classList.remove('--revert');
      logo.classList.remove('logo--revert');
    }
  });
};

export default menu