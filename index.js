function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  const hero = document.getElementById('hero');
  const imagens = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80',  
    'pexels-danila-giancipoli-891596-2242171.jpg',  
    'pexels-ollivves-931007.jpg', 
    

  ];
  let index = 0;

  function trocarImagemFundo() {
    hero.style.backgroundImage = `url('${imagens[index]}')`;
    index = (index + 1) % imagens.length;
  }

  trocarImagemFundo();
  setInterval(trocarImagemFundo, 2000); 

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
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    navLinks.classList.toggle('active');
  });

  
  