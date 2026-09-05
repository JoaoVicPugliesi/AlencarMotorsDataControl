function open_dashboard_period(type) {
    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );
    const dashboard_period = dashboard.querySelector(
        '.dashboard-period'
    );
    const dashboard_header_period = dashboard.querySelector(
        '.dashboard-header-period'
    );
    dashboard_header_period.addEventListener('click', () => {
        dashboard_period.classList.add('opened');
    })
}

function close_dashboard_period(type) {
    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );
    const dashboard_period = dashboard.querySelector(
        '.dashboard-period'
    );
    const dashboard_period_comeback_command = dashboard_period.querySelector(
        '.dashboard-period-comeback-command'
    );
    const dashboard_initial_date = dashboard_period.querySelector(
        '.dashboard-period-initial-date input[type="date"]'
    );
    const dashboard_final_date = dashboard_period.querySelector(
        '.dashboard-period-final-date input[type="date"]'
    );
    dashboard_period_comeback_command.addEventListener('click', () => {
        dashboard_initial_date.value = '';
        dashboard_final_date.value = '';
        dashboard_period.classList.remove('opened');
    });
}

function open_close_dashboard_period(type) {
    open_dashboard_period(type);
    close_dashboard_period(type);
}

export default open_close_dashboard_period;