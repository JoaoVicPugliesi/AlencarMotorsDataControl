const dashboard_graph_painel = document.querySelector('.dashboard-graph-painel');
const config_command = document.querySelector('.dashboard-graph-display-config-command');

function open_dashboard_painel () {
    config_command.addEventListener('click', () => {
        dashboard_graph_painel.classList.add('opened');
    });
}
function close_dashboard_painel () {
    dashboard_graph_painel.addEventListener('click', () => {
        dashboard_graph_painel.classList.remove('opened');
    })
}
function open_close_dashboard_painel () {
    open_dashboard_painel();
    close_dashboard_painel();
}

export default open_close_dashboard_painel;