// --- Código do Menu Hambúrguer para Mobile ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


// --- Código do Carrossel de Banners ---
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideContainer = document.querySelector(".slider-container");
const totalSlides = slides.length;

// Clone os primeiros slides para o final para o efeito de loop infinito
for (let i = 0; i < totalSlides; i++) {
    slideContainer.appendChild(slides[i].cloneNode(true));
}

function showSlides() {
    slideIndex++;
    
    slideContainer.style.transition = "transform 0.5s ease-in-out";
    slideContainer.style.transform = `translateX(${-slideIndex * 100}%)`;

    // Reset para o início quando chegar ao final dos clones
    if (slideIndex === totalSlides) {
        setTimeout(() => {
            slideContainer.style.transition = "none";
            slideIndex = 0;
            slideContainer.style.transform = `translateX(0)`;
        }, 500);
    }
}

// Inicia o carrossel automático a cada 5 segundos
let slideInterval = setInterval(showSlides, 5000);

// Botões de Próximo e Anterior
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
    clearInterval(slideInterval); // Para o automático
    showSlides();
    slideInterval = setInterval(showSlides, 5000); // Reinicia
});

prevBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
    
    if (slideIndex === 0) {
        slideContainer.style.transition = "none";
        slideIndex = totalSlides;
        slideContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
    }
    
    setTimeout(() => {
        slideIndex--;
        slideContainer.style.transition = "transform 0.5s ease-in-out";
        slideContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
    }, 50); // Pequeno delay para o reposicionamento ser invisível
    
    slideInterval = setInterval(showSlides, 5000);
});
