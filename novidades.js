const botao = document.getElementById("botao-raspadinha");
const mensagem = document.getElementById("mensagem-novidade");

botao.addEventListener("click", () => {
  mensagem.textContent = "Chatbots de WhatsApp ✨";
  botao.style.display = "none";
});
const botoesVoto = document.querySelectorAll(".voto");
const resposta = document.getElementById("resposta-voto");

botoesVoto.forEach(botao => {
  botao.addEventListener("click", () => {
    resposta.textContent = `Obrigada! Você votou em: "${botao.textContent}"`;
  });
});
