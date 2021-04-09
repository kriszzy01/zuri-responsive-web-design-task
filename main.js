const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-links");

hamburger.onclick = () => {
  let currentMenuState = hamburger.getAttribute("aria-expanded");
  let nextMenuState = currentMenuState === "true" ? "false" : "true";

  hamburger.setAttribute("aria-expanded", `${nextMenuState}`);
  document.body.setAttribute("data-noscroll", `${nextMenuState}`); //prevent scrolling

  mobileNav.classList.toggle("mobile");
};
