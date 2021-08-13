"use strict"


// 스크롤 시 navbar 색상변경 
// top버튼 스크롤시 생기게하기 
const navbar = document.querySelector('#navbar');
const navbar_Height = navbar.getBoundingClientRect().height;
const top_Btn = document.querySelector(".arrow_top--btn")

const BLUE = 'blue'
const HIDE = "hide"
const ACTIVE = 'active'
const SHOW = "show"
const SHOWING = 'showing'

document.addEventListener("scroll", (event) => {
    const scrollHeight = window.scrollY

    if (scrollHeight > navbar_Height) {
        navbar.classList.add(`${BLUE}`)
        top_Btn.classList.remove(`${HIDE}`)
    } else {
        navbar.classList.remove(`${BLUE}`)
        top_Btn.classList.add(`${HIDE}`)
    }

})

//메뉴 클릭시 해당 세션으로 스크롤 이벤트주기.
//"추가 "=>검색된 메뉴 색상 변경
const navbarMenu = document.querySelector('.navbar__menu');
const navbar_li = navbarMenu.querySelectorAll('li');


navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const hook = target.dataset.hook;
    if (hook == null) {
        return;
    }
    scrollToSlide(hook)
    
    //검색된 메뉴 색상 변경
    navbar_li.forEach(list => {
        list.classList.remove(`${ACTIVE}`)
    })
    target.classList.add(`${ACTIVE}`)
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

//top버튼 클릭시 HOME 화면으로 스크롤

top_Btn.addEventListener("click", (event) => {
    const target = event.target;
    const hook = target.dataset.hook;
    scrollToSlide(hook)
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
    let opacity = 1 - scrollHeight / homeSection_Height

    homeSection.style.opacity = opacity
})


// 프로젝트 클릭시 
//해당 프로젝트만 필터링해서 보여주기 
//"추가 "=>검색된 메뉴 색상 변경
const work_Categories = document.querySelector('.work__categories')
const category_Btn = work_Categories.querySelectorAll("li button")
const project = document.querySelectorAll('.project')
const work__projects = document.querySelector(".work__projects")


work_Categories.addEventListener('click', (event) => {

    const target = event.target;
    const filter = target.dataset.filter;

    //검색된 메뉴 색상 변경
    category_Btn.forEach(list => {
        list.classList.remove(`${ACTIVE}`)
    })
    target.classList.add(`${ACTIVE}`)

    if (filter == null) {
        return;
    }


    project.forEach((projects) => {
        const project_Type = projects.dataset.type

        projects.classList.add(SHOW)

        //클릭할때마다 애니메이션 효과주기
        work__projects.classList.add(`${SHOWING}`)
        setTimeout(() => {
            work__projects.classList.remove(`${SHOWING}`)
        }, 700)

        if (project_Type === filter) {
            projects.classList.remove(SHOW)

        } else if (filter === "all") {
            projects.classList.add(SHOW)

        }
    })


})