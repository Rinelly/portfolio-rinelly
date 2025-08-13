const btnToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#menu-principal');


btnToggle.addEventListener('click', () => {
  const aberto = btnToggle.getAttribute('aria-expanded') === 'true';
  
  // Atualiza aria-expanded como string
  btnToggle.setAttribute('aria-expanded', aberto ? 'false' : 'true');
  
  // Atualiza aria-label dinamicamente
  btnToggle.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
  
  // Alterna classe ativo no menu
  navMenu.classList.toggle('ativo');
});