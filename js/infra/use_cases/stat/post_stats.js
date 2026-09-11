import show_message from "../../../helpers/show_message.js";
import get_current_date from '../../../helpers/get_current_date.js';

async function post_stats(id) {
    const employees_main_painel = document.querySelector('.employees-main-painel');
    const editable_cells = document.querySelectorAll(
        '.employees-main-painel-display td[data-editable="true"]'
    );
    const body = {
        employee_id: id,
        date: get_current_date()
    };
    if(editable_cells) {
        editable_cells.forEach(cell => {
            const row = cell.closest('tr');
            const counter_code = row.dataset.code;
            const value = Number(
                cell.textContent.trim()
            ) || 0;
            body[counter_code] = value;
        });
    }
    const request = await fetch('http://127.0.0.1:3000/post_stats', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });


    const status = request.status;
    const json = await request.json();

    if(status === 400) {
        show_message(employees_main_painel, 'error', `${json.message}`);
        return;
    }

    show_message(employees_main_painel, 'success', `${json.message}`);
}

export default post_stats;