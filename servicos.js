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

const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagem-ampliada");
const imagens = document.querySelectorAll(".imagem-espaco"); // classe que você usou nas imagens
const fechar = document.querySelector(".fechar");

imagens.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

modalImg.addEventListener("click", (e) => {
  e.stopPropagation();
});

fechar.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
