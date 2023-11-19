import handleNavItemClick from './nav';
import handleDropdownItemClick from './dropdown';

const navItems = document.querySelectorAll('.nav.nav-tabs > .nav-item > .nav-link');
const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');

navItems.forEach((navItem, index) => {
  navItem.addEventListener('click', () => {
    handleNavItemClick(navItem, index);
  });
});

dropdownItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    handleDropdownItemClick(item, index);
  });
});
