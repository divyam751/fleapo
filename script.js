const carouselBelt = document.querySelector(".carouselBelt");

let carouselBeltMargin = -450;

const handleLeftButton = () => {
  if (carouselBeltMargin < 150) {
    carouselBeltMargin += 600;
    carouselBelt.style.marginLeft = `${carouselBeltMargin}px`;
  }
};

const handleRightButton = () => {
  if (carouselBeltMargin > -1050) {
    carouselBeltMargin -= 600;
    carouselBelt.style.marginLeft = `${carouselBeltMargin}px`;
  }
};

const carouselLeftBtn = document.getElementById("carouselLeftBtn");
carouselLeftBtn.addEventListener("click", handleLeftButton);

const carouselRightBtn = document.getElementById("carouselRightBtn");
carouselRightBtn.addEventListener("click", handleRightButton);

// Accordion
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion");

  accordionItems.forEach((item) => {
    const accordionButton = item.querySelector(".accordion-button");
    const content = item.querySelector(".accordion-content");

    accordionButton.addEventListener("click", function () {
      content.classList.toggle("accordion-content-active");
      if (accordionButton.innerHTML === "+") {
        accordionButton.innerHTML = "-";
      } else {
        accordionButton.innerHTML = "+";
      }
    });
  });
});
