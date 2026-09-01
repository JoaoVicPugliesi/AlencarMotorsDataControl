import employees_component from "../components/employees_component.js";

const cards_slider = document.querySelector('.cards-main-slider');

function display_employees_cards (employees) {
    if(!employees) return;
    cards_slider.innerHTML = '';
    const employees_len = employees.length;
    for(let i = 0; i < employees_len; i++) {
        if(employees[i].role != 'admins') {
            const current = employees[i];
            const { id, name, image} = current;
            cards_slider.innerHTML += employees_component(id, name, image);
        }
    }
}

export default display_employees_cards;