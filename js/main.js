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

// setInterval(()=>{
//     checkClass()
// },2000)
// carousel[0].addEventListener('fullscreenchange',checkClass)
// carousel[1].addEventListener('fullscreenchange',checkClass)
// carousel[2].addEventListener('fullscreenchange',checkClass)
// function checkClass() {
//     for (let i = 0; i < carousel.length; i++) {
//         if (carousel[i].classList.contains('active')) {
//             target=i;
//         }

//     }
//     for (let i = 0; i < list.length; i++) {
//         list[i].classList.remove('list-active');

//     }
//     list[target].classList.add('list-active')
// }

// let classWatcher = new ClassWatcher(carousel[0], 'trigger', workOnClassAdd(0), workOnClassRemoval(0))
// let classWatcher2 = new ClassWatcher(carousel[1], 'trigger', workOnClassAdd(1), workOnClassRemoval(1))
// let classWatcher3 = new ClassWatcher(carousel[2], 'trigger', workOnClassAdd(2), workOnClassRemoval(2))

// function workOnClassAdd(i) {
//     list[i].classList.add('list-active')
// }
// function workOnClassRemoval(i) {
//     list[i].classList.remove('list-active')
// }
