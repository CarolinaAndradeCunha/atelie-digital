// MENU MOBILE
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

if (btnMenu && menu) {
  const links = menu.querySelectorAll('a');

  btnMenu.addEventListener('click', () => {
    const ativo = menu.classList.toggle('ativo');
    btnMenu.setAttribute('aria-expanded', ativo);
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('ativo');
      btnMenu.setAttribute('aria-expanded', false);
    });
  });
}

// BOTÃO VER MAIS
const botoesVerMais = document.querySelectorAll('.ver-mais');

botoesVerMais.forEach((botao) => {
  botao.addEventListener('click', () => {
    const card = botao.closest('.card-projeto');
    const textoCompleto = card.querySelector('.texto-completo');

    if (!textoCompleto) return;

    textoCompleto.classList.toggle('mostrar');
    botao.textContent = textoCompleto.classList.contains('mostrar') ? 'Ver menos' : 'Ver mais';
  });
});
