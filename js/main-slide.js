const mainPagination = document.querySelector('main .pagination'),
      paginationHtml = mainPagination.innerHTML;

//main slide show
function mainSlide(){
    //pagination change
    if(window.innerWidth >= 901){
        mainPagination.innerHTML = `<button type="button" class="prev-btn"><i class="fas fa-chevron-left"></i></button>
        <p><span class="num"></span> / <span class="entire"></span></p>
        <button type="next" class="next-btn"><i class="fas fa-chevron-right"></i></button><button type="button" class="play-btn pause"><i class="fa-solid fa-pause"></i></button>`;
    } else {
        mainPagination.innerHTML = paginationHtml;
    }

    let curPos = 0,
        position = 0;
    const main = document.querySelector('main'),
        slide = main.querySelector('.slide'),
        list = slide.querySelector('ul'),
        item = slide.querySelectorAll('li'),
        itemNum = main.querySelector('.pagination .num'),
        entireNum = main.querySelector('.pagination .entire'),
        ITEM_WIDTH = 100 / item.length;
    
    const prevBtn = main.querySelector('.pagination .prev-btn'),
          nextBtn = main.querySelector('.pagination .next-btn');
        
    //init pagination num
    itemNum.innerText = `${curPos + 1}`;
    entireNum.innerText = `${item.length}`;
    
    list.style.transform = "translateX(0)";

    //main slide change - mobile or desktop
    function prev() { 
        if (window.innerWidth > 900) {
            if (curPos > 0) {
                curPos -= 1;
            } else { 
                curPos = item.length - 1;
            }
            let j = 0;
            while(j < item.length){
                item[j++].classList.remove('active');
            }
            item[curPos].classList.add('active');
            itemNum.innerText = `${curPos + 1}`;
        } else {
            if(curPos > 0){
                position += ITEM_WIDTH;
                list.style.transform = `translateX(${position}%)`;
                curPos -= 1;
            }else {
                //curPos = first item
                curPos = item.length - 1;
                position -= ITEM_WIDTH * curPos;
                list.style.transform = `translateX(${position}%)`;
            }
            itemNum.innerText = `${curPos + 1}`;
        }
    }

    function next() { 
        if (window.innerWidth > 900) {
            if (curPos < item.length - 1) {
                curPos += 1;
            } else { 
                curPos = 0;
            }
            let j = 0;
            while(j < item.length){
                item[j++].classList.remove('active');
            }
            item[curPos].classList.add('active');
            itemNum.innerText = `${curPos + 1}`;
        } else { 
            if(curPos < item.length - 1){
                position -= ITEM_WIDTH;
                list.style.transform = `translateX(${position}%)`;
                curPos += 1;
            }else {
                //curPos = last item
                curPos = 0;
                position = 0;
                list.style.transform = `translateX(0%)`;
            }
            itemNum.innerText = `${curPos + 1}`;
        }
    }

    if (window.innerWidth > 900) { 
        prevBtn.addEventListener('click', prev);
        nextBtn.addEventListener('click', next);
    }

    //touch event    
    let touch_start_x,
        touch_end_x;

    function touch_start(event){
        touch_start_x = event.touches[0].pageX;
    }
    function touch_end(event){
        touch_end_x = event.changedTouches[0].pageX;
        if(touch_start_x > touch_end_x){
            next();
        } else {
            prev();
        }
    }

    list.addEventListener('touchstart', touch_start);
    list.addEventListener('touchend', touch_end);

    //mouse down, up event
    let click_start_x,
        click_end_x;
    
    function click_start(event) { 
        click_start_x = event.clientX;
    }
    function click_end(event) { 
        click_end_x = event.clientX;
        if (click_start_x > click_end_x) {
            next();
        } else { 
            prev();
        }
    }
    slide.addEventListener('mousedown', click_start);
    slide.addEventListener('mouseup', click_end);

    //slide play

    let delay = 300;
    let play = setInterval(next, 4000);
    
    //media 900px ~ play & pause button
    if (window.innerWidth > 900) { 
        const playBtn = document.querySelector('#mainSlide .play-btn');
        playBtn.addEventListener('click', () => {
            if (playBtn.classList.contains('pause')) {
                clearInterval(play);
                playBtn.className = 'play-btn play';
                playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    
            } else if (playBtn.classList.contains('play')) {
                
                play = setInterval(next, 4000);
                playBtn.className = 'play-btn pause';
                playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            }
        })
    }

    window.addEventListener('resize', () => { 
        clearInterval(play);
        play = setTimeout(function(){
            console.log('resize');
        }, delay);
    })
}
mainSlide();
window.addEventListener('resize', mainSlide);


//slide text change
const slideItem = document.querySelectorAll('main .slide li');

for(let i = 0; i < slideItem.length; i++){
    const text = slideItem[i].querySelector('.text');
    const textHtml = text.innerHTML;

    function slideText(){
        if(window.innerWidth <= 900){
            text.innerHTML = textHtml;
        }else {
            if(i == 0){
                text.innerHTML = `<b>로이비/세르주루텐</b>
                <p>나에게 주는<br>새해 첫 선물은<br>스몰 럭셔리</p>
                <span>최대 15% 할인 + 샘플 증정</span>`;
            } else if(i == 1){
                text.innerHTML = `<b>스킨앤랩</b>
                <p>보습 캡슐이<br>지켜주는<br>피부 장벽</p>
                <span>#보습장벽크림 30% 할인</span>`;
            } else if(i == 2){
                text.innerHTML = `<b>피카소 꼴레지오니</b>
                <p>섬세한 브러쉬로<br>귀여움까지 함께<br>그려보아요</p>
                <span>차니베어 콜라보 컬렉션 런칭</span>`;
            } else if(i == 3){
                text.innerHTML = `<b>1월 생일선물🎂</b>
                <p>생일축하해!<br>올리브를 위한<br>선물 받아줘🎁</p>
                <span>#브링그린티룸핸드크림</span>`;
            }
        }
    }
    slideText();
    window.addEventListener('resize', slideText);
}


