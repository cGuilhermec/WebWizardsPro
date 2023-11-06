const comecarTeste = document.querySelector(".comecarTeste");
const cardInfo = document.querySelector(".card-info");
const sairBtn = document.querySelector(".sair-btn");
const main = document.querySelector(".main-ava");
const continua = document.querySelector(".continuar-btn");
const quizProva = document.querySelector(".quiz-Prova");
const quizBox = document.querySelector(".quiz-box");
const resultbox = document.querySelector(".result-box");
const tentarNovamenteBtn = document.querySelector(".tenteNovamente-btn");

//Ativar o card de informacoes da Prova
//Ativar o blur da pagina
comecarTeste.onclick = () => {
  cardInfo.classList.add("ativado");
  main.classList.add("ativado");
};

//Desativar o card de informacoes da prova
//Desativar o blur da pagina
sairBtn.onclick = () => {
  cardInfo.classList.remove("ativado");
  main.classList.remove("ativado");
};

continua.onclick = () => {
  quizProva.classList.add("ativado");
  cardInfo.classList.remove("ativado");
  main.classList.remove("ativado");
  quizBox.classList.add("ativado");

  mostrarQuestoes(0);
  headerPontuacao();
};

tentarNovamenteBtn.onclick = () => {
  quizBox.classList.add("ativado");
  nextBtn.classList.remove("ativado");
  resultbox.classList.remove("ativado");

  contadorDeQuestoes = 0;
  contadorDeQuestoesFotter = 1;
  pontuacaoDoUsuario = 0;

  mostrarQuestoes(contadorDeQuestoes);
  TotalDeQuestoes.textContent = `${contadorDeQuestoesFotter} of ${questoes.length} Questoes`;
};

let contadorDeQuestoes = 0;
let contadorDeQuestoesFotter = 1;
let pontuacaoDoUsuario = 0;

const nextBtn = document.querySelector(".next-btn");
const TotalDeQuestoes = document.querySelector(".question-total");

//Avancando as questoes e o contador do footer
nextBtn.onclick = () => {
  if (contadorDeQuestoes < questoes.length - 1) {
    contadorDeQuestoes++;
    contadorDeQuestoesFotter++;

    nextBtn.classList.remove("ativado");
  } else {
    mostrarResultBox();
  }

  mostrarQuestoes(contadorDeQuestoes);
  TotalDeQuestoes.textContent = `${contadorDeQuestoesFotter} of ${questoes.length} Questoes`;
};

const optionList = document.querySelector(".option-list");

//Pegando as questoes e opcoes do array
function mostrarQuestoes(index) {
  const questaoEmTexto = document.querySelector(".question-text");
  questaoEmTexto.textContent = `${questoes[index].numero}. ${questoes[index].questao}`;

  //Criando um HTML
  let optionTag = ` <div class="option"><span>${questoes[index].opcoes[0]}</span></div>
                    <div class="option"><span>${questoes[index].opcoes[1]}</span></div>
                    <div class="option"><span>${questoes[index].opcoes[2]}</span></div>
                    <div class="option"><span>${questoes[index].opcoes[3]}</span></div>`;

  //Incluindo o HTML na pagina
  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelecionada(this)");
  }
}

//Validando as Respostas
function optionSelecionada(resposta) {
  let respostaDoUsuario = resposta.textContent;
  let respostaCorreta = questoes[contadorDeQuestoes].resposta;
  let todasAsOption = optionList.children.length;

  if (respostaDoUsuario == respostaCorreta) {
    resposta.classList.add("correto");
    pontuacaoDoUsuario += 1;
    headerPontuacao();
  } else {
    resposta.classList.add("incorreto");

    //Se for resposta incorreta, selecione automaticamente a resposta correta
    for (let i = 0; i < todasAsOption; i++) {
      if (optionList.children[i].textContent == respostaCorreta) {
        optionList.children[i].setAttribute("class", "option correto");
      }
    }
  }

  //Se o usuario selecionou um, desabilitar para ele selecionar as outras
  for (let i = 0; i < todasAsOption; i++) {
    optionList.children[i].classList.add("desabilitado");
  }

  nextBtn.classList.add("ativado");
}

function headerPontuacao() {
  const headerPontuacaoText = document.querySelector(".header-score");
  headerPontuacaoText.textContent = `Pontuação: ${pontuacaoDoUsuario} / ${questoes.length}`;
}

function mostrarResultBox() {
  quizBox.classList.remove("ativado");
  resultbox.classList.add("ativado");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Você acertou ${pontuacaoDoUsuario} de ${questoes.length}`;

  const progressoCircular = document.querySelector(".progresso-circular");
  const valorDoProgresso = document.querySelector(".valor-progresso");

  let valorInicialdoProgresso = -1;
  let valorFinalDoProgresso = (pontuacaoDoUsuario / questoes.length) * 100;
  let speed = 20;

  let progresso = setInterval(() => {
    valorInicialdoProgresso++;

    valorDoProgresso.textContent = `${valorInicialdoProgresso}%`;
    progressoCircular.style.background = `conic-gradient(#c40094 ${
      valorInicialdoProgresso * 3.6
    }deg, rgba(255, 255, 255, .1) 0deg)`;

    if (valorInicialdoProgresso == valorFinalDoProgresso) {
      clearInterval(progresso);
    }
  }, speed);
}
