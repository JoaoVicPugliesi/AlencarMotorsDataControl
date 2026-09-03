import get_brazil_now from "../../helpers/get_brazil_now.js";
import fetch_all_period_data from "../fetch_all_period_data.js";
import filter_dashboard_header from "./filter_dashboard_header.js";
import make_dashboard_header from "./make_dashboard_header.js";

function open_dashboard(employees, db, type) {

    const dashboard_command = document.querySelector(
        `.${type}-main-painel-dashboard-command`
    );

    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );

    dashboard_command.addEventListener('click', async () => {

        const data = await fetch_all_period_data(db, null, null);

        make_dashboard_header(data, type);

        filter_dashboard_header(
            employees,
            data,
            type
        );

        dashboard.classList.add('opened');

        const brazil_date = get_brazil_now('long');

        const year = Number(
            brazil_date.find(
                part => part.type === 'year'
            ).value
        );

        const month = brazil_date.find(
            part => part.type === 'month'
        ).value;

        const dashboard_header = dashboard.querySelector(
            '.dashboard-header h3:nth-child(2)'
        );

        dashboard_header.textContent = `${month}/${year}`;
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