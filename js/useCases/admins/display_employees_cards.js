import employee_component from "../../components/employee_component.js";

const employees_slider = document.querySelector('.employees-main-slider');

function display_employees_cards (employees) {
    if(!employees) return;
    employees_slider.innerHTML = '';
    const employees_len = employees.length;
    for(let i = 0; i < employees_len; i++) {
        if(employees[i].role != 'admin') {
            const current = employees[i];
            const { id, name, image} = current;
            employees_slider.innerHTML += employee_component(id, name, image);
        }
    }
}

export default display_employees_cards;