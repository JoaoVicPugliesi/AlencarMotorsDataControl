import select_monthly_dashboard_data from "../infra/select_monthly_dashboard_data.js";
import make_employees_painel from "../useCases/employees/make_employees_painel.js";

function select_spreadsheet_option (db) {
    const options = document.querySelectorAll('.admins-main-painel-spreadsheets-header button');
    const spreadsheets = document.querySelector('.admins-main-painel-spreadsheets-display');
    options.forEach((o) => {
        o.addEventListener('click', async () => {
            options.forEach((i) => i.classList.remove('active'));
            const id = Number(o.getAttribute('data-id'));
            const data = await select_monthly_dashboard_data(id, db);
            const container = document.querySelector('.admins-main-painel-spreadsheets-diary')
            make_employees_painel(id, db, data, spreadsheets, container, 'admin');
            o.classList.add('active');
        });
    });
}

export default select_spreadsheet_option;