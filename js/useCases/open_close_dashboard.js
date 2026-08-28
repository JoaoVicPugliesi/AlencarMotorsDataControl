import find_employee from "../helpers/find_employee.js";
import make_dashboard from "./make_dashboard.js";
import select_monthly_dashboard_data from "./select_monthly_dashboard_data.js";
import update_monthly_dashboard_data from "./update_monthly_dashboard_data.js";

function open_dashboard(employees, db) {
    const confirm_btns = document.querySelectorAll('.card-main-confirm-btn');
    confirm_btns.forEach((d) => {
        d.addEventListener('click', async (e) => {
            const id = d.getAttribute('data-id');
            const employee = find_employee(id, employees);
            if (!employee) return;
            const confirm = d.closest('.card-main-confirm');
            const input = confirm.querySelector('.card-main-confirm-input input');
            if (Number(employee.password) !== Number(input.value)) return;
            const employee_dashboard_name = document.querySelector('.dashboard-name h3');
            employee_dashboard_name.textContent = `Olá, ${employee.name}. Esse é o seu Dashboard.`;
            const dashboard = document.querySelector('.dashboard');
            const data = await select_monthly_dashboard_data(id, db);
            make_dashboard(data, id);
            dashboard.classList.add('opened');
            const save_btn = document.querySelector('.dashboard-save-command');
            save_btn.removeEventListener('click', () => {});
            save_btn.addEventListener('click', async () => {
                await update_monthly_dashboard_data(id, db);
            });
        });
    });
}

function close_dashboard() {
    const dash_comeback_command = document.querySelector('.dash-comeback-command');
    const dashboard = document.querySelector('.dashboard')
    dash_comeback_command.addEventListener('click', () => {
        dashboard.classList.remove('opened');
    })
}

function open_close_dashboard(employees, db) {
    open_dashboard(employees, db);
    close_dashboard();
}

export default open_close_dashboard;