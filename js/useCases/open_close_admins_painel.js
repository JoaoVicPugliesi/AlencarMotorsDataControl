import find_employee from "../helpers/find_employee.js";
import scroll_to_cards from "../helpers/scroll_to_cards.js";

async function open_admins_painel_helper(employees, btn) {
    const html = document.querySelector('.html');
    const home_header = document.querySelector('.home-header');
    const admins_main_painel_header = document.querySelector('.admins-main-painel-header h3');
    const id = btn.getAttribute('data-id');
    const employee = find_employee(id, employees);
    if (!employee) return;
    const confirm = btn.closest('.admin-card-main-confirm');
    const input = confirm.querySelector(
        '.admin-card-main-confirm-input input'
    );
    if (Number(employee.password) !== Number(input.value)) return;
    input.value = '';
    admins_main_painel_header.textContent = `Olá, ${employee.name}. Você é responsável por definir metas e guiar todos os funcionários.`;
    const painel = document.querySelector('.admins-main-painel');
    painel.classList.add('opened');
    await new Promise(requestAnimationFrame);
    scroll_to_cards('admins');
    html.classList.add('noscroll');
    home_header.classList.add('hidden');
}

function open_admins_painel(employees) {
    const confirm_btns = document.querySelectorAll('.admin-card-main-confirm-btn');
    confirm_btns.forEach((btn) => {
        const confirm = btn.closest('.admin-card-main-confirm');
        const input = confirm.querySelector('.admin-card-main-confirm-input input');
        btn.addEventListener('click', async () => {
            await open_admins_painel_helper(employees, btn);
        });
        input.addEventListener('keydown', async (e) => {
            if (e.key !== 'Enter') return;
            e.preventDefault();
            await open_admins_painel_helper(employees, btn);
        });
    });
}

function close_admins_painel () {
    const painel_comeback_command = document.querySelector('.admins-main-painel-comeback-command');
    const home_header = document.querySelector('.home-header');
    const painel = document.querySelector('.admins-main-painel')
    const html = document.querySelector('.html');
    painel_comeback_command.addEventListener('click', () => {
        painel.classList.remove('opened');
        html.classList.remove('noscroll');
        home_header.classList.remove('hidden');
    })
}

function open_close_admins_painel (employees) {
    open_admins_painel(employees);
    close_admins_painel();
}

export default open_close_admins_painel;