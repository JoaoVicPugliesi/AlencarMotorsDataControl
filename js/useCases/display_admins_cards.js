import admin_component from "../components/admin_component.js";

const admins_slider = document.querySelector('.admins-main-slider');

function display_admins_cards (employees) {
    if(!employees) return;
    admins_slider.innerHTML = '';
    const employees_len = employees.length;
    for(let i = 0; i < employees_len; i++) {
        if(employees[i].role != 'sale') {
            const current = employees[i];
            const { id, name, image} = current;
            admins_slider.innerHTML += admin_component(id, name, image);
        }
    }
}

export default display_admins_cards;