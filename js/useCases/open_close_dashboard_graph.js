const dashboard_graph = document.querySelector('.dashboard-graph');
function open_dashboard_graph() {
    const dashboard_command = document.querySelector('.dashboard-command');

    dashboard_command.addEventListener('click', () => {
        dashboard_graph.classList.add('opened');
    });
}

function close_dashboard_graph () {
    const dashboard_comeback_command = document.querySelector('.dashboard-graph-comeback-command');
    dashboard_comeback_command.addEventListener('click', () => {
        dashboard_graph.classList.remove('opened');
    });
}

function open_close_dashboard_graph () {
    open_dashboard_graph();
    close_dashboard_graph();
}

export default open_close_dashboard_graph;