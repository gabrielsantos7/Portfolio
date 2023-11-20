import changeDivImage from "./images";

export default function handleNavItemClick(navItem: HTMLButtonElement, index: number): void {
  const navLinks = document.querySelectorAll<HTMLButtonElement>('.nav.nav-tabs .nav-item button.nav-link');

  navLinks.forEach((navLink: HTMLButtonElement) => {
    navLink.classList.remove('active-option');
  });
  navItem.classList.add('active-option');

  changeDivImage(index);
}
