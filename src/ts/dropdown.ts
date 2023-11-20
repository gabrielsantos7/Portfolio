import changeDivImage from "./images";

export default function handleDropdownItemClick(item: HTMLLIElement, index: number): void {
  const dropdownToggle = document.querySelector<HTMLButtonElement>('.dropdown.d-md-none .dropdown-toggle')!;
const dropdownItems = document.querySelectorAll<HTMLLIElement>('.dropdown.d-md-none .dropdown-item')!;

  dropdownItems.forEach((dropdownItem: HTMLLIElement) => {
    dropdownItem.classList.remove('active');
  });

  item.classList.add('active');
  dropdownToggle.textContent = item.textContent;

  changeDivImage(index);
}