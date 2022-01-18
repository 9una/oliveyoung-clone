$(document).ready(function(){
    $('#header').load("header.html");
    $('.brand').load("brand.html");
    $('#mobileLnb').load("mLnb.html");
    $('#footer').load("footer.html");
});
//header, footer, mobileLnb load - jquery


//mobile-scroll-header.fixed - ~ 900px
const header = document.getElementById('header'),
      mobileFooterTab = document.getElementById('mobile-footer-tab');
      
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

if(window.innerWidth <= 900){
    window.addEventListener('scroll', scrollFunc);
} else {
    
}

//banner-type1
const bannerTypeOne = document.querySelectorAll('.banner-type1 .banner-item');
for(let i = 0; i < bannerTypeOne.length; i++){
    bannerTypeOne[i].addEventListener('click', ()=>{
        let j = 0;
        while(j < bannerTypeOne.length){
            bannerTypeOne[j++].classList.add('index-first')
        }
        bannerTypeOne[i].classList.remove('index-first');
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
    const goTop = document.querySelector('.go-top');

    goTop.classList.toggle('invisible');
    mobileLnb.classList.toggle('active');
    mobileFootTab[0].classList.toggle('active');
    if(mobileLnb.classList.contains('active')){
        document.querySelector('body').style.overflow = "hidden";
    }
    if(mobileLnb.classList.contains('active') == false){
        document.querySelector('body').style = "";
    }
}

// 인기 행사
function popularEvent() { 
    let curPos = 0,
        position = 0;
    
    const popularEvent = document.querySelector('.popular-event'),
        pagination = popularEvent.querySelector('.pagination'),
        paginationHtml = pagination.innerHTML,
        list = popularEvent.querySelector('.content ul');
    
    function slideChange() {
        if (window.innerWidth >= 901) {
            pagination.innerHTML = `<button type="button" class="active">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>`;

            const pageItem = popularEvent.querySelectorAll('.pagination button'),
                  ITEM_WIDTH = 100 / pageItem.length; 
            
            list.style.transform = `translateX(0)`;
            
            for (let i = 0; i < pageItem.length; i++) { 
                pageItem[i].addEventListener('click', () => {
                    let j = 0;
                    while (j < pageItem.length) {
                        pageItem[j++].classList.remove('active');
                    }
                    pageItem[i].classList.add('active');
                    position = ITEM_WIDTH * i;

                    list.style.transform = `translateX(-${position}%)`;
                })
            }
        }
        if (window.innerWidth <= 900) {
            pagination.innerHTML = paginationHtml;
            
            const pageItem = popularEvent.querySelectorAll('.pagination button'),
                  ITEM_WIDTH = 100 / pageItem.length;
            
            list.style.transform = `translateX(0)`;

            for (let i = 0; i < pageItem.length; i++) {
                pageItem[i].addEventListener('click', () => {
                    let j = 0;
                    while (j < pageItem.length) {
                        pageItem[j++].classList.remove('active');
                    }
                    pageItem[i].classList.add('active');
                    position = ITEM_WIDTH * i;
                    list.style.transform = `translateX(-${position + 0.1}%)`;
                    if (i == pageItem.length - 1) {
                        list.style.transform = `translateX(-85.4%)`;
                    }
                })
            }
        }
    }
    slideChange();
    window.addEventListener('resize', slideChange);
};
popularEvent();


//오프라인 매장      
const offlineStore = document.querySelector('.offline-store .wrapper'),
offlineStoreHtml = offlineStore.innerHTML,
offlineStoreDesktopHtml = `<div>
  <h3>올리브영 매장소식</h3><span>내 주변 인기 매장을 추천해드려요.</span>
  <a href="#"><i class="fas fa-map-marker-alt"></i>내 주변 매장이 궁금하다면? <i class="fas fa-chevron-right"></i></a>
</div>
<div>
  <a href="#" class="img">img</a>
  <div>
      <b>인기 매장 추천</b><a href="#">올리브영 서면 타운 <i class="fas fa-chevron-right"></i></a>
      <span>영업중</span><a href="#" class="interest-store"><i class="far fa-star"></i> 6,348명이 관심매장으로 등록했습니다.</a>
      <a href="#">이 매장에서 진행 중인 행사는? <small>진행중인 행사소식이 없어요</small></a>
  </div>
</div>`;

// pc - 공지&고객센터
const noticeCS = document.createElement('section');
noticeCS.className = `notice-cs`;
noticeCS.innerHTML = `<div class="notice">
    <h3>공지사항</h3><p>새로운 소식이 없어요</p><a href="#">더보기 ></a>
</div>
<div class="banner">
    <img src="https://image.oliveyoung.co.kr/pc-static-root/image/main/img_mobile_app.png" alt="모바일 앱 : 모바일로 더 쉽고 편리하게" />
</div>
<div class="cs">
    <h3>고객센터<br>이용안내</h3>
    <p>온라인몰 고객센터<br><strong>1234-1234</strong><br>매장 고객센터<br><strong>1233-1233</strong></p>
    <div>
        <p><b>고객센터 운영시간 [평일 09:00 - 18:00]</b><br>주말 및 공휴일은 1:1문의하기를 이용해주세요.<br>업무가 시작되면 바로 처리해드립니다.</p>
        <a href="#"><i class="fas fa-pencil-alt"></i> 1:1 문의하기</a>
        <a href="#"><i class="fas fa-comment-dots"></i> 자주하는 질문</a>
    </div>
</div>`;

//make go-top btn (desktop size)
const pcGoTop = document.createElement("a");
pcGoTop.id = "pc__go-top";
pcGoTop.setAttribute('href', "#header");
pcGoTop.innerHTML = `<i class="fas fa-arrow-up"></i>`;


function mediaScreenSizeChange(){
    if(window.innerWidth >= 901){
        //오프라인매장 html 변경
        offlineStore.innerHTML = offlineStoreDesktopHtml;
        //notice-cs
        document.getElementById('container').append(noticeCS);
        //go-top;
        document.querySelector('body').append(pcGoTop);
    }else {
        offlineStore.innerHTML = offlineStoreHtml;
        if (pcGoTop) { 
            pcGoTop.remove();
        }
        if (noticeCS) { 
            noticeCS.remove();
        }
    }
}
mediaScreenSizeChange();
window.addEventListener('resize', mediaScreenSizeChange);
