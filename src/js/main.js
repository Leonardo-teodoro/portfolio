// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import Controller from "./controller";
("./controller");
import router from "../router/router";

window.addEventListener("load", () => {
  const controller = new Controller();
  router("/", async function (ctx) {
    controller.wantsToRenderHome(ctx.hash);
  });
  router("/contact", async function () {
    controller.wantsToRenderContact();
  });
  router("/projects", async function () {
    controller.wantsToRenderProjects();
  });

  const path = location.pathname + location.search + (location.hash || "");
  router.go(path);
});
