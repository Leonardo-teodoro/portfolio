const HTML = {
  name: "HTML",
  description:
    "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web. Fonte: MDN Web Docs.",
  pros: [
    "Compatibilidade: Compatível com os browsers mais utilizados",
    "Fácil aprendizado: O apredizado de HTML é natural",
    "Leve: é uma linguagem de marcação leve que economiza tempo para os clientes",
  ],
  cons: [
    "Estático: Essa linguagem de marcação é estática e não propõe resultados dinâmicos",
    "Código extenso: Para a maioria das páginas, é necessário uma grande quantidade de código",
    "Problema de confiança: o desenvolvedor não é o criador do HTML. Dessa forma, qualquer mudança nos rótulos depende do criador da linguagem.",
  ],
  icon: "filetype-html",
  official_site: "https://html.spec.whatwg.org/multipage/",
  projects: [
    {
      name: "Google Docs",
      link: "https://www.google.com/docs/about/",
      icon: "docs-logo.svg",
    },
    {
      name: "Zoho",
      link: "https://www.zoho.com/pt-br/",
      icon: "zoho-logo.svg",
    },
    {
      name: "Tokopedia",
      link: "https://www.tokopedia.com/",
      icon: "tokopedia-logo.svg",
    },
    {
      name: "Udemy",
      link: "https://stackshare.io/udemy/udemy",
      icon: "udemy-logo.svg",
    },
    {
      name: "Accenture",
      link: "https://www.accenture.com/br-pt",
      icon: "accenture-logo.svg",
    },
    { name: "Lyft", link: "https://www.lyft.com/", icon: "lyft-logo.svg" },
  ],
};
const JAVASCRIPT = {
  name: "Javascript",
  description:
    "JavaScript (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js, Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional). Fonte: MDN Web Docs.",
  pros: [
    "Rapidez: Velocidade é o coração de tudo que a tecnologia faz",
    "Simplicidade: Foi desenvolvido para ser fácil de entender, aprender e para integrar novos desenvolvedores com o código",
    "Popularidade: É uma das linguagens mais populares do mundo",
  ],
  cons: [
    "Sem padrão: Quando comparado as outras linguagens, é menos restrito quanto a regras e convenções",
    "Segurança: O código é visível no lado cliente, o que pode atrair ataques para obter informações sensíveis",
    "Incosistência de Browser: Em muitos casos, javascript é interpretado diferente dependendo do browser utilizado",
  ],
  icon: "filetype-js",
  official_site: "https://www.javascript.com/",
  projects: [
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
      icon: "bootstrap-logo.svg",
    },
    { name: "Angular", link: "https://angular.io/", icon: "angular-logo.svg" },
    { name: "Ember.js", link: "https://emberjs.com/", icon: "ember-logo.svg" },
    { name: "Vue.js", link: "https://vuejs.org/", icon: "vue-logo.svg" },
    {
      name: "React",
      link: "https://pt-br.reactjs.org/",
      icon: "react-logo.svg",
    },
    { name: "jQuery", link: "https://jquery.com/", icon: "jquery-logo.svg" },
  ],
};
const TYPESCRIPT = {
  name: "Typescript",
  description:
    "Typescript é uma linguagem fortemente tipada, sendo um subconjunto da linguagem javascript e adicionando recursos que não estão presentes de maneira nativa na linguagem. É de código aberto e foi desenvolvida pela Microsoft. Fonte: Typescript docs.",
  pros: [
    "Precisão: Capacidade para definir tipos que irão guiar o desenvolvimento",
    "Gestão: Os tipos tornam a gestão mais fácil, uma vez que os erros são identificados durante a fase de build",
    "Performance em time: linguagens tipadas permitem que desenvolvedores trabalhem em suas tarefas sem depender da entrega dos colegas de equipe",
  ],
  cons: [
    "Complicado: Para programadores que estão migrando do Javascript, a linguagem tipada pode ser um pouco complicada",
    "Compilação: É necessário compilar, diferentemente do Javascript",
    "Compatibilidade: Em alguns casos, ao utilizar uma biblioteca externa, é necessário um documento de definição para os tipos",
  ],
  icon: "filetype-tsx",
  official_site: "https://www.typescriptlang.org/",
  projects: [
    {
      name: "Slack",
      link: "https://slack.com/intl/pt-br",
      icon: "slack-logo.svg",
    },
    { name: "Kavak", link: "https://www.kavak.com/", icon: "kavak-logo.svg" },
    {
      name: "Bitpanda",
      link: "https://www.bitpanda.com/en?utm_referrer=https://www.google.com/",
      icon: "bitpanda-logo.svg",
    },
    { name: "Medium", link: "https://medium.com/", icon: "medium-logo.svg" },
    {
      name: "DoorDash",
      link: "https://www.doordash.com/",
      icon: "doordash-logo.svg",
    },
    { name: "Asana", link: "https://asana.com/", icon: "asana-logo.svg" },
  ],
};
const PYTHON = {
  name: "Python",
  description:
    "Python é uma linguagem de programação de alto nível, orientada à objetos com semântica dinâmica. Seus tipos de dados de alto nível combinados com os tipos dinâmicos a tornam uma linguagem atrativa para o desenvolvimento rápido. Fonte: Python docs.",
  pros: [
    "Begginer friendly: Fácil aprendizado para novos programadores",
    "Comunidade: Há uma vasta comunidade, o que torna a troca de informações mais ampla",
    "Bibliotecas extensas: Há inúmeras bibliotecas já prontas para diversos assuntos diferentes, o que poupa muito tempo",
  ],
  cons: [
    "Lento: A linguagem é mais lenta do que as compiladas",
    "Memória: Há um grande consumo de memória",
    "Falso multithreading: As threads não são executadas ao mesmo tempo verdadeiramente",
  ],
  icon: "filetype-py",
  official_site: "https://www.python.org/",
  projects: [
    {
      name: "Youtube",
      link: "https://www.youtube.com/",
      icon: "youtube-logo.svg",
    },
    { name: "Google", link: "https://www.google.com", icon: "google-logo.svg" },
    {
      name: "Instagram",
      link: "https://www.instagram.com/",
      icon: "instagram-logo.svg",
    },
    {
      name: "Dropbox",
      link: "https://www.dropbox.com/pt_BR/",
      icon: "dropbox-logo.svg",
    },
    { name: "Quora", link: "https://pt.quora.com/", icon: "quora-logo.svg" },
    {
      name: "Reddit",
      link: "https://www.reddit.com/",
      icon: "reddit-logo.svg",
    },
  ],
};

export { HTML, JAVASCRIPT, TYPESCRIPT, PYTHON };
