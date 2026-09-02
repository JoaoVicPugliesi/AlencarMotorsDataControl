const dashboard_graph_painel = document.querySelector('.dashboard-graph-painel');
const dashboard_carddashboard_performance = document.querySelector('.dashboard-carddashboard-performance');
const dashboard_graph_painel_comeback_command = document.querySelector('.dashboard-graph-painel-comeback-command');

function open_dashboard_graph_painel () {
    dashboard_carddashboard_performance.addEventListener('click', () => {
        dashboard_graph_painel.classList.add('opened');
    });
}

function close_dashboard_graph_painel () {
    dashboard_graph_painel_comeback_command.addEventListener('click', () => {
        dashboard_graph_painel.classList.remove('opened');
    });
}

function open_close_dashboard_graph_painel () {
    open_dashboard_graph_painel();
    close_dashboard_graph_painel();
}

export default open_close_dashboard_graph_painel;