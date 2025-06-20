// === BOTÃO VOLTAR AO TOPO ===
document.addEventListener('DOMContentLoaded', () => {
  const btnTopo = document.getElementById('btn-topo');

  if (btnTopo) {
    window.addEventListener('scroll', () => {
      btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    btnTopo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // === MODAL DE IMAGEM ===
  const modal = document.getElementById('modal-img');
  const modalImg = document.getElementById('img-modal');
  const fecharModal = document.getElementById('fechar-modal');
  const miniImagens = document.querySelectorAll('.mini-galeria img');

  function fecharModalImagem() {
    if (modal && modalImg) {
      modal.classList.add('escondido');
      modalImg.src = '';
    }
  }

  if (modal && modalImg && fecharModal) {
    miniImagens.forEach(img => {
      img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.classList.remove('escondido');
      });
    });

    fecharModal.addEventListener('click', fecharModalImagem);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        fecharModalImagem();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('escondido')) {
        fecharModalImagem();
      }
    });
  }

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
});
