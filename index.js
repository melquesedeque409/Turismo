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