import make_employees_painel_goals from "../employees/make_employees_painel_goals.js";

function open_admins_main_painel_goals () {
    const admins_main_painel_goals = document.querySelector('.admins-main-painel-goals');
    const goals_command = document.querySelector('.admins-main-painel-goals-command');
    goals_command.addEventListener('click', () => {
        const data = JSON.parse(localStorage.getItem('dashboard_goals'));
        if(!data) return;
        make_employees_painel_goals(data, 'admins-main-painel-goals-display', false);
        admins_main_painel_goals.classList.add('opened');
    });
}
function close_admins_main_painel_goals () {
    const admins_main_painel_goals = document.querySelector('.admins-main-painel-goals');
    const goals_comeback = document.querySelector('.admins-main-painel-goals-comeback-command');
    goals_comeback.addEventListener('click', () => {
        admins_main_painel_goals.classList.remove('opened');
    });
}
function open_close_admins_main_painel_goals () {
    open_admins_main_painel_goals();
    close_admins_main_painel_goals();
}

export default open_close_admins_main_painel_goals;