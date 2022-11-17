import { changeContent, getFileContent } from "../utils/util.js";
export default class View {
  // Render methods

  async renderHome(hash) {
    changeContent(await getFileContent("../pages/home.html"));
    const section = document.getElementById(hash);
    if (section) window.scrollTo(0, section.offsetTop);
  }
  async renderContact() {
    changeContent(await getFileContent("../pages/contact.html"));
  }
  async renderProjects() {
    changeContent(await getFileContent("../pages/projects.html"));
  }
  // Utility methods
  showError(message) {
    console.log(message);
  }

  highlightNavItem(href) {
    this.resetNavHighlight();
    console.log(href);
    const navItem = document.querySelector(`a[href="${href}"]`);
    console.log(navItem);
    navItem.classList.add("active");
  }

  resetNavHighlight() {
    const navItens = document.querySelectorAll(".nav-link");
    navItens.forEach((item) => {
      item.classList.remove("active");
    });
  }
  // Listen events methods
  listenToNavClick() {
    const navItens = document.querySelectorAll(".nav-link");
    navItens.forEach((item) => {
      item.addEventListener("click", (ev) => {
        this.highlightNavItem(item.getAttribute("href"));
      });
    });
  }
}
