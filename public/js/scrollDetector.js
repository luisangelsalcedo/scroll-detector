// set
let lastScrollPosition = 0;
const root = document.querySelector("body");
const wrapper = document.querySelector(".sd");
const sections = wrapper.querySelectorAll(".section");
let currentSection = sections[0].id;

// init
sections[0].classList.add("active");
sections[0].classList.add("completely");

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
    let limitA = displayHeight / 2 > sectionY;
    let limitB = sectionY + (sectionHeight - displayHeight / 2) > 0;

    if (limitA && limitB) {
      section.classList.add("active");
      
      // detected section name
      if(currentSection != section.id){
        root.className = ''
        root.classList.add(section.id)
        currentSection = section.id
      }
    } else {
      section.classList.remove("active");
    }  
    
    // add and remove completely class    
    let limitC = sectionY <= 0;
    let limitD = sectionY + sectionHeight > 0;

    if (limitC && limitD) {
      section.classList.add("completely");
    } else {
      section.classList.remove("completely");
    }    
  });

  // scroll directions
  const { top } = root.getBoundingClientRect();
  if (top > lastScrollPosition) {
      root.setAttribute("data-direction", "up");
  } else {
      root.setAttribute("data-direction", "down");
  }
  lastScrollPosition = top;

}
window.addEventListener("scroll", () => scrollDetector());
