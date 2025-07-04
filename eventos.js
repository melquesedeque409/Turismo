document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const fechar = document.getElementById("fecharModal");
    const titulo = document.getElementById("modalTitulo");
    const imagem = document.getElementById("modalImagem");
    const descricao = document.getElementById("modalDescricao");
    const botoesFiltro = document.querySelectorAll(".filtro-btn");
  
    // Animação de entrada
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.style.animation = "popIn 1s ease forwards";
        }
      });
    }, { threshold: 0.2 });
  
    cards.forEach(card => {
      observer.observe(card);
      
      card.addEventListener("click", () => {
        titulo.textContent = card.querySelector("h2").textContent;
        imagem.src = card.querySelector("img").src;
        descricao.textContent = card.querySelector("p").textContent;
        modal.style.display = "flex";
      });
    });
  
    fechar.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  
    // Filtro
    botoesFiltro.forEach(botao => {
      botao.addEventListener("click", () => {
        const tipo = botao.dataset.tipo;
        cards.forEach(card => {
          card.style.display =
            tipo === "todos" || card.dataset.tipo === tipo
              ? "block"
              : "none";
        });
      });
    });
  });
  