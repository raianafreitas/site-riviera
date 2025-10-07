// --- Código do Menu Hambúrguer para Mobile ---
const hamburger = document.querySelector(".hamburger");
const navMenuContainer = document.querySelector(".nav-links-container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenuContainer.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenuContainer.classList.remove("active");
}));


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


// --- Código do Menu Ativo Laranja (Scrollspy) ---
const sections = document.querySelectorAll("main section"); // Alvo mais específico
const navLi = document.querySelectorAll("header nav ul li a.nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) { // Ajuste de sensibilidade
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") == "#" + current) {
            a.classList.add("active");
        }
    });
});
