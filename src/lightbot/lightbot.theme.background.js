// Troca a imagem de fundo da página conforme o tema (data-theme) ativo.
var THEME_BACKGROUNDS = {
  forest: "forest.jpg",
  dracula: "dracula.jpg",
  synthwave: "synthwave.jpg",
  // temas que não estiverem aqui ficam só com a cor sólida
};

export function initThemeBackground(baseUrl) {
  var root = document.documentElement;
  var base = baseUrl || "/";

  function apply() {
    var theme = root.getAttribute("data-theme");
    var file = THEME_BACKGROUNDS[theme];
    root.style.setProperty(
      "--lb-theme-bg",
      file ? 'url("' + base + "img/themes/" + file + '")' : "none"
    );
  }

  apply(); // tema já salvo no localStorage
  new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      if (mutations[i].attributeName === "data-theme") { apply(); break; }
    }
  }).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
}