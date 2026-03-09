console.log("Formulário funcionando!");

const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.outerHTML =
      "<p class='font-1-m cor-p1' style='padding: 3rem 0;'>Mensagem enviada com sucesso!</p>";
  } else {
    formulario.outerHTML =
      "<p class='font-1-m cor-9' style='padding: 3rem 0;'>Erro no envio. Tente novamente.</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);

console.log(formulario);
