import scroll_to_section from "../../helpers/scroll_to_section.js";
import make_employees_painel from "./make_employees_painel.js";
import open_close_diary from "../../helpers/open_close_diary.js";
import get_current_date from "../../helpers/get_current_date.js";
import show_message from "../../helpers/show_message.js";
import update_stats from "../../infra/use_cases/stat/update_stats.js";
import get_stat from "../../infra/use_cases/stat/get_stat.js";
import get_month_stats from "../../infra/use_cases/stat/get_month_stats.js";
import post_login_employee from "../../infra/use_cases/employee/post_login_employee.js";

async function open_employees_painel_helper(db, btn) {
    const id = btn.getAttribute('data-id');
    const confirm = btn.closest('.employee-main-confirm');
    const input = confirm.querySelector(
        '.employee-main-confirm-input input'
    );
    const {
        status,
        json
    } = await post_login_employee({
        id: id,
        password: input.value
    });

    if (status !== 200) {
        const employees_main = document.querySelector('.employees-main');
        show_message(employees_main, 'error', json.message);
        return;
    }
    const html = document.querySelector('.html');
    const home_header = document.querySelector('.home-header');
    input.value = '';
    const employee_dashboard_name = document.querySelector('.employees-main-painel-name h3');
    employee_dashboard_name.textContent = `Olá, ${ json.employee.name }. Esses são seus dados.`;
    const painel = document.querySelector('.employees-main-painel');
    const is_there_record = await get_stat(id, db);
    if (!is_there_record) {
        await update_stats(id, db);
    }
    const data = await get_month_stats(id, db);
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
        await update_stats(id, db);
    });
}

function open_employees_painel(db) {
    const confirm_btns = document.querySelectorAll('.employee-main-confirm-btn');
    confirm_btns.forEach((btn) => {
        const confirm = btn.closest('.employee-main-confirm');
        const input = confirm.querySelector('.employee-main-confirm-input input');
        btn.addEventListener('click', async () => {
            await open_employees_painel_helper(db, btn);
        });
        input.addEventListener('keydown', async (e) => {
            if (e.key !== 'Enter') return;
            e.preventDefault();
            await open_employees_painel_helper(db, btn);
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