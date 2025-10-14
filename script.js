// --- Código do Menu Hambúrguer para Mobile ---
const hamburger = document.querySelector(".hamburger");
const navMenuContainer = document.querySelector(".nav-links-container");
const body = document.querySelector("body");
const logo = document.querySelector(".logo");

const menuOverlay = document.createElement('div');
menuOverlay.classList.add('menu-overlay');
body.appendChild(menuOverlay);

function closeMenu() {
    hamburger.classList.remove("active");
    navMenuContainer.classList.remove("active");
    menuOverlay.classList.remove("active");
    body.classList.remove("menu-open");
    if (logo) logo.classList.remove("hidden");
}

function openMenu() {
    hamburger.classList.add("active");
    navMenuContainer.classList.add("active");
    menuOverlay.classList.add("active");
    body.classList.add("menu-open");
    if (logo) logo.classList.add("hidden");
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
    closeMenu();
}));

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
    updateSlidePosition();
}


// --- Código do Menu Ativo Laranja ---
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll("header nav ul li a.nav-link");

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});


// --- ANIMAÇÃO AO ROLAR ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
});

const elementsToFadeIn = document.querySelectorAll('.fade-in-element');
elementsToFadeIn.forEach((el) => observer.observe(el));
