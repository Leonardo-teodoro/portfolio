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
  // Utility - global
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
  // Utility - Project Highlight
  createProjectHighlight(projectData) {
    const highlightContainer = document.getElementById("project-highlight");
    highlightContainer.style.backgroundImage = `url(${projectData.img})`;
    highlightContainer.classList.add("project-container");
    highlightContainer.classList.remove("d-none");

    const repoIcon = this.createIconsContainer(
      projectData.project_repository,
      projectData.techs
    );

    const projectHighlight = document.createElement("div");
    projectHighlight.classList.add(
      "title-container",
      "d-flex",
      "flex-column",
      "justify-content-around"
    );
    const titleContainer = this.createTitleContainer(
      projectData.title,
      projectData.subtitle
    );

    projectHighlight.appendChild(titleContainer);

    const descriptionContainer = this.createDescriptionContainer(
      projectData.description,
      projectData.project_link
    );
    projectHighlight.appendChild(descriptionContainer);

    highlightContainer.innerHTML = "";

    highlightContainer.appendChild(repoIcon);
    highlightContainer.appendChild(projectHighlight);
    highlightContainer.scrollIntoView();
  }

  createIconsContainer(projectRepository, techs) {
    const iconContainer = document.createElement("div");
    const repoIcon = document.createElement("i");
    const repoAnchor = document.createElement("a");
    iconContainer.classList.add("icons-container");
    repoIcon.classList.add("bi", "bi-github");
    if (projectRepository) {
      repoAnchor.setAttribute("href", projectRepository);
      repoIcon.appendChild(repoAnchor);
    } else {
      repoIcon.classList.add("disabled");
      repoIcon.setAttribute("data-bs-toggle", "tooltip");
      repoIcon.setAttribute("data-bs-title", "Repositório privado");

      new bootstrap.Tooltip(repoIcon);
    }
    iconContainer.appendChild(repoIcon);
    const techIcons = document.createElement("div");
    for (const tech of techs) {
      techIcons.appendChild(this.createTechModal(tech));
    }
    techIcons.classList.add("tech-icons");
    iconContainer.appendChild(techIcons);

    return iconContainer;
  }

  createTitleContainer(titleText, subtitleText) {
    const titleContainer = document.createElement("div");
    const title = document.createElement("h2");
    const subtitle = document.createElement("h5");
    title.innerText = titleText;
    subtitle.innerText = subtitleText;

    titleContainer.appendChild(title);
    titleContainer.appendChild(subtitle);
    return titleContainer;
  }

  createDescriptionContainer(descriptionText, projectLink) {
    const descriptionContainer = document.createElement("div");
    const description = document.createElement("p");

    description.innerText = descriptionText;
    if (projectLink) {
      description.innerText += " Disponível em: ";
      const link = document.createElement("a");
      link.setAttribute("href", projectLink);
      link.target = "_blank";
      link.innerText = projectLink;
      description.append(link);
    }
    descriptionContainer.appendChild(description);
    return descriptionContainer;
  }

  // Utility - Tech Modal
  createTechModal(tech) {
    const techModal = document.createElement("div");
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.classList.add("btn", "btn-light");
    btn.setAttribute("data-bs-toggle", "modal");
    btn.setAttribute("data-bs-target", `#${tech.icon}`);

    const icon = document.createElement("img");
    icon.classList.add("bi", `bi-${tech.icon}`);
    icon.src = `../images/${tech.icon}.svg`;
    icon.classList.add("btn-icon");

    btn.appendChild(icon);

    techModal.appendChild(btn);
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal", "fade");
    modalContainer.id = tech.icon;
    modalContainer.setAttribute("tabindex", "-1");
    modalContainer.setAttribute("aria-labelledby", `${tech.icon}-label`);
    modalContainer.setAttribute("aria-hidden", "true");

    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    const header = document.createElement("h1");
    header.classList.add("modal-title");
    header.id = `${tech.icon}-label`;
    header.innerText = tech.name;
    const quitButton = document.createElement("button");
    quitButton.setAttribute("type", "button");
    quitButton.classList.add("btn-close");
    quitButton.setAttribute("data-bs-dismiss", "modal");
    quitButton.setAttribute("aria-label", "Close");

    modalHeader.appendChild(header);
    modalHeader.appendChild(quitButton);

    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    const description = document.createElement("p");
    description.innerText = tech.description;

    const prosContainer = document.createElement("div");
    const prosTitle = document.createElement("h2");
    prosTitle.innerText = "Pros";
    const prosIcon = document.createElement("i");
    //bi-arrow-up-circle
    prosIcon.classList.add("bi", "bi-arrow-up-circle");
    prosTitle.appendChild(prosIcon);

    const prosList = document.createElement("ul");

    for (const pro of tech.pros) {
      const proItem = document.createElement("li");
      proItem.innerText = pro;
      prosList.append(proItem);
    }
    prosContainer.appendChild(prosTitle);
    prosContainer.appendChild(prosList);

    const consContainer = document.createElement("div");
    const consTitle = document.createElement("h2");
    consTitle.innerText = "Cons";
    const consIcon = document.createElement("i");

    consTitle.appendChild(consIcon);

    consIcon.classList.add("bi", "bi-arrow-down-circle");

    const consList = document.createElement("ul");

    for (const con of tech.cons) {
      const conItem = document.createElement("li");
      conItem.innerText = con;
      consList.append(conItem);
    }
    consContainer.appendChild(consTitle);
    consContainer.appendChild(consList);

    const famousProjectsContainer = document.createElement("div");
    famousProjectsContainer.classList.add("projects-container");
    const famousProjectsTitle = document.createElement("h2");
    famousProjectsTitle.innerText = "Utilizam essa tecnologia";
    const projectList = document.createElement("ul");

    for (const project of tech.projects) {
      const projectIcon = document.createElement("img");
      projectIcon.src = `../images/${project.icon}`;
      projectIcon.classList.add("project-icon");

      projectIcon.classList.add(project.icon.split(".svg").shift());
      const projectAnchor = document.createElement("a");
      projectAnchor.setAttribute("href", project.link);
      projectAnchor.setAttribute("target", "_blank");
      projectAnchor.appendChild(projectIcon);

      const projectItem = document.createElement("li");
      projectItem.appendChild(projectAnchor);
      projectList.appendChild(projectItem);
    }
    famousProjectsContainer.appendChild(famousProjectsTitle);
    famousProjectsContainer.appendChild(projectList);
    modalBody.appendChild(description);
    modalBody.appendChild(prosContainer);
    modalBody.appendChild(consContainer);
    modalBody.appendChild(famousProjectsContainer);

    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");

    const closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.classList.add("btn", "btn-light");
    closeButton.innerText = "Fechar";

    modalFooter.appendChild(closeButton);

    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog", "modal-dialog-scrollable");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);

    modalContainer.appendChild(modalDialog);
    techModal.appendChild(modalContainer);

    return techModal;
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
        if (
          event.target &&
          event.target.closest(".project-container") &&
          event.target.closest(".project-container").id !== "project-highlight"
        ) {
          const projectData = await callback(
            event.target.closest(".project-container").dataset.project
          );
          this.createProjectHighlight(projectData);
        }
      });
  }
}
