const label = document.querySelector(".inputText");
const textArea = document.querySelector(".textarea");
const alertTrigger = document.querySelector(".enviarBtn");

function enviar() {
  let value = label.value;
  let text = textArea.value;

  if (value.length < 1 && text.length > 10) {
    if (alertTrigger) {
      alertTrigger.addEventListener("click", () => {
        appendAlert("Faltou colocar o email!", "warning");
      });
    }
  } else if (text.length < 1 && value.length >= 20) {
    if (alertTrigger) {
      alertTrigger.addEventListener("click", () => {
        appendAlert("Faltou colocar a mensagem", "warning");
      });
    }
  } else if (value.length < 1 && text.length < 1) {
    if (alertTrigger) {
      alertTrigger.addEventListener("click", () => {
        appendAlert(
          "Faltou preencher o campo email e o campo texto!",
          "warning"
        );
      });
    }
  } else {
    if (alertTrigger) {
      alertTrigger.addEventListener("click", () => {
        appendAlert("Mensagem enviada com sucesso", "success");
      });
    }
  }
}

const alertPlaceholder = document.querySelector(".areaForInner");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};
