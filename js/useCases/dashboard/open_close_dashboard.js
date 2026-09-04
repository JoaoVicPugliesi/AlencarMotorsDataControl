import get_brazil_now from "../../helpers/get_now.js";
import fetch_all_period_data from "../../infra/fetch_all_period_data.js";
import filter_dashboard_header from "./filter_dashboard_header.js";
import make_dashboard_header from "./make_dashboard_header.js";

function open_dashboard(employees, db, type) {
    const dashboard_command = document.querySelector(
        `.${type}-main-painel-dashboard-command`
    );
    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );
    const dashboard_header_period = dashboard.querySelector(
        '.dashboard-header-period h3'
    );
    dashboard_command.addEventListener('click', async () => {
        const { data: period_data, initial_day, final_day } = await fetch_all_period_data(db, null, null);
        make_dashboard_header(period_data, type);
        filter_dashboard_header(
            employees,
            period_data,
            type
        );
        dashboard_header_period.textContent = `${initial_day} - ${final_day}`;
        dashboard.classList.add('opened');
    });
}

function close_dashboard(type) {

    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );

    const dashboard_comeback_command = dashboard.querySelector(
        '.dashboard-display-comeback-command'
    );

    dashboard_comeback_command.addEventListener('click', () => {
        dashboard.classList.remove('opened');
    });
}

function open_close_dashboard(employees, db, type) {

    open_dashboard(employees, db, type);
    close_dashboard(type);
}

export default open_close_dashboard;