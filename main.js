"use strict"


// 스크롤 시 navbar 투명도주기 
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