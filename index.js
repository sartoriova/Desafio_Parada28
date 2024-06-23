let slideIndice = 1;
showSlides();

function currentSlide(n) {
    slideIndice = n;
    showSlides();
}

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndice - 1].style.display = "block";
    dots[slideIndice - 1].className += " active";
}