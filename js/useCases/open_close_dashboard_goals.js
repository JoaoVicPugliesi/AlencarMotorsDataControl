import make_dashboard_goals from "./make_dashboard_goals.js";
import select_dashboard_goal from "./select_dashboard_goal.js";

function open_dashboard_goals (db) {
    const dashboard_goals = document.querySelector('.dashboard-goals');
    const dashboard_goals_command = document.querySelector('.dashboard-goals-command');
    dashboard_goals_command.addEventListener('click', async () => {
        const data = await select_dashboard_goal(db);
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

function open_close_dashboard_goals(db) {
    open_dashboard_goals(db);
    close_dashboard_goals();
}

export default open_close_dashboard_goals;