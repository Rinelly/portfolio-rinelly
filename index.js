// --- MENU ---
const btnToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#menu-principal');

function toggleMenu() {
  const aberto = btnToggle.getAttribute('aria-expanded') === 'true';

  btnToggle.setAttribute('aria-expanded', aberto ? 'false' : 'true');
  btnToggle.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
  navMenu.classList.toggle('ativo');
}

// Função para fechar o menu
function fecharMenu() {
  if (navMenu.classList.contains('ativo')) {
    navMenu.classList.remove('ativo');
    btnToggle.setAttribute('aria-expanded', 'false');
    btnToggle.setAttribute('aria-label', 'Abrir menu');
  }
}

btnToggle.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function(event) {
  // Se o menu não estiver aberto, não faz nada
  if (!navMenu.classList.contains('ativo')) return;
  // Se o clique foi dentro do botão ou do menu, não fecha
  if (btnToggle.contains(event.target) || navMenu.contains(event.target)) return;
  fecharMenu();
});


// --- FORMULÁRIO ---
const form = document.querySelector("#form-contato");

function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validarFormulario(event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const email = document.querySelector("#email").value.trim();
  const assunto = document.querySelector("#assunto").value.trim();
  const mensagem = document.querySelector("#msg").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  if (!validarEmail(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // Envio via EmailJS
  emailjs.send("service_wleg5fh", "template_zlu117l", 
    {
    from_name: nome,
    from_email: email,
    subject: assunto,
    message: mensagem,
    }
  )
  .then(function(response) {
    alert("Mensagem enviada com sucesso!");
    form.reset();
  }, function(error) {
    alert("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
    console.error("EmailJS error:", error);
  });
}

if (form) {
  form.addEventListener("submit", validarFormulario);
}