// @ts-nocheck
const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll(".news-container i");
const firstCardWith = carousel.querySelector(".news-item").offsetWidth;

arrowBtns.forEach( (btn)=>{
    btn.addEventListener('click', ()=>{
        carousel.scrollLeft = btn.id === "left" ? -firstCardWith : firstCardWith; 
    });
});

let isDragging = false, startX, startScrollLeft;

const dragStart = (e)=>{
    isDragging = true;
    carousel.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e)=>{
    if(!isDragging) return; 
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX); 

};
const dragStop = ()=>{
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);



// modal uchun

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnModal = document.querySelector('#modal-btn');
const closeModal = document.querySelector('.close-btn');
btnModal.addEventListener( 'click', ()=>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

overlay.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

closeModal.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

document.addEventListener('keydown', (e)=>{
    if(e.key === "Escape"){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})