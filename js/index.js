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

// ?????? ??????
function popularEvent() { 
    let position = 0;
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

// ?????? ?????????????????????
function onlyEvent() { 
    const bannerType3 = document.querySelector('.banner-type3');
    const list = bannerType3.querySelector('.content ul');

    const pagination = document.createElement('div');
    pagination.className = `pagination`;
    
    function pagiSlide() {
        let position = 0;
        const pagiBtn = pagination.querySelectorAll('button'),
                LIST_WIDTH = 100 / pagiBtn.length;
        
        if (window.innerWidth >= 901) {
            for (let i = 0; i < pagiBtn.length; i++) {
                pagiBtn[i].addEventListener('click', () => {
                    position = LIST_WIDTH * i;
                    list.style.transform = `translateX(-${position}%)`;
                    let j = 0;
                    while (j < pagiBtn.length) {
                        pagiBtn[j++].classList.remove('active');
                    }
                    pagiBtn[i].classList.add('active');
                })
            }
        }
    }

    function addPagi() {
        if (window.innerWidth >= 901) {
            //pagination change
            pagination.innerHTML = `<button type="button" class="active">1</button>
                            <button type="button">2</button>`;
            bannerType3.querySelector('.cont-title').appendChild(pagination);
            pagiSlide();
        } else {
            //pagination remove
            list.style.transform = `translateX(0)`;
            if (document.querySelector('.banner-type3 .cont-title .pagination')) { 
                document.querySelector('.banner-type3 .cont-title .pagination').remove();
            }
        }
    }
    addPagi();
    window.addEventListener('resize', addPagi);
};
onlyEvent();

// HEALTHY LIFE
function healthylife(){
    const bannerType4 = document.querySelector('.banner-type4'),
        list = bannerType4.querySelector('.content ul'),
        item = bannerType4.querySelectorAll('.content ul li'),
        LIST_WIDTH = 100 / item.length,
        prevBtn = bannerType4.querySelector('.prev-btn'),
        nextBtn = bannerType4.querySelector('.next-btn');
    
    let curPos = 0,
        position = 0;
    const itemWidth = 280;
    

    function pcSlide() { 
        if (window.innerWidth >= 901) { 
            list.style.transform = `translateX(0%)`;
            function prev() { 
                if (curPos > 0) {
                    curPos -= 1;
                    position += LIST_WIDTH;
                } else { 
                    curPos = item.length - 3;
                    position -= LIST_WIDTH * curPos;
                }
                list.style.transform = `translateX(${position}%)`;
            }
            function next(){
                if(curPos < item.length - 3){
                    curPos += 1;
                    position -= LIST_WIDTH;
                }else {
                    curPos = 0;
                    position = 0;
                }
                list.style.transform = `translateX(${position}%)`;
            }
            prevBtn.addEventListener('click', prev);
            nextBtn.addEventListener('click', next);
        }
    }
    function mobileSlide() { 
        if (window.innerWidth <= 900) { 
            let start_x, end_x;
            list.style.transform = `translateX(0%)`;

            function activeChange() {
                let i = 0;
                while (i < item.length) {
                    item[i++].classList.remove('active');
                }
                item[curPos].classList.add('active');
            }
            function prev() {
                if (curPos > 0) {
                    curPos -= 1;
                } else { //curPos = first item
                    curPos = item.length - 1;
                }
                list.style.transform = `translateX(calc(-${itemWidth}px * ${curPos}))`;
                activeChange();
            }
            function next() {
                if (curPos < item.length - 1) {
                    curPos += 1;
                } else { //curPos = last item
                    curPos = 0;
                }
                list.style.transform = `translateX(calc(-${itemWidth}px * ${curPos}))`;
                activeChange();
            }
            function touch_start(event) {
                start_x = event.touches[0].pageX;
            }
            function touch_end(event) {
                end_x = event.changedTouches[0].pageX;
                if (start_x > end_x) {
                    next();
                } else {
                    prev();
                }
            }
            list.addEventListener('touchstart', touch_start);
            list.addEventListener('touchend', touch_end);
        }
    }

    pcSlide();
    mobileSlide();
}
healthylife();
window.addEventListener('resize', healthylife);

// ????????? ??????
function countDown() {
    const now = new Date(),
          end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),24,00,00);
  
    const nt = now.getTime(),
          et = end.getTime();

    const timer = document.querySelector('.slide-type .timer'),
          hours = timer.querySelector('.hours'),
          minutes = timer.querySelector('.minutes'),
          seconds = timer.querySelector('.seconds');

   if(et > nt) {
        let sec = parseInt(et - nt) / 1000;
        let day  = parseInt(sec/60/60/24);
        sec = (sec - (day * 60 * 60 * 24));
        let hour = parseInt(sec/60/60);
        sec = (sec - (hour*60*60));
        let min = parseInt(sec/60);
        sec = parseInt(sec-(min*60));

        if(hour<10){hour="0"+hour;}
        if(min<10){min="0"+min;}
        if(sec<10){sec="0"+sec;}

        hours.innerText = `${hour}`;
        minutes.innerText = `${min}`;
        seconds.innerText = `${sec}`;
   }
 }
 setInterval(countDown, 1000);


//???????????? ??????      
const offlineStore = document.querySelector('.offline-store .wrapper'),
offlineStoreHtml = offlineStore.innerHTML,
offlineStoreDesktopHtml = `<div>
  <h3>???????????? ????????????</h3><span>??? ?????? ?????? ????????? ??????????????????.</span>
  <a href="#"><i class="fas fa-map-marker-alt"></i>??? ?????? ????????? ???????????????? <i class="fas fa-chevron-right"></i></a>
</div>
<div>
  <a href="#" class="img"><img src="https://image.oliveyoung.co.kr/uploads/images/store/D352_1.jpg" alt="????????????"></a>
  <div>
      <b>?????? ?????? ??????</b><a href="#">?????????????????? <i class="fas fa-chevron-right"></i></a>
      <span>?????????</span><a href="#" class="interest-store"><i class="far fa-star"></i> 2,2462?????? ?????????????????? ??????????????????.</a>
      <a href="#">??? ???????????? ?????? ?????? ?????????? <small>???????????? ??????????????? ?????????</small></a>
  </div>
</div>`;

// pc - ??????&????????????
const noticeCS = document.createElement('section');
noticeCS.className = `notice-cs`;
noticeCS.innerHTML = `<div class="notice">
    <h3>????????????</h3><p>????????? ????????? ?????????</p><a href="#">????????? ></a>
</div>
<div class="banner">
    <img src="https://image.oliveyoung.co.kr/pc-static-root/image/main/img_mobile_app.png" alt="????????? ??? : ???????????? ??? ?????? ????????????" />
</div>
<div class="cs">
    <h3>????????????<br>????????????</h3>
    <p>???????????? ????????????<br><strong>1234-1234</strong><br>?????? ????????????<br><strong>1233-1233</strong></p>
    <div>
        <p><b>???????????? ???????????? [?????? 09:00 - 18:00]</b><br>?????? ??? ???????????? 1:1??????????????? ??????????????????.<br>????????? ???????????? ?????? ?????????????????????.</p>
        <a href="#"><i class="fas fa-pencil-alt"></i> 1:1 ????????????</a>
        <a href="#"><i class="fas fa-comment-dots"></i> ???????????? ??????</a>
    </div>
</div>`;

//make go-top btn (desktop size)
const pcGoTop = document.createElement("a");
pcGoTop.id = "pc__go-top";
pcGoTop.setAttribute('href', "#header");
pcGoTop.innerHTML = `<i class="fas fa-arrow-up"></i>`;


function mediaScreenSizeChange(){
    if(window.innerWidth >= 901){
        //?????????????????? html ??????
        offlineStore.innerHTML = offlineStoreDesktopHtml;
        //notice-cs
        document.getElementById('container').append(noticeCS);
        //go-top;
        document.querySelector('body').append(pcGoTop);
    }else {
        offlineStore.innerHTML = offlineStoreHtml;
        if (pcGoTop && noticeCS) { 
            pcGoTop.remove();
            noticeCS.remove();
        }
    }
}
mediaScreenSizeChange();
window.addEventListener('resize', mediaScreenSizeChange);
