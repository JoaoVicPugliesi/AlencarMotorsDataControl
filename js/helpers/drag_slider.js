const employees_main_slider = document.querySelector('.employees-main-slider');
const dashboard_painel = document.querySelector('.dashboard-graph-painel');

function drag_slider(component) {

    let is_dragging = false;
    let start_x = 0;
    let scroll_left = 0;

    component.addEventListener('mousedown', (e) => {

        is_dragging = true;
        start_x = e.pageX - component.offsetLeft;
        scroll_left = component.scrollLeft;

        component.classList.add('dragging');
    });

    component.addEventListener('mouseleave', () => {
        is_dragging = false;
        component.classList.remove('dragging');
    });

    component.addEventListener('mouseup', () => {
        is_dragging = false;
        component.classList.remove('dragging');
    });

    component.addEventListener('mousemove', (e) => {

        if (!is_dragging) return;

        e.preventDefault();

        const x = e.pageX - component.offsetLeft;
        const walk = (x - start_x) * 1.5;

        component.scrollLeft = scroll_left - walk;
    });
}

function drag_slider_caller () {
    drag_slider(employees_main_slider);
    drag_slider(dashboard_painel);
}

export default drag_slider_caller;