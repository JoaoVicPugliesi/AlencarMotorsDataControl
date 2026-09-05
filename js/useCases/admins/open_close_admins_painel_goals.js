import update_dashboard_goals from "../../infra/update_dashboard_goals.js";
import make_employees_painel_goals from "../employees/make_employees_painel_goals.js";

function open_admins_main_painel_goals(db) {
    const admins_main_painel_goals = document.querySelector('.admins-main-painel-goals');
    const goals_command = document.querySelector('.admins-main-painel-goals-command');
    goals_command.addEventListener('click', () => {
        const { goals_object } = JSON.parse(localStorage.getItem('dashboard_goals'));
        if (!goals_object) return;
        make_employees_painel_goals(goals_object, 'admins-main-painel-goals-display', false);
        admins_main_painel_goals.classList.add('opened');
        const save_command = document.querySelector(
            '.admins-main-painel-goals-save-command'
        );
        save_command.addEventListener('click', async () => {
            await update_dashboard_goals(db);
        })
    });
}
function close_admins_main_painel_goals() {
    const admins_main_painel_goals = document.querySelector('.admins-main-painel-goals');
    const goals_comeback = document.querySelector('.admins-main-painel-goals-comeback-command');
    goals_comeback.addEventListener('click', () => {
        admins_main_painel_goals.classList.remove('opened');
    });
}
function open_close_admins_main_painel_goals(db) {
    open_admins_main_painel_goals(db);
    close_admins_main_painel_goals();
}

export default open_close_admins_main_painel_goals;