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
const progressBar = document.querySelector('.progress-bar');
const totalSlides = slides.length;
const slideIntervalTime = 5000; // 5 segundos

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

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    resetInterval();
});

// A lógica de mover o menu no mobile foi removida pois é mais simples e robusta via CSS
// e a estrutura do HTML foi ajustada para isso.
