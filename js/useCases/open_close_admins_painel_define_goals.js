import make_dashboard_goals from "./dashboard/make_dashboard_goals.js";

const admins_main_painel_define_goals = document.querySelector('.admins-main-painel-define-goals');
function open_admins_painel_define_goals () {
    const goals_command = document.querySelector('.admins-main-painel-goals-command');
    goals_command.addEventListener('click', () => {
        const data = JSON.parse(localStorage.getItem('dashboard_goals'));
        if(!data) return;
        make_dashboard_goals(data.goals_object, 'admins-main-painel-define-goals-dashboard', false);
        admins_main_painel_define_goals.classList.add('opened');
    });
}
function close_admins_painel_define_goals () {
    const goals_comeback = document.querySelector('.admins-main-painel-define-goals-comeback-command');
    goals_comeback.addEventListener('click', () => {
        admins_main_painel_define_goals.classList.remove('opened');
    });
}
function open_close_admins_painel_define_goals () {
    open_admins_painel_define_goals();
    close_admins_painel_define_goals();
}

export default open_close_admins_painel_define_goals;