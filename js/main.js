// Page dosen't show untill animation done
var main = document.getElementsByTagName('main')[0];
main.style.display='none';
setTimeout(()=>{
    main.style.display='block';
},2490)

// Carousel
var target;
var list = document.getElementsByClassName('overlay-list');
var carousel = document.getElementsByClassName('carousel-item');
// navbar change
var li = document.querySelectorAll('.nav-item a');
li[0].addEventListener('click',()=>{
    removeClass()
    li[0].classList.add('active')
})
li[1].addEventListener('click',()=>{
    removeClass()
    li[1].classList.add('active')
})
li[2].addEventListener('click',()=>{
    removeClass()
    li[2].classList.add('active')
})
li[3].addEventListener('click',()=>{
    removeClass()
    li[3].classList.add('active')
})
li[4].addEventListener('click',()=>{
    removeClass()
    li[4].classList.add('active')
})
li[5].addEventListener('click',()=>{
    removeClass()
    li[5].classList.add('active')
})
li[6].addEventListener('click',()=>{
    removeClass()
    li[6].classList.add('active')
})
function removeClass() {
    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove('active');
    }
}

















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
