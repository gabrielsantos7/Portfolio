document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".animated", {
    speed: 200,
    // strings: ["Front-end", "Back-end", "Full-Stack"],
    loop: true
  })
  .type("Front-end", { delay: 900 })
  .delete(9)
  .type("Back-end", { delay: 900 })
  .delete(8)
  .type("Full-Stack", { delay: 1000 })
  .delete(10)
  .go();
})