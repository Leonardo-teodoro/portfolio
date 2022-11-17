// Import our custom CSS
import "../scss/styles.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import routes from "../routes";
window.addEventListener("load", () => {
  const navItens = document.querySelectorAll(".nav-link");
  navItens.forEach((item) => {
    item.addEventListener("click", () => {
      routes[item.dataset.link]();
    });
  });
});
