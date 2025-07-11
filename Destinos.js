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
    // MODAL
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

document.querySelectorAll('.modal .close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});  
function toggleSearch() {
  const container = document.getElementById('searchContainer');
  const existingInput = document.getElementById('searchInput');

  if (!existingInput) {
    // Criar input de busca
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'searchInput';
    input.classList.add('show');
    input.placeholder = 'Pesquisar destinos...';

    // Criar botão de pesquisa
    const btn = document.createElement('button');
    btn.id = 'searchBtn';
    btn.textContent = 'Pesquisar';
    btn.onclick = toggleSearch;

    // Adicionar ao container
    container.innerHTML = '';
    container.appendChild(input);
    container.appendChild(btn);

    setTimeout(() => input.focus(), 100);
  } else {
    // Reverter para o botão "Começar a Explorar"
    container.innerHTML = `
      <button class="btn-scroll" id="exploreBtn" onclick="toggleSearch()">Começar a Explorar</button>
    `;
  }
} 


