import get_stats from "../infra/use_cases/stat/get_stats.js";
import make_employees_painel from "../useCases/employees/make_employees_painel.js";

function select_spreadsheet_option () {
    const options = document.querySelectorAll('.admins-main-painel-spreadsheets-header button');
    const spreadsheets = document.querySelector('.admins-main-painel-spreadsheets-display');
    options.forEach((o) => {
        o.addEventListener('click', async () => {
            options.forEach((i) => i.classList.remove('active'));
            const id = Number(o.getAttribute('data-id'));
            const { json } = await get_stats('month', null, null, id);
            const { stats } = json;
            const container = document.querySelector('.admins-main-painel-spreadsheets-diary');
            const painel = document.querySelector('.admins-main-painel-spreadsheets');
            make_employees_painel(id, stats, spreadsheets, container, painel, 'admin');
            o.classList.add('active');
        });
    });
}

export default select_spreadsheet_option;