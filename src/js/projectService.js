import { HTML, JAVASCRIPT, TYPESCRIPT, PYTHON } from "./techs.js";
const projects = {
  hotCoffee: {
    title: "HotCoffee",
    subtitle: "Gestão de cafeteria",
    img: "./assets/images/coffee.jpg",
    description:
      "O HotCoffee é um software FICTÍCIO que gerencia pedidos em uma cafeteria. Nele, o cliente pode escolher seu pedido, fazer o pagamento e avaliar cada produto. Além disso, o proprietário pode ver relatórios sobre quais vendedores se destacaram, quais produtos foram mais vendidos e emitir nota fiscal.",
    techs: [HTML, JAVASCRIPT, TYPESCRIPT],
    project_link: "",
    project_repository: "",
  },

  graduai: {
    title: "GraduAI",
    subtitle: "Previsão de evasão",
    img: "./assets/images/graduai.png",
    description:
      "O GraduAI é um software que utiliza um modelo de aprendizado de máquina para apresentar ao estudante a probabilidade de aprovação ou de evasão no curso pretendido. Para isso, o sistema coleta dados do estudante, do curso, da instituição de ensino e do campus no qual ele deseja se matricular. A partir destas informações, o resultado da aplicação é demonstrado por meio de gráficos, tabelas e estatísticas que informam quais foram os fatores que mais influenciaram no resultado obtido.",
    techs: [HTML, JAVASCRIPT, TYPESCRIPT, PYTHON],
    project_link: "https://www.graduai.com/",
    project_repository: "",
  },

  iDrinks: {
    title: "iDrinks",
    subtitle: "E-commerce de bebidas",
    img: "./assets/images/drinks.jpg",
    description:
      "O iDrinks é um e-commerce de bebidas FICTÍCIO. Os clientes deste e-commerce podem fazer os seus pedidos, informando o local de entrega e a forma de pagamento.",
    techs: [HTML, TYPESCRIPT],
    project_link: "",
    project_repository: "",
  },
};
export default class ProjectService {
  async getProject(projectName) {
    return new Promise((resolve, reject) => {
      resolve(projects[projectName]);
    });
  }
}
