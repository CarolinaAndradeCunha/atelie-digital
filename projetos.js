// === MENU MOBILE (hambúrguer) ===
  const btnMenu = document.querySelector('.btn-menu');
  const menuUl = document.querySelector('.menu ul');

  if (btnMenu && menuUl) {
    const links = menuUl.querySelectorAll('a');

    btnMenu.addEventListener('click', () => {
      const isActive = menuUl.classList.toggle('ativo');
      btnMenu.setAttribute('aria-expanded', isActive);
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        menuUl.classList.remove('ativo');
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

    if (textoCompleto.classList.contains('mostrar')) {
      botao.textContent = 'Ver menos';
    } else {
      botao.textContent = 'Ver mais';
    }
  });
});
