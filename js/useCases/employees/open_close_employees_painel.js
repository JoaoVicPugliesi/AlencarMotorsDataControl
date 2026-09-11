import scroll_to_section from "../../helpers/scroll_to_section.js";
import make_employees_painel from "./make_employees_painel.js";
import open_close_diary from "../../helpers/open_close_diary.js";
import get_current_date from "../../helpers/get_current_date.js";
import show_message from "../../helpers/show_message.js";
import post_stats from "../../infra/use_cases/stat/post_stats.js";
import post_login_employee from "../../infra/use_cases/employee/post_login_employee.js";
import get_stats from "../../infra/use_cases/stat/get_stats.js";

async function open_employees_painel_helper(db, btn) {
    const id = Number(btn.getAttribute('data-id'));
    const confirm = btn.closest('.employee-main-confirm');
    const input = confirm.querySelector(
        '.employee-main-confirm-input input'
    );
    const {
        status: post_login_status,
        json: post_login_json
    } = await post_login_employee({
        id: id,
        password: input.value
    });

    if (post_login_status !== 200) {
        const employees_main = document.querySelector('.employees-main');
        show_message(employees_main, 'error', post_login_json.message);
        return;
    }
    input.value = '';
    const { status: get_stats_today_status, json: get_stats_today_json } = await get_stats('today', null, null, id);
    if (get_stats_today_status === 404) {
        await post_stats(id, db);
    }
    const painel = document.querySelector('.employees-main-painel');
    const { status: get_stats_month_status, json: get_stats_month_json } = await get_stats('month', null, null, id);
    const { stats, initial_day, final_day } = get_stats_month_json;
    const table = document.querySelector('.employees-main-painel-display');
    const container = document.querySelector('.employees-main-painel-diary');
    make_employees_painel(id, db, stats, table, container, painel, 'sale');
    const current_date = get_current_date();
    const employees_main_painel_diary_command = document.querySelector('.employees-main-painel-diary-command');
    open_close_diary(
        id,
        db,
        employees_main_painel_diary_command,
        'write',
        stats,
        current_date,
        container,
        painel
    );
    const html = document.querySelector('.html');
    const home_header = document.querySelector('.home-header');
    const employee_dashboard_name = document.querySelector('.employees-main-painel-name h3');
    employee_dashboard_name.textContent = `Olá, ${ post_login_json.employee.name }. Esses são seus dados.`;
    painel.classList.add('opened');
    await new Promise(requestAnimationFrame);
    scroll_to_section('employees');
    html.classList.add('noscroll');
    home_header.classList.add('hidden');
    const save_btn = document.querySelector('.employees-main-painel-save-command');
    save_btn.addEventListener('click', async () => {
        await post_stats(id, db);
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