const dashboard_painel = document.querySelector('.dashboard-painel');
const dashboard_performance = document.querySelector('.dashboard-performance');
const dashboard_painel_comeback_command = document.querySelector('.dashboard-painel-comeback-command');

function open_dashboard_painel () {
    dashboard_performance.addEventListener('click', () => {
        dashboard_painel.classList.add('opened');
    });
}

function close_dashboard_painel () {
    dashboard_painel_comeback_command.addEventListener('click', () => {
        dashboard_painel.classList.remove('opened');
    });
}

function open_close_dashboard_painel () {
    open_dashboard_painel();
    close_dashboard_painel();
}

export default open_close_dashboard_painel;