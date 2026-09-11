const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".main-nav");

burgerMenu.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");

  burgerMenu.setAttribute("aria-expanded", isOpen);
});
