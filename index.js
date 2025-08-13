/** função para o botão de hamburguer */
/**AJUSTAR */


const btnToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#menu-principal');

btnToggle.addEventListener('click', () => {
  const aberto = btnToggle.getAttribute('aria-expanded') === 'true';
  
  btnToggle.setAttribute('aria-expanded', !aberto);
  btnToggle.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
  
  navMenu.classList.toggle('ativo');
});