const wrapper = document.querySelector(".sd");
const sections = wrapper.querySelectorAll(".section");

// init
sections[0].classList.add("active");

// scroll function
function scrollDetector() {
  const { scrollY, innerHeight } = window;
  let displayHeight = Math.round(innerHeight);
  let roundScrollY = Math.round(scrollY);

  sections.forEach(section => {
    const { y, height } = section.getBoundingClientRect();
    let sectionHeight = Math.round(height);
    let sectionY = Math.round(y);

    // add and remove active class
    let limit1 = displayHeight / 2 > sectionY;
    let limit2 = sectionY + (sectionHeight - displayHeight / 2) > 0;

    if (limit1 && limit2) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }    
  });


}
window.addEventListener("scroll", () => scrollDetector());
