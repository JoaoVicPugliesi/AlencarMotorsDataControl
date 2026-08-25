import employees_component from "../components/employees_component.js";

const cards_slider = document.querySelector('.cards-main-slider');

function display_employees_cards (employees) {
    if(!employees) return;
    cards_slider.innerHTML = '';
    const employees_len = employees.length;
    // const sorted_employees = [...employees].sort(employees.daily_counter);
    // const sorted_employees = [...employees].sort((a, b) => b.daily_counter - a.daily_counter);
    for(let i = 0; i < employees_len; i++) {
        const current = employees[i];
        const { id, name, image, post_counter, leads_counter, passantes_counter, leads_atendidos_counter, prospection_counter, spoken_prospection_counter, sales_counter, sales_in_negotiation_counter, cadastros_counter, simulation_counter} = current;
        cards_slider.innerHTML += employees_component(id, name, image, post_counter, leads_counter, passantes_counter, leads_atendidos_counter, prospection_counter, spoken_prospection_counter, sales_counter, sales_in_negotiation_counter, cadastros_counter, simulation_counter);
    }

}

export default display_employees_cards;