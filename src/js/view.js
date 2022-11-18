export default class View {
  // Render methods

  renderHome() {
    this.changeContent("../templates/home/home.html");
  }
  renderContact() {
    this.changeContent("../templates/contact/contact.html");
  }
  renderProjects() {
    this.changeContent("../templates/projects/projects.html");
  }
  renderAbout() {
    this.changeContent("../templates/about/about.html");
  }
  renderProfessionalXp() {
    this.changeContent("../templates/professional-xp/professional-xp.html");
  }
  renderEducation() {
    this.changeContent("../templates/education/education.html");
  }
  // Utility methods
  showError(message) {
    console.log(message);
  }

  highlightNavItem(dataLink) {
    this.resetNavHighlight();
    const navItem = document.querySelector(`a[data-link=${dataLink}`);
    navItem.classList.add("active");
  }

  resetNavHighlight() {
    const navItens = document.querySelectorAll(".nav-link");
    navItens.forEach((item) => {
      item.classList.remove("active");
    });
  }

  changeContent(templatePath) {
    const main = $("#content");

    if (main) {
      main.load(templatePath);
    }
  }
  // Listen events methods
  listenToNavClick() {
    const navItens = document.querySelectorAll(".nav-link");
    navItens.forEach((item) => {
      item.addEventListener("click", (ev) => {
        this.highlightNavItem(item.dataset.link);
      });
    });
  }
}
