export default function changeDivImage(index: number): void {
  const divs = document.querySelectorAll('.content > div');

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