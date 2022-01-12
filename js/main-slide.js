//main slide pagination
const mainPagination = document.querySelector('main .pagination');
const mainPaginationText = mainPagination.innerHTML;
function mainSlidePagenation() { 
    if (window.innerWidth >= 901) {
        mainPagination.innerHTML = `<button type="button" class="prev-btn"><i class="fas fa-chevron-left"></i></button>
        <p><span>1</span>/<span>10</span></p>
        <button type="button" class="next-btn"><i class="fas fa-chevron-right"></i></button>
        <button type="button" class="pause-btn"><i class="fas fa-pause"></i></button>
        `;
    } else {
        mainPagination.innerHTML = mainPaginationText;
    }
}
mainSlidePagenation();
window.addEventListener('resize', mainSlidePagenation);

//main slide show
const mainSlide = document.getElementById('mainSlide');
const slideCont = mainSlide.querySelectorAll('#mainSlide .slide ul li');
const pageNum = mainSlide.querySelector('.pagination p span:first-child');
const pageAll = mainSlide.querySelector('.pagination p span:last-child');

function slideSet() { 
    pageAll.innerText = slideCont.length;
}
slideSet();


for (let i = 0; i < slideCont.length; i++) { 
    const nextBtn = mainSlide.querySelector('.pagination .next-btn');
    nextBtn.addEventListener('click', () => {
        let j = 0;
        while (j < slideCont.length) { 
            slideCont[j++].classList.remove('active');
        }
        slideCont[i].classList.add('active');
    });   
}