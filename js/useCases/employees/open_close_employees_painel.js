import find_employee from "../../helpers/find_employee.js";
import scroll_to_section from "../../helpers/scroll_to_section.js";
import make_employees_painel from "./make_employees_painel.js";
import select_monthly_dashboard_data from "../select_monthly_dashboard_data.js";
import update_monthly_dashboard_data from "../update_monthly_dashboard_data.js";

async function open_employees_painel_helper(employees, db, btn) {
    const html = document.querySelector('.html');
    const home_header = document.querySelector('.home-header');
    const id = btn.getAttribute('data-id');
    const employee = find_employee(id, employees);
    if (!employee) return;
    const confirm = btn.closest('.employee-main-confirm');
    const input = confirm.querySelector(
        '.employee-main-confirm-input input'
    );
    const admins = employees.filter((employee) => employee.role === 'admin');
    const admin_passwords = admins.map((admin) => Number(admin.password));
    if (Number(employee.password) === Number(input.value) || admin_passwords.includes(Number(input.value))) {
        input.value = '';
        const employee_dashboard_name =
        document.querySelector('.employees-main-painel-name h3');
        employee_dashboard_name.textContent =
            `Olá, ${employee.name}. Esses são seus dados.`;
        const painel = document.querySelector('.employees-main-painel');
        const data = await select_monthly_dashboard_data(id, db);
        make_employees_painel(data, id);
        painel.classList.add('opened');
        await new Promise(requestAnimationFrame);
        scroll_to_section('employees');
        html.classList.add('noscroll');
        home_header.classList.add('hidden');
        const save_btn = document.querySelector('.employees-main-painel-save-command');
        save_btn.addEventListener('click', async () => {
            console.log('clicked');
            console.log(id);
            console.log(db);
            console.log(save_btn);
            await update_monthly_dashboard_data(id, db);
        });
    };
}

function open_employees_painel(employees, db) {
    const confirm_btns = document.querySelectorAll('.employee-main-confirm-btn');
    confirm_btns.forEach((btn) => {
        const confirm = btn.closest('.employee-main-confirm');
        const input = confirm.querySelector('.employee-main-confirm-input input');
        btn.addEventListener('click', async () => {
            await open_employees_painel_helper(employees, db, btn);
        });
        input.addEventListener('keydown', async (e) => {
            if (e.key !== 'Enter') return;
            e.preventDefault();
            await open_employees_painel_helper(employees, db, btn);
        });
    });
}

function close_employees_painel() {
    const painel_comeback_command = document.querySelector('.employees-main-painel-comeback-command');
    const home_header = document.querySelector('.home-header');
    const painel = document.querySelector('.employees-main-painel');
    const html = document.querySelector('.html');
    painel_comeback_command.addEventListener('click', () => {
        painel.classList.remove('opened');
        html.classList.remove('noscroll');
        home_header.classList.remove('hidden');
    })
}

function open_close_employees_painel(employees, db) {
    open_employees_painel(employees, db);
    close_employees_painel();
}

export default open_close_employees_painel;