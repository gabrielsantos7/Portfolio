import handleNavItemClick from './nav';
import handleDropdownItemClick from './dropdown';
import technologies from './technologies';

const navItems = document.querySelectorAll<HTMLButtonElement>(
   '.nav.nav-tabs .nav-item button.nav-link',
);
const dropdownItems = document.querySelectorAll<HTMLLIElement>(
   '.dropdown-menu .dropdown-item',
);

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

