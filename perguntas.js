document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement; // .faq-item
    item.classList.toggle('ativo');
  });
});

// === MENU MOBILE (hambúrguer) ===
  const btnMenu = document.querySelector('.btn-menu');
const menuList = document.querySelector('.menu ul');

if (btnMenu && menuList) {
  btnMenu.addEventListener('click', () => {
    const ativo = menuList.classList.toggle('ativo');
    btnMenu.setAttribute('aria-expanded', ativo);
  });

  menuList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuList.classList.remove('ativo');
      btnMenu.setAttribute('aria-expanded', false);
    });
  });
}
