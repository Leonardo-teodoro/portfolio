import View from "./view";
export default class Controller {
  #view;

  constructor() {
    this.view = new View();
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
      this.view.renderProjects();
    } catch (e) {
      this.view.showError(`${e}`, "Erro ao obter página de projetos!");
    }
  }
  wantsToRenderHome() {
    try {
      this.view.renderHome();
    } catch (e) {
      this.view.showError(`${e}`, "Erro ao obter página principal!");
    }
  }
}
