document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement; // .faq-item
    item.classList.toggle('ativo');
  });
});

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
