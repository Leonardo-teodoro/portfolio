import ProjectService from "./projectService";
import View from "./view";
export default class Controller {
  view;
  constructor() {
    this.view = new View();
    this.view.listenToNavClick();
  }
  wantsToRenderHome() {
    try {
      this.view.renderHome();
    } catch (e) {
      this.view.showError(`${e}`, "Erro ao obter página principal!");
    }
  }
  wantsToRenderContact() {
    try {
      this.view.renderContact();
    } catch (e) {
      this.view.showError(`${e}`, "Erro ao obter página de contato!");
    }
  }
  wantsToRenderProjects() {
    try {
      this.view.renderProjects(this.getProjectDescription.bind(this));
    } catch (e) {
      this.view.showError(`${e}`, "Erro ao obter página de projetos!");
    }
  }
  wantsToRenderAbout() {
    try {
      this.view.renderAbout();
    } catch (e) {
      this.view.showError(`${e}`, "Erro ao obter página sobre mim!");
    }
  }
  wantsToRenderProfessionalXp() {
    try {
      this.view.renderProfessionalXp();
    } catch (e) {
      this.view.showError(
        `${e}`,
        "Erro ao obter página de experiência profissional!"
      );
    }
  }
  wantsToRenderEducation() {
    try {
      this.view.renderEducation();
    } catch (e) {
      this.view.showError(`${e}`, "Erro ao obter página de formação!");
    }
  }
  getProjectDescription() {
    const projectService = new ProjectService();
    return projectService.getProjectDescription();
  }
}
