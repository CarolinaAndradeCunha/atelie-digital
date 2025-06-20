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

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('neblina-canvas');
  const ctx = canvas.getContext('2d');

  const width = canvas.width = canvas.offsetWidth;
  const height = canvas.height = canvas.offsetHeight;

  // Pinta a "neblina" na tela
  ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.fillRect(0, 0, width, height);

  ctx.globalCompositeOperation = 'destination-out';

  let isDrawing = false;

  function draw(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  }

  function getXY(e) {
    const rect = canvas.getBoundingClientRect();
    if (e.touches) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  }

  function start(e) {
    isDrawing = true;
    const { x, y } = getXY(e);
    draw(x, y);
  }

  function move(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getXY(e);
    draw(x, y);
  }

  function stop() {
    isDrawing = false;
  }

  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mousemove', move);
  canvas.addEventListener('mouseup', stop);
  canvas.addEventListener('mouseleave', stop);

  canvas.addEventListener('touchstart', start);
  canvas.addEventListener('touchmove', move);
  canvas.addEventListener('touchend', stop);
});

const botoesVoto = document.querySelectorAll(".voto");
const resposta = document.getElementById("resposta-voto");

botoesVoto.forEach(botao => {
  botao.addEventListener("click", () => {
    resposta.textContent = `Obrigada! Você votou em: "${botao.textContent}"`;
  });
});
