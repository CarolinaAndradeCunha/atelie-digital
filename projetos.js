// MENU MOBILE
const btnMenu = document.querySelector('.btn-menu');
const menuLista = document.querySelector('.menu-lista');

if (btnMenu && menuLista) {
  btnMenu.addEventListener('click', () => {
    const ativo = menuLista.classList.toggle('ativo');
    btnMenu.setAttribute('aria-expanded', ativo);
  });

  menuLista.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuLista.classList.remove('ativo');
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
