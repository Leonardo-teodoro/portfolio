export async function getFileContent(path) {
  const result = await fetch(path);

  if (result.status >= 400) {
    throw new Error(`Erro no carregamento do arquivo ${path}`);
  }

  return result.text();
}
export async function changeContent(htmlString) {
  const main = document.querySelector("#content");

  if (main) {
    main.innerHTML = htmlString;
  }
}
