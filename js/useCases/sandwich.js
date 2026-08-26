const sandwich = document.querySelector('.header-anchors-sandwich');
const sandwich_btn = document.querySelector('.header-anchors-sandwich-btn');
const icon = document.querySelector('.header-anchors-sandwich-btn');

function open_sandwich () {
    sandwich_btn.addEventListener('click', () => {
    if(sandwich.classList.contains('active')) {
        sandwich.classList.remove('active');
        icon.innerHTML = '<i class="fa-solid fa-bars"></i>';
        return;
    }
    sandwich.classList.add('active');
    icon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
});
}

export default open_sandwich;