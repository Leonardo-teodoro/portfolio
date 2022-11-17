import View from "./view";
export default class Controller {
  view;
  constructor() {
    this.view = new View();
    this.view.listenToNavClick();
  }
  wantsToRenderHome(hash) {
    try {
      this.view.renderHome(`/#${hash}`);
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
      this.view.renderProjects();
    } catch (e) {
      this.view.showError(`${e}`, "Erro ao obter página de projetos!");
    }
  }
}
