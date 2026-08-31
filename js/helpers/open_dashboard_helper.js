import find_employee from "../helpers/find_employee.js";
import make_dashboard from "./make_dashboard.js";
import select_monthly_dashboard_data from "./select_monthly_dashboard_data.js";
import update_monthly_dashboard_data from "./update_monthly_dashboard_data.js";

async function open_dashboard_helper(employees, db, btn) {
    const html = document.querySelector('.html');

    const id = btn.getAttribute('data-id');

    const employee = find_employee(id, employees);

    if (!employee) return;

    const confirm = btn.closest('.card-main-confirm');

    const input = confirm.querySelector(
        '.card-main-confirm-input input'
    );

    if (Number(employee.password) !== Number(input.value)) return;

    const employee_dashboard_name =
        document.querySelector('.dashboard-name h3');

    employee_dashboard_name.textContent =
        `Olá, ${employee.name}. Esses são seus dados.`;

    const dashboard = document.querySelector('.dashboard');

    const data = await select_monthly_dashboard_data(id, db);

    make_dashboard(data, id);

    dashboard.classList.add('opened');
    html.classList.add('noscroll');

    const save_btn =
        document.querySelector('.dashboard-save-command');

    save_btn.addEventListener('click', async () => {
        await update_monthly_dashboard_data(id, db);
    });
}

export default open_dashboard_helper;