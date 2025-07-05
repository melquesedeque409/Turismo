const button = document.getElementById('scrollToggle');
const destino = document.getElementById('mais-destinos');

button.addEventListener('click', () => {
  if (window.scrollY < 100) {
    // Descer
    destino.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Subir
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY < 100) {
    button.textContent = '↓';
  } else {
    button.textContent = '↑';
  }
}); 
const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');

    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('open');
      navLinks.classList.toggle('active');
    });