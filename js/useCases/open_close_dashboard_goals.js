import make_dashboard_goals from "./make_dashboard_goals.js";


function open_dashboard_goals () {
    const dashboard_goals = document.querySelector('.dashboard-goals');
    const dashboard_goals_command = document.querySelector('.dashboard-goals-command');
    dashboard_goals_command.addEventListener('click', () => {
        const data = JSON.parse(localStorage.getItem('dashboard_goals'));
        if(!data) return;
        console.log(data);
        make_dashboard_goals(data.goals_object);
        dashboard_goals.classList.add('opened');
    })
}

function close_dashboard_goals () {
    const dashboard_goals = document.querySelector('.dashboard-goals');
    const dashboard_goals_comeback_command = document.querySelector('.dashboard-goals-comeback-command');
    dashboard_goals_comeback_command.addEventListener('click', () => {
        dashboard_goals.classList.remove('opened');
    });
}

function open_close_dashboard_goals() {
    open_dashboard_goals();
    close_dashboard_goals();
}

export default open_close_dashboard_goals;