export default class View {
  // Render methods

  renderHome() {
    this.changeContent("../views/home/home.html");
  }
  renderContact() {
    this.changeContent("../views/contact/contact.html");
  }
  renderProjects(projectsData) {
    this.changeContent("../views/projects/projects.html");
    this.listenToProjectClick(projectsData);
  }
  renderAbout() {
    this.changeContent("../views/about/about.html");
  }
  renderProfessionalXp() {
    this.changeContent("../views/professional-xp/professional-xp.html");
  }
  renderEducation() {
    this.changeContent("../views/education/education.html");
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

  changeContent(templatePath, callback) {
    const main = $("#content");

    if (main) {
      main.load(templatePath);
    }
    if (callback) {
      callback();
    }
  }
  createProjectHighlight(projectData) {
    const highlightContainer = document.getElementById("project-highlight");

    const projectHighlight = document.createElement("div");
    projectHighlight.classList.add("title-container");

    const title = document.createElement("h2");
    const subtitle = document.createElement("h5");

    title.innerText = projectData.title;
    subtitle.innerText = projectData.subtitle;

    projectHighlight.appendChild(title);
    projectHighlight.appendChild(subtitle);

    highlightContainer.innerHTML = "";
    highlightContainer.appendChild(highlightContainer);
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
