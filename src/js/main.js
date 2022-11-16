// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import Controller from "./controller";
("./controller");
import router from "../router/router";

const navItens = document.querySelector("a[href='#contact-section']");

console.log(navItens);

window.addEventListener("load", () => {
  const controller = new Controller();
  router("/", async function (ctx) {
    controller.wantsToRenderHome();
  });
  router("/contact", async function (ctx) {
    controller.wantsToRenderContact();
  });
  router("/projects", async function (ctx) {
    controller.wantsToRenderProjects();
  });

  const path = location.pathname + location.search + (location.hash || "");
  router.go(path);
});
