const bodyMode = document.querySelector(".body-mode");
const darkModeBtn = document.querySelector(".darkModeBtn");
const ligthModeBtn = document.querySelector(".ligthModeBtn");
const biBtn = document.querySelector(".bi-moon");

darkModeBtn.onclick = () => {
  bodyMode.classList.add("ativado");
};

biBtn.onclick = () => {
  bodyMode.classList.remove("ativado");
};

// Acessibilidade Tamanho das fontes

const aumentarBtn = document.querySelector(".aumentar-btn");
const diminuirBtn = document.querySelector(".diminuir-btn");

aumentarBtn.onclick = () => {
  bodyMode.classList.add("active");
};

diminuirBtn.onclick = () => {
  bodyMode.classList.remove("active");
};
