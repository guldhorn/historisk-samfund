const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
let currentSlideIndex = 0;

function moveSlide(n) {
    showSlide(currentSlideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    // wrap to the start
    if (n >= slides.length) currentSlideIndex = 0;
    // wrap to the end
    if (n < 0) currentSlideIndex = slides.length - 1;
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Display the current slide
    slides[currentSlideIndex].style.display = "block";
}

if (slidesContainer) {
    // Add auto slide show
    let autoSlideShow = setInterval(function () {
        moveSlide(1);
    }, 1000 * 10);

    showSlide(currentSlideIndex);

    prevButton.addEventListener("click", function (event) {
        clearInterval(autoSlideShow);
        event.preventDefault();
        moveSlide(-1);
    });

    nextButton.addEventListener("click", function (event) {
        clearInterval(autoSlideShow);
        event.preventDefault();
        moveSlide(1);
    });

    // Keyboard events
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            clearInterval(autoSlideShow);
            event.preventDefault();
            moveSlide(-1);
        } else if (event.key === "ArrowRight") {
            clearInterval(autoSlideShow);
            event.preventDefault();
            moveSlide(1);
        }
    });
}
