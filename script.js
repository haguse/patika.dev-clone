const prevButton = document.getElementById("news__slider__buttons--prev");
const nextButton = document.getElementById("news__slider__buttons--next");

let slider = document.querySelector(".news__slider__slide");

const slideRight = () => {
  if (window.matchMedia("(max-width:1100px")) {
    slider.scrollBy(534, 0);
  } else {
    slider.scrollBy(10, 0);
  }
};

const slideLeft = () => {
  if (window.matchMedia("(max-width:1100px")) {
    slider.scrollBy(-534, 0);
  } else {
    slider.scrollBy(-10, 0);
  }
};

prevButton.addEventListener("click", slideLeft);
nextButton.addEventListener("click", slideRight);
