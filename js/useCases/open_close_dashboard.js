import find_employee from "../helpers/find_employee.js";
import scroll_to_cards from "../helpers/scroll_to_cards.js";
import make_dashboard from "./make_dashboard.js";
import select_monthly_dashboard_data from "./select_monthly_dashboard_data.js";
import update_monthly_dashboard_data from "./update_monthly_dashboard_data.js";

async function open_dashboard_helper(employees, db, btn) {
    const html = document.querySelector('.html');
    const home_header = document.querySelector('.home-header');
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
    await new Promise(requestAnimationFrame);
    scroll_to_cards();
    html.classList.add('noscroll');
    home_header.classList.add('hidden');
    const save_btn =
    document.querySelector('.dashboard-save-command');
    save_btn.addEventListener('click', async () => {
        await update_monthly_dashboard_data(id, db);
    });
}

function open_dashboard(employees, db) {
    const confirm_btns = document.querySelectorAll('.card-main-confirm-btn');
    confirm_btns.forEach((btn) => {
        const confirm = btn.closest('.card-main-confirm');
        const input = confirm.querySelector('.card-main-confirm-input input');
        btn.addEventListener('click', async () => {
            await open_dashboard_helper(employees, db, btn);
        });
        input.addEventListener('keydown', async (e) => {
            if (e.key !== 'Enter') return;
            e.preventDefault();
            await open_dashboard_helper(employees, db, btn);
        });
    });
}

function close_dashboard() {
    const dash_comeback_command = document.querySelector('.dashboard-comeback-command');
    const home_header = document.querySelector('.home-header');
    const dashboard = document.querySelector('.dashboard')
    const html = document.querySelector('.html');
    dash_comeback_command.addEventListener('click', () => {
        dashboard.classList.remove('opened');
        html.classList.remove('noscroll');
        home_header.classList.remove('hidden');
    })
}

function open_close_dashboard(employees, db) {
    open_dashboard(employees, db);
    close_dashboard();
}

export default open_close_dashboard;