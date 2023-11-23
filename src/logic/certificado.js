const CampoDigitarNomeUsuario = document.querySelector(".usuario");
const CampoDoCertificado = document.querySelector(".certificado");
const imprimirBtn = document.querySelector(".btn-enviar");
const nomeUser = document.querySelector(".form-control");

imprimirBtn.onclick = () => {
  CampoDigitarNomeUsuario.classList.add("ativado");
  CampoDoCertificado.classList.add("ativado");

  const dataAtual = new Date();

  document.querySelector(".nomeDoUsuario").innerHTML = `${nomeUser.value}`;
  document.querySelector(
    ".texto"
  ).innerHTML = `É com grande satisfação que certificamos que ${nomeUser.value}
  concluiu com êxito o curso de Metodologia Ágil Scrum, realizado no
  período de ${dataAtual.getDate()}/${
    dataAtual.getMonth() + 1
  }/${dataAtual.getFullYear()} a
  ${dataAtual.getDate()}/${
    dataAtual.getMonth() + 1
  }/${dataAtual.getFullYear()}.`;
};
