const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal-atividade");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close-btn");

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = card.querySelector("img").src;
    modalTitulo.textContent = card.querySelector("h2").textContent;
    modalDesc.textContent = card.querySelector("p").textContent;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}); 
const filtroBtns = document.querySelectorAll(".filtro-btn");

filtroBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Ativar botão clicado
    filtroBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const tipo = btn.getAttribute("data-filtro");
    cards.forEach(card => {
      const cardTipo = card.getAttribute("data-tipo");
      if (tipo === "todos" || cardTipo === tipo) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}); 
let slideIndex = 0;
const slides = document.querySelectorAll(".carrossel-slide");
const btnProxima = document.querySelector(".seta.proxima");
const btnAnterior = document.querySelector(".seta.anterior");

function mostrarSlideManual(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function avancarSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  mostrarSlideManual(slideIndex);
}

function voltarSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  mostrarSlideManual(slideIndex);
}

btnProxima.addEventListener("click", avancarSlide);
btnAnterior.addEventListener("click", voltarSlide);

// Carrossel automático
setInterval(avancarSlide, 5000); 

const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    navLinks.classList.toggle('active');
  });



