// MENU HAMBURGUER
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

// BOTÃO VER MAIS
const botoesVerMais = document.querySelectorAll('.ver-mais');

botoesVerMais.forEach((botao) => {
  botao.addEventListener('click', () => {
    const card = botao.closest('.card-projeto');
    const textoCompleto = card.querySelector('.texto-completo');

    if (!textoCompleto) return;

    textoCompleto.classList.toggle('mostrar');

    if (textoCompleto.classList.contains('mostrar')) {
      botao.textContent = 'Ver menos';
    } else {
      botao.textContent = 'Ver mais';
    }
  });
});
