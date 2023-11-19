export default function handleNavItemClick(navItem: Element, index: number) {
  const navItems = document.querySelectorAll('.nav.nav-tabs > .nav-item > .nav-link');
  const divs = document.querySelectorAll('.content > div');
  navItems.forEach((item) => {
    item.classList.remove('active-option');
  });
  navItem.classList.add('active-option');

  divs.forEach((div, i) => {
    if (i === index) {
      div.classList.remove('d-none');
      div.classList.add('d-flex');
    } else {
      div.classList.add('d-none');
      div.classList.remove('d-flex');
    }
  });
}
