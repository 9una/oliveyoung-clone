//main slide pagination
const mainPagination = document.querySelector('main .pagination');
const mainPaginationText = mainPagination.innerHTML;
function mainSlidePagenation() { 
    if (window.innerWidth >= 901) {
        mainPagination.innerHTML = `<button type="button" class="prev-btn" onclick="prev()"><i class="fas fa-chevron-left"></i></button>
        <p><span class="num"></span> / <span class="entire"></span></p>
        <button type="button" class="next-btn" onclick="next()"><i class="fas fa-chevron-right"></i></button>
        `;
    } else {
        mainPagination.innerHTML = mainPaginationText;
    }
}
mainSlidePagenation();
window.addEventListener('resize', mainSlidePagenation);

//main slide show
let curPos = 0;
let position = 0;
const main = document.querySelector('main'),
      slide = main.querySelector('.slide'),
      list = slide.querySelector('ul'),
      item = slide.querySelectorAll('li'),
      itemNum = main.querySelector('.pagination .num'),
      entireNum = main.querySelector('.pagination .entire'),
      ITEM_WIDTH = 100 / item.length;

function init(){
    itemNum.innerText = `${curPos + 1}`;
    entireNum.innerText = `${item.length}`;
}
init();

if(window.innerWidth >= 901){
    // 901 ~
    function prev(){
        if(curPos > 0){
            curPos -= 1;
        }else {
            //curPos = first item
            curPos = item.length - 1;
        }
        let j = 0;
        while(j < item.length){
            item[j++].classList.remove('active');
        }
        item[curPos].classList.add('active');
        itemNum.innerText = `${curPos + 1}`;
    }
    
    function next(){
        if(curPos < item.length - 1){
            curPos += 1;
        }else {
            //curPos = last item
            curPos = 0;
        }
        let j = 0;
        while(j < item.length){
            item[j++].classList.remove('active');
        }
        item[curPos].classList.add('active');
        itemNum.innerText = `${curPos + 1}`;
    }
}else {
    function prev(){
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
    
    function next(){
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


      
