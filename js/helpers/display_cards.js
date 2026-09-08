import employee_component from "../components/employee_component.js";
import admin_component from "../components/admin_component.js";

function display_cards (container, component, employees, role) {
    if(!employees) return;
    container.innerHTML = '';
    const employees_len = employees.length;
    for(let i = 0; i < employees_len; i++) {
        if(employees[i].role != role) {
            const current = employees[i];
            const { id, name, image} = current;
            container.innerHTML += component(id, name, image);
        }
    }
}

function display_cards_caller (employees) {
    const admins_main_slider = document.querySelector('.admins-main-slider');
    const employees_slider = document.querySelector('.employees-main-slider');
    display_cards(employees_slider, employee_component, employees, 'admin');
    display_cards(admins_main_slider, admin_component, employees, 'sale');
}

export default display_cards_caller;