export default function handleDropdownItemClick(item: Element, index: number) {
  const dropdownToggle = document.querySelector('.dropdown-toggle-split')!;
  const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
  const divs = document.querySelectorAll('.content > div');

  dropdownItems.forEach((dropdownItem) => {
    dropdownItem.classList.remove('active');
  });

  item.classList.add('active');
  dropdownToggle.textContent = item.textContent;

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
