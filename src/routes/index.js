import Controller from "../js/controller";
const controller = new Controller();
controller.wantsToRenderHome();
const routes = {
  about: controller.wantsToRenderAbout.bind(controller),
  contact: controller.wantsToRenderContact.bind(controller),
  education: controller.wantsToRenderEducation.bind(controller),
  home: controller.wantsToRenderHome.bind(controller),
  "professional-xp": controller.wantsToRenderProfessionalXp.bind(controller),
  projects: controller.wantsToRenderProjects.bind(controller),
};

export default routes;
