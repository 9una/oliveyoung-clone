$(document).ready(function(){
    $('#header').load("header.html");
    $('#mobileLnb').load("mLnb.html");
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

//banner-type1
const banner = document.querySelectorAll('.banner-type1 > div');
for(let i = 0; i < banner.length; i++){
    banner[i].addEventListener('click', ()=>{
        let j = 0;
        while(j < banner.length){
            banner[j++].classList.remove('index-first')
        }
        banner[i].classList.add('index-first');
    });
}

//list-type
const listType = document.querySelectorAll('.list-type');
for(let i = 0; i < listType.length; i++){
    const listItem = listType[i].querySelectorAll('.content li');
    for(let j = 0; j < listItem.length; j++){
        listItem[j].addEventListener('click', ()=>{
            let k = 0;
            while(k < listItem.length) {
                listItem[k++].classList.remove('active');
            }
            listItem[j].classList.add('active');
        })
    }
}

const mobileFootTab = document.querySelectorAll('#mobile-footer-tab li');
for(let i = 0; i < mobileFootTab.length; i++){
    mobileFootTab[i].addEventListener('click', ()=>{
        let j = 0;
        while(j < mobileFootTab.length){
            mobileFootTab[j++].classList.remove('active');
        }
        mobileFootTab[i].classList.add('active');
    })
}

function mobileLocalNav(){
    const mobileLnb = document.getElementById('mobileLnb');
    mobileLnb.classList.toggle('active');
    mobileFootTab[0].classList.toggle('active');
    if(mobileLnb.classList.contains('active')){
        document.querySelector('body').style.overflow = "hidden";
    }
    if(mobileLnb.classList.contains('active') == false){
        console.log('hi');
    }
}