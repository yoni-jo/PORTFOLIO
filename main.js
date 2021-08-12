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