import { changeContent, getFileContent } from "../utils/util.js";
export default class View {
  // Render methods

  async renderHome() {
    changeContent(await getFileContent("../pages/home.html"));
  }
  async renderContact() {
    changeContent(await getFileContent("../pages/contact.html"));
  }
  async renderProjects() {
    changeContent(await getFileContent("../pages/projects.html"));
  }

  showError(message) {
    console.log(message);
  }
}
