document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement; // .faq-item
    item.classList.toggle('ativo');
  });
});

const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});
