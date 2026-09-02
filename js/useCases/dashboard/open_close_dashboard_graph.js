import get_brazil_now from "../../helpers/get_brazil_now.js";
import fetch_all_monthly_data from "../fetch_all_monthly_data.js";
import filter_graph_header from "./filter_graph_header.js";
import make_dashboard_graph_header from "./make_dashboard_graph_header.js";

const dashboard_graph = document.querySelector('.dashboard-graph');
function open_dashboard_graph(employees, db) {
    const dashboard_command = document.querySelector('.dashboard-command');

    dashboard_command.addEventListener('click', async () => {
        const data = await fetch_all_monthly_data(db);
        make_dashboard_graph_header(data);
        filter_graph_header(employees, data);
        dashboard_graph.classList.add('opened');
        const brazil_date = get_brazil_now();
            const year = Number(
            brazil_date.find(part => part.type === 'year').value
        );
        const month = Number(
            brazil_date.find(part => part.type === 'month').value
        );
        const dashboard_header = document.querySelector('.dashboard-header h3:nth-child(2)');
        dashboard_header.textContent = `0${month}/${year}`;
    });
}

function close_dashboard_graph() {
    const dashboard_comeback_command = document.querySelector('.dashboard-graph-display-comeback-command');
    dashboard_comeback_command.addEventListener('click', () => {
        dashboard_graph.classList.remove('opened');
    });
}

function open_close_dashboard_graph(employees, db) {
    open_dashboard_graph(employees, db);
    close_dashboard_graph();
}

export default open_close_dashboard_graph;