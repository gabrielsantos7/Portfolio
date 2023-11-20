import handleNavItemClick from './nav';
import handleDropdownItemClick from './dropdown';
import TechnologyHandler from './TechnologyHandler';

const navItems = document.querySelectorAll<HTMLButtonElement>(
   '.nav.nav-tabs .nav-item button.nav-link',
);
const dropdownItems = document.querySelectorAll<HTMLLIElement>
(
   '.dropdown-menu .dropdown-item',
);

const techImages = document.querySelectorAll<HTMLImageElement>(".content img");

const habilitiesContainer = document.querySelector<HTMLDivElement>('#habilities-container');

const techHandler = new TechnologyHandler();

document.addEventListener('DOMContentLoaded', () => {
  techHandler.createTechImages();
});

habilitiesContainer?.addEventListener('mouseout', () => {
  techHandler.updateTechInfo();
})

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

techImages.forEach((image, index) => {
  image.addEventListener("mouseover", () => {
    techHandler.updateTechInfo(index);
  });
});