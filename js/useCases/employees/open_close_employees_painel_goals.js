import make_employees_painel_goals from "./make_employees_painel_goals.js";

function open_employees_painel_goals () {
    const dashboard_goals = document.querySelector('.employees-main-painel-goals');
    const dashboard_goals_command = document.querySelector('.employees-main-painel-goals-command');
    dashboard_goals_command.addEventListener('click', () => {
        const data = JSON.parse(localStorage.getItem('dashboard_goals'));
        if(!data) return;
        make_employees_painel_goals(data, 'employees-main-painel-goals-display', true);
        dashboard_goals.classList.add('opened');
    })
}

function close_employees_painel_goals () {
    const dashboard_goals = document.querySelector('.employees-main-painel-goals');
    const dashboard_goals_comeback_command = document.querySelector('.employees-main-painel-goals-comeback-command');
    dashboard_goals_comeback_command.addEventListener('click', () => {
        dashboard_goals.classList.remove('opened');
    });
}

function open_close_employees_painel_goals() {
    open_employees_painel_goals();
    close_employees_painel_goals();
}

export default open_close_employees_painel_goals;