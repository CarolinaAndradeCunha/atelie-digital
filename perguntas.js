document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement; // .faq-item
    item.classList.toggle('ativo');
  });
});

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
