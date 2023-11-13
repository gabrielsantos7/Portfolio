document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".animated", {
    speed: 200,
    loop: true
  })
  .type("Front-end", { delay: 900 })
  .delete(9)
  .type("Back-end", { delay: 900 })
  .delete(8)
  .type("Full-Stack", { delay: 1000 })
  .delete(10)
  .go();

  new TypeIt(".print", {
    speed: 200,
    loop: true
  })
  .type("console.log", { delay: 1100 })
  .delete(11)
  .type("print", { delay: 1000 })
  .delete(5)
  .type("Console.WriteLine", { delay: 1700 })
  .delete(17)
  .type("System.out.println", { delay: 1800 })
  .delete(18)
  .go();
})