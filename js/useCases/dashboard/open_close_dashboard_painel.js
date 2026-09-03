function open_dashboard_painel(type) {
    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );
    const dashboard_painel = dashboard.querySelector(
        '.dashboard-painel'
    );
    const dashboard_performance = dashboard.querySelector(
        '.dashboard-performance'
    );
    dashboard_performance.addEventListener('click', () => {

        dashboard_painel.classList.add('opened');

    });

}

function close_dashboard_painel(type) {
    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );
    const dashboard_painel = dashboard.querySelector(
        '.dashboard-painel'
    );
    const dashboard_painel_comeback_command =
        dashboard.querySelector(
            '.dashboard-painel-comeback-command'
        );
    dashboard_painel_comeback_command.addEventListener('click', () => {

        dashboard_painel.classList.remove('opened');
    });
}

function open_close_dashboard_painel(type) {
    open_dashboard_painel(type);
    close_dashboard_painel(type);
}

export default open_close_dashboard_painel;
