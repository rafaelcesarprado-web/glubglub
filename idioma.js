// Português para pt-BR, inglês para o resto, como no app. ?lang=en ou ?lang=pt força.
(function () {
  var pedido = new URLSearchParams(location.search).get("lang");
  var idioma = pedido ? (pedido === "pt" ? "pt-BR" : "en") : (/^pt-BR/i.test(navigator.language) ? "pt-BR" : "en");
  function aplicar(novo) {
    document.documentElement.lang = novo;
    document.querySelectorAll(".idioma button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.idioma === novo);
    });
  }
  aplicar(idioma);
  document.addEventListener("DOMContentLoaded", function () {
    aplicar(document.documentElement.lang);
    document.querySelectorAll(".idioma button").forEach(function (b) {
      b.addEventListener("click", function () { aplicar(b.dataset.idioma); });
    });
  });
})();
