import admin_component from "../../components/admin_component.js";

const admins_main_slider = document.querySelector('.admins-main-slider');

function display_admins_cards (employees) {
    if(!employees) return;
    admins_main_slider.innerHTML = '';
    const employees_len = employees.length;
    for(let i = 0; i < employees_len; i++) {
        if(employees[i].role != 'sale') {
            const current = employees[i];
            const { id, name, image} = current;
            admins_main_slider.innerHTML += admin_component(id, name, image);
        }
    }
}

export default display_admins_cards;