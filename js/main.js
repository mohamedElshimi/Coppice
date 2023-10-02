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
  if (window.scrollY >= 500) {
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
let car = document.getElementById('carouselExampleAutoplaying');
car.addEventListener("slid.bs.carousel", function (e) {
  li2[e.from].classList.remove('list-active')
  li2[e.to].classList.add('list-active')
});

// Get a reference to the carousel element
// let carousel2 = document.getElementById('carouselExampleFade');
// let intervalId; // letiable to store the interval ID
// let isHovered = false; // Flag to track hover state

// // Function to start auto-play
// function startAutoPlay() {
//   intervalId = setInterval(function () {
//     // Trigger the carousel to move to the next slide
//     nextSlide();
//   }, 2000); // Adjust the time interval as needed (e.g., 3 seconds)
// }

// // Function to stop auto-play
// function stopAutoPlay() {
//   clearInterval(intervalId);
// }

// // Function to move to the next slide
// function nextSlide() {
//   let activeSlide = carousel2.querySelector('.carousel-item.active');
//   let nextSlide;
//   if (activeSlide.nextElementSibling) {
//     nextSlide = activeSlide.nextElementSibling;
//   } else {
//     nextSlide = carousel2.querySelectorAll('.carousel-item')[0];
//   }
//   // nextSlide = activeSlide.nextElementSibling;

//   activeSlide.classList.remove('active');
//   nextSlide.classList.add('active');
// }

// // Event listener for mouse enter
// carousel2.addEventListener('mouseenter', function (e) {
//   console.log(e.target);
//   isHovered = true;
//   startAutoPlay();
// });

// // Event listener for mouse leave
// carousel2.addEventListener('mouseleave', function () {
//   isHovered = false;
//   stopAutoPlay();
// });

// // Start auto-play initially (optional)
// // startAutoPlay();


// let carousel3 = document.getElementById('carouselExampleFade2');
// let intervalId2; // letiable to store the interval ID
// let isHovered2 = false; // Flag to track hover state

// // Function to start auto-play
// function startAutoPlay() {
//   intervalId2 = setInterval(function () {
//     // Trigger the carousel to move to the next slide
//     nextSlide();
//   }, 2000); // Adjust the time interval as needed (e.g., 3 seconds)
// }

// // Function to stop auto-play
// function stopAutoPlay() {
//   clearInterval(intervalId2);
// }

// // Function to move to the next slide
// function nextSlide() {
//   let activeSlide = carousel3.querySelector('.carousel-item.active');
//   let nextSlide;
//   if (activeSlide.nextElementSibling) {
//     nextSlide = activeSlide.nextElementSibling;
//   } else {
//     nextSlide = carousel3.querySelectorAll('.carousel-item')[0];
//   }
//   // nextSlide = activeSlide.nextElementSibling;

//   activeSlide.classList.remove('active');
//   nextSlide.classList.add('active');
// }

// // Event listener for mouse enter
// carousel3.addEventListener('mouseenter', function (e) {
//   console.log(e.target);
//   isHovered2 = true;
//   startAutoPlay();
// });

// // Event listener for mouse leave
// carousel3.addEventListener('mouseleave', function () {
//   isHovered2 = false;
//   stopAutoPlay();
// });