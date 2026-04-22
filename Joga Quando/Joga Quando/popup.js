// ==========================
// WIDGET RENDER
// ==========================

function renderWidget(src, height = 270) {
  const container = document.getElementById("widget-container");

  container.innerHTML = `
    <iframe 
      src="${src}"
      width="100%"
      height="${height}"
      style="border:2px solid #717171ff; border-radius:8px;"
      loading="lazy"
      referrerpolicy="unsafe-url"
      sandbox="allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox">
    </iframe>
  `;
}

const container = document.querySelector(".container");
function setMode(mode) {
    container.classList.remove("partidas", "normal");
    container.classList.add(mode);
}

// ==========================
// WIDGETS ESPECÍFICOS
// ==========================

function partidas() {
    renderWidget("https://widget.api-futebol.com.br/render/widget_946fd1b5742fde12", 240);
    setMode('partidas');
}

function brasileirao() {
    renderWidget("https://widget.api-futebol.com.br/render/widget_55ad184757e6e10f", 370);
    setMode('normal');
}

function rodadas() {
    renderWidget("https://widget.api-futebol.com.br/render/widget_800dd1c3e22f8936", 370);
    setMode('normal');
}

// ==========================
// EVENTOS
// ==========================

document.getElementById("btn-partidas")
  .addEventListener("click", partidas);

document.getElementById("btn-brasileirao")
  .addEventListener("click", brasileirao);

document.getElementById("btn-rodadas")
  .addEventListener("click", rodadas);

// ==========================
// INIT
// ==========================

partidas(); // abre padrão ao iniciar