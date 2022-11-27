import * as bootstrap from "bootstrap";
export default class View {
  // Render methods

  renderHome() {
    this.changeContent("../views/home/home.html");
  }
  renderContact() {
    this.changeContent("../views/contact/contact.html");
  }
  /**
   * @param getProject function to get project data
   */
  renderProjects(getProject) {
    this.changeContent("../views/projects/projects.html");
    this.listenToProjectClick(getProject);
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
    highlightContainer.style.backgroundImage = `url(${projectData.img})`;
    highlightContainer.classList.add("project-container");
    highlightContainer.classList.remove("d-none");

    const projectHighlight = document.createElement("div");
    projectHighlight.classList.add(
      "title-container",
      "d-flex",
      "flex-column",
      "justify-content-around"
    );
    const titleContainer = document.createElement("div");
    const title = document.createElement("h2");
    const subtitle = document.createElement("h5");
    const repoIcon = document.createElement("i");
    const repoAnchor = document.createElement("a");

    repoIcon.classList.add("bi", "bi-github");
    if (projectData.project_repository) {
      repoAnchor.setAttribute("href", projectData.project_repository);
      repoIcon.appendChild(repoAnchor);
    } else {
      repoIcon.classList.add("disabled");
      repoIcon.setAttribute("data-bs-toggle", "tooltip");
      repoIcon.setAttribute("data-bs-title", "Repositório privado");

      new bootstrap.Tooltip(repoIcon);
    }

    title.innerText = projectData.title;
    subtitle.innerText = projectData.subtitle;

    projectHighlight.appendChild(repoIcon);
    titleContainer.appendChild(title);
    titleContainer.appendChild(subtitle);
    projectHighlight.appendChild(titleContainer);

    const descriptionContainer = document.createElement("div");
    const description = document.createElement("p");

    description.innerText = projectData.description;
    if (projectData.project_link) {
      description.innerText += " Disponível em: ";
      const link = document.createElement("a");
      link.setAttribute("href", projectData.project_link);
      link.target = "_blank";
      link.innerText = projectData.project_link;
      description.append(link);
    }
    descriptionContainer.appendChild(description);
    projectHighlight.appendChild(descriptionContainer);

    highlightContainer.innerHTML = "";

    highlightContainer.appendChild(projectHighlight);
    highlightContainer.scrollIntoView();
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
  // Uses event delegation to handle project click, that searchs for project by
  // name and create a highlight based on it's data
  /**
   * @param callback to get projects data
   */
  listenToProjectClick(callback) {
    document
      .getElementById("content")
      .addEventListener("click", async (event) => {
        if (event.target && event.target.closest(".project-container")) {
          const projectData = await callback(
            event.target.closest(".project-container").dataset.project
          );
          this.createProjectHighlight(projectData);
        }
      });
  }
}
