import find_employee from "../../helpers/find_employee.js";
import scroll_to_section from "../../helpers/scroll_to_section.js";
import make_employees_painel from "./make_employees_painel.js";
import select_monthly_dashboard_data from "../../infra/select_monthly_dashboard_data.js";
import open_close_diary from "../../helpers/open_close_diary.js";
import get_current_date from "../../helpers/get_current_date.js";
import update_daily_dashboard_data from "../../infra/update_daily_dashboard_data.js";
import show_message from "../../helpers/show_message.js";
import select_employee_day_record from "../../infra/select_employee_day_record.js";

async function open_employees_painel_helper(employees, db, btn) {
    const html = document.querySelector('.html');
    const home_header = document.querySelector('.home-header');
    const id = btn.getAttribute('data-id');
    const employee = find_employee(id, employees);
    const employees_main = document.querySelector('.employees-main');
    if (!employee) return;
    const confirm = btn.closest('.employee-main-confirm');
    const input = confirm.querySelector(
        '.employee-main-confirm-input input'
    );
    const admins = employees.filter((employee) => employee.role === 'admin');
    const admin_passwords = admins.map((admin) => admin.password);
    if (employee.password == input.value || admin_passwords.includes(input.value)) {
        input.value = '';
        const employee_dashboard_name =document.querySelector('.employees-main-painel-name h3');
        employee_dashboard_name.textContent = `Olá, ${employee.name}. Esses são seus dados.`;
        const painel = document.querySelector('.employees-main-painel');
        const is_there_record = await select_employee_day_record(id, db);
        if(!is_there_record) {
            await update_daily_dashboard_data(id, db);
        }
        const data = await select_monthly_dashboard_data(id, db);
        const current_date = get_current_date();
        const table = document.querySelector('.employees-main-painel-display');
        const container = document.querySelector('.employees-main-painel-diary');
        make_employees_painel(id, db, data, table, container, painel, 'sale');
        const employees_main_painel_diary_command = document.querySelector('.employees-main-painel-diary-command');
        open_close_diary(
            id,
            db,
            employees_main_painel_diary_command,
            'write',
            data,
            current_date,
            container,
            painel
        );
        painel.classList.add('opened');
        await new Promise(requestAnimationFrame);
        scroll_to_section('employees');
        html.classList.add('noscroll');
        home_header.classList.add('hidden');
        const save_btn = document.querySelector('.employees-main-painel-save-command');
        save_btn.addEventListener('click', async () => {
            await update_daily_dashboard_data(id, db);
        });
    } else {
        show_message(employees_main, 'error', 'Senha inválida');
        return;
    }
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