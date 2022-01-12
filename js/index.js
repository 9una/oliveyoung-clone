$(document).ready(function(){
    $('#header').load("header.html");
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


/* innerWidth에 따른 컨텐츠 html변경 */
//pagination
const pagination = document.createElement('div');
pagination.className = "pagination";
pagination.innerHTML = `<ul>
    <li class="active"><button type="button">1</button></li>
    <li><button type="button">2</button></li>
</ul>`;

//브랜드
const brandText = document.querySelector('.brand .brand-name'),
      brandName = brandText.innerHTML;

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

//make go-top btn (desktop size)
const pcGoTop = document.createElement("a");
pcGoTop.id = "pc__go-top";
pcGoTop.setAttribute('href', "#header");
pcGoTop.innerHTML = `<i class="fas fa-arrow-up"></i>`;


function mediaScreenSizeChange(){
    if(window.innerWidth >= 901){
        //pagination추가
        document.querySelector('.brand .cont-title').appendChild(pagination);
        //브랜드 더보기 버튼
        brandText.innerHTML = `${brandName} 브랜드 상품 더보기 <i class="fas fa-chevron-right"></i>`;
        //오프라인매장 html 변경
        offlineStore.innerHTML = offlineStoreDesktopHtml;
        //go-top;
        document.querySelector('body').append(pcGoTop);
    }else {
        if(document.querySelector('.brand .cont-title .pagination')){
            document.querySelector('.brand .cont-title .pagination').remove();
        }
        brandText.innerHTML = `${brandName}`;
        offlineStore.innerHTML = offlineStoreHtml;
        pcGoTop.remove();
    }
}
mediaScreenSizeChange();
window.addEventListener('resize', mediaScreenSizeChange);
