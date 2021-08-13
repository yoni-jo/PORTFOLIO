"use strict"


// 스크롤 시 navbar 색상변경 
const navbar = document.querySelector('#navbar');
const navbar_Height = navbar.getBoundingClientRect().height;

const BLUE = 'blue'
document.addEventListener("scroll", (event) => {
    const scrollHeight = window.scrollY

    if (scrollHeight > navbar_Height) {
        navbar.classList.add(`${BLUE}`)
    } else {
        navbar.classList.remove(`${BLUE}`)
    }

})

//메뉴 클릭시 해당 세션으로 스크롤 이벤트주기.

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const hook = target.dataset.hook;
    if (hook == null) {
        return;
    } else {
        scrollToSlide(hook)
    }
})

//contact me버튼 클릭시 해당 세션으로 스크롤 이벤트주기.
const contact_Btn = document.querySelector('.contact--btn');

contact_Btn.addEventListener('click', (event) => {
    const target = event.target;
    const hook = target.dataset.hook;
    if (hook == null) {
        return;
    } else {
        scrollToSlide(hook)
    }
})

// 해당 세션으로 이동하는 함수
function scrollToSlide(selector) {
    const section = document.querySelector(selector);
    const section_Top = section.offsetTop - navbar_Height
    window.scrollTo({
        top: section_Top,
        behavior: "smooth"
    })
}

//스크롤시 home 세션의 opacity값이 변하게하기

const homeSection = document.querySelector('#home')
const homeSection_Height = homeSection.getBoundingClientRect().height

document.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY
    let opacity = 1-scrollHeight/homeSection_Height
   
    homeSection.style.opacity=opacity
})