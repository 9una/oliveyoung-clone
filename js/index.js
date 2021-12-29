$(document).ready(function(){
    $('#header').load("header.html");
    $('#footer').load("footer.html");
});



//mobile-scroll-header.fixed
const header = document.getElementById('header');
const mobileFooterTab = document.getElementById('mobile-footer-tab');
let lastScrollTop = 0;

function scrollFunc() { 
    let st = window.pageXOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop && st >= 120) {
        header.classList.add('scroll-down');
        mobileFooterTab.classList.add('scroll-down');
    }else{
        header.classList.remove('scroll-down');
        mobileFooterTab.classList.remove('scroll-down');
    }
    lastScrollTop = st <= 0 ? 0 : st;
}

window.addEventListener('scroll', scrollFunc);