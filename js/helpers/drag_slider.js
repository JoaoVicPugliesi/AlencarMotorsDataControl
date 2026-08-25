const cards_main_slider = document.querySelector('.cards-main-slider');

function drag_slider() {

    let is_dragging = false;
    let start_x = 0;
    let scroll_left = 0;

    cards_main_slider.addEventListener('mousedown', (e) => {

        is_dragging = true;
        start_x = e.pageX - cards_main_slider.offsetLeft;
        scroll_left = cards_main_slider.scrollLeft;

        cards_main_slider.classList.add('dragging');
    });

    cards_main_slider.addEventListener('mouseleave', () => {
        is_dragging = false;
        cards_main_slider.classList.remove('dragging');
    });

    cards_main_slider.addEventListener('mouseup', () => {
        is_dragging = false;
        cards_main_slider.classList.remove('dragging');
    });

    cards_main_slider.addEventListener('mousemove', (e) => {

        if (!is_dragging) return;

        e.preventDefault();

        const x = e.pageX - cards_main_slider.offsetLeft;
        const walk = (x - start_x) * 1.5;

        cards_main_slider.scrollLeft = scroll_left - walk;
    });
}

export default drag_slider;