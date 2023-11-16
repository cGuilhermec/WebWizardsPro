const user = document.querySelector(".nomeDoUsuario");
const texto = document.querySelector(".texto");
const nomeUser = document.querySelector(".form-control");
const imprimirBtn = document.querySelector(".btn-enviar");
const input = document.querySelector(".input");

imprimirBtn.onclick = () => {
  input.classList.add("ativado");
  user.innerHTML = nomeUser.value;
  const dataAtual = new Date();

  texto.innerHTML = `É com grande satisfação que certificamos que ${
    nomeUser.value
  }
  concluiu com êxito o curso de Metodologia Ágil Scrum, realizado no
  período de ${dataAtual.getDate()}/${
    dataAtual.getMonth() + 1
  }/${dataAtual.getFullYear()} a 
  ${dataAtual.getDate()}/${
    dataAtual.getMonth() + 1
  }/${dataAtual.getFullYear()}. <br>
  Durante o curso, o(a)
  participante demonstrou grande dedicação e comprometimento em aprender
  os princípios e técnicas da metodologia Scrum. Compreendeu a importância
  da colaboração e do trabalho em equipe, além de adquirir habilidades
  para a gestão eficiente de projetos e processos.`;

  window.print();
};
