var openBtn = document.querySelector('.main__item-btn');
var popUp = document.querySelector('.pop-up');
var closeBtn = document.querySelector('.pop-up__block-btn');



openBtn.addEventListener('click', function() {
    popUp.classList.remove("noshown");
});

closeBtn.addEventListener('click', function() {
    popUp.classList.add("noshown");
})