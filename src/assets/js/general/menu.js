
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
    })
    close.addEventListener('click', function () {
      if (menuResponsive.classList.contains('--close')) {
        menuResponsive.classList.remove('--close');
        menuResponsive.classList.add('--open');
      } else {
        menuResponsive.classList.add('--close');
        menuResponsive.classList.remove('--open');
      }
    })
    ;
 }

  export default menu