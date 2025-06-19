// === BOTÃO VOLTAR AO TOPO ===
const btnTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === MODAL DE IMAGEM ===
const modal = document.getElementById('modal-img');
const modalImg = document.getElementById('img-modal');
const fecharModal = document.getElementById('fechar-modal');

document.querySelectorAll('.mini-galeria img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.remove('escondido');
  });
});

fecharModal.addEventListener('click', () => {
  modal.classList.add('escondido');
  modalImg.src = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('escondido');
    modalImg.src = '';
  }
});

// === MENU MOBILE (hambúrguer) ===
document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.querySelector('.btn-menu');
  const menuUl = document.querySelector('.menu ul');
  const links = menuUl.querySelectorAll('a');

  btnMenu.addEventListener('click', () => {
    // Fecha se já estiver aberto
    if (menuUl.classList.contains('ativo')) {
      menuUl.classList.remove('ativo');
    } else {
      menuUl.classList.add('ativo');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menuUl.classList.remove('ativo');
    });
  });
});
