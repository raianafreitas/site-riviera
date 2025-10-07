// --- Código do Menu Hambúrguer para Mobile ---
const hamburger = document.querySelector(".hamburger");
const navMenuContainer = document.querySelector(".nav-links-container");
const body = document.querySelector("body");

// Cria o overlay do menu
const menuOverlay = document.createElement('div');
menuOverlay.classList.add('menu-overlay');
body.appendChild(menuOverlay);

function closeMenu() {
    hamburger.classList.remove("active");
    navMenuContainer.classList.remove("active");
    menuOverlay.classList.remove("active");
    body.classList.remove("menu-open");
}

function openMenu() {
    hamburger.classList.add("active");
    navMenuContainer.classList.add("active");
    menuOverlay.classList.add("active");
    body.classList.add("menu-open");
}

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isActive = hamburger.classList.contains('active');
    if (isActive) {
        closeMenu();
    } else {
        openMenu();
    }
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    // Não fecha o menu ao clicar, apenas navega
}));

// Fecha o menu se clicar no overlay
menuOverlay.addEventListener('click', () => {
    closeMenu();
});


// --- Código do Carrossel de Banners ---
const slideContainer = document.querySelector(".slider-container");
if (slideContainer) {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const progressBar = document.querySelector('.progress-bar');
    const totalSlides = slides.length;
    const slideIntervalTime = 5000; 

    function updateSlidePosition() {
        slideContainer.style.transition = "transform 0.5s ease-in-out";
        slideContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
        
        if(progressBar) {
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.transition = `width ${slideIntervalTime / 1000}s linear`;
                progressBar.style.width = '100%';
            }, 50);
        }
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    let slideInterval = setInterval(nextSlide, slideIntervalTime);

    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    function resetInterval() {
        clearInterval(slideInterval);
        updateSlidePosition();
        slideInterval = setInterval(nextSlide, slideIntervalTime);
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            slideIndex = (slideIndex + 1) % totalSlides;
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            resetInterval();
        });
    }
}
        // --- CÓDIGO NOVO: ANIMAÇÃO AO ROLAR ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1 // A animação começa quando 10% do elemento está visível
});

const elementsToFadeIn = document.querySelectorAll('.fade-in-element');
elementsToFadeIn.forEach((el) => observer.observe(el));

// --- Código do Menu Ativo Laranja (Para Múltiplas Páginas) ---
// A lógica foi movida para o HTML, adicionando a classe 'active' diretamente na página correspondente.
// Este script não é mais necessário para o menu ativo, mas o mantemos para o menu hamburger e carrossel.

