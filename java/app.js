// --- Roteamento de abas ---

const ABAS_VALIDAS = ["inicio", "fisica", "matematica", "gerador", "sobre"];

function abaAtual() {
  const hash = location.hash.replace("#", "") || "inicio";
  return ABAS_VALIDAS.includes(hash) ? hash : "inicio";
}

function mostrarAba() {
  const atual = abaAtual();

  document.querySelectorAll(".aba").forEach((sec) => {
    sec.classList.toggle("ativa", sec.id === atual);
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.classList.toggle("ativo", link.getAttribute("href") === `#${atual}`);
  });

  // Rola para o topo ao trocar de aba
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", mostrarAba);
mostrarAba()

// --- Menu mobile ---

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    toggle.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  // Fecha o menu ao clicar em um link (mobile)
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("aberto");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// --- Ano no rodapé ---

const anoEl = document.getElementById("ano");
if (anoEl) anoEl.textContent = new Date().getFullYear();