// Page dosen't show untill animation done
let main = document.getElementsByTagName("main")[0];
main.style.display = "none";
setTimeout(() => {
  main.style.display = "block";
}, 2490);

// Carousel
let target;
let list = document.getElementsByClassName("overlay-list");
let carousel = document.getElementsByClassName("carousel-item");
// navbar change
let li = document.querySelectorAll(".nav-item a");
li[0].addEventListener("click", () => {
  removeClass();
  li[0].classList.add("active");
});
li[1].addEventListener("click", () => {
  removeClass();
  li[1].classList.add("active");
});
li[2].addEventListener("click", () => {
  removeClass();
  li[2].classList.add("active");
});
li[3].addEventListener("click", () => {
  removeClass();
  li[3].classList.add("active");
});
li[4].addEventListener("click", () => {
  removeClass();
  li[4].classList.add("active");
});
li[5].addEventListener("click", () => {
  removeClass();
  li[5].classList.add("active");
});
li[6].addEventListener("click", () => {
  removeClass();
  li[6].classList.add("active");
});
function removeClass() {
  for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("active");
  }
}

// Nav Bar
let nav = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.scrollY >= 700) {
    nav.classList.add("dark");
  } else {
    nav.classList.remove("dark");
  }
};

let iconContainer = document.querySelector(".icon-container");
let toggle = false;

iconContainer.addEventListener("click", () => {
  if (toggle === false) {
    document.querySelector(".menu-icon span:first-child").style = `
        top: 6px; transform: rotate(45deg);
      `;
    document.querySelector(".menu-icon span:nth-child(2)").style = `
      opacity: 0;
    `;
    document.querySelector(".menu-icon span:last-child").style = `
      top: 6px;transform: rotate(-45deg);
    `;
    toggle = !toggle;
  } else {
    document.querySelector(".menu-icon span:first-child").style = `
      top: 0px; transform: rotate(0deg);
    `;
    document.querySelector(".menu-icon span:nth-child(2)").style = `
      opacity: 1;
    `;
    document.querySelector(".menu-icon span:last-child").style = `
      top: 12px;transform: rotate(0deg);
    `;
    toggle = !toggle;
  }
});

let li2 = document.getElementsByClassName('overlay-list');
var car = document.getElementById('carouselExampleAutoplaying');
car.addEventListener("slid.bs.carousel", function (e) {
  li2[e.from].classList.remove('list-active')
  li2[e.to].classList.add('list-active')
});


// Get a reference to the carousel element
var allCarsouel = document.querySelectorAll('.carousel-fade');
var targetCarsouel;
var intervalId; // Variable to store the interval ID
var isHovered = false; // Flag to track hover state
console.log(allCarsouel);

// Function to start auto-play
function startAutoPlay(targetCarsouel) {
  intervalId = setInterval(function () {
    // Trigger the carousel to move to the next slide
    nextSlide(targetCarsouel);
  }, 1000); // Adjust the time interval as needed (e.g., 3 seconds)
}

// Function to stop auto-play
function stopAutoPlay() {
  clearInterval(intervalId);
}

// Function to move to the next slide
function nextSlide(targetCarsouel) {
  var activeSlide = targetCarsouel.querySelector('.carousel-item.active');
  var nextSlide= activeSlide.nextElementSibling;
  if (activeSlide.nextElementSibling) {
    nextSlide = activeSlide.nextElementSibling
  } else {
    nextSlide = targetCarsouel.querySelectorAll('.carousel-item')[0];
  }
  activeSlide.classList.remove('active');
  nextSlide.classList.add('active');
}

Array.from(allCarsouel).forEach(function (targetCarsouel) {
  targetCarsouel.addEventListener('mouseenter', function () {
    console.log('Enter');
    isHovered = true;
    startAutoPlay(targetCarsouel);
  });
  targetCarsouel.addEventListener('mouseleave', function () {
    isHovered = false;
    console.log('Leave')
    stopAutoPlay();
  
  });
});