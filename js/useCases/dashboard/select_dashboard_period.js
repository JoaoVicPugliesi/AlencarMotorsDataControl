import show_message from "../../helpers/show_message.js";
import get_stats from "../../infra/use_cases/stat/get_stats.js";
import filter_dashboard_header from "./filter_dashboard_header.js";
import make_dashboard_header from "./make_dashboard_header.js";

async function select_dashboard_period(employees, type) {
    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );
    const dashboard_header_period = dashboard.querySelector(
        '.dashboard-header-period h3'
    );
    const dashboard_period = dashboard.querySelector(
        '.dashboard-period'
    );
    const dashboard_initial_date = dashboard_period.querySelector(
        '.dashboard-period-initial-date input[type="date"]'
    );
    const dashboard_final_date = dashboard_period.querySelector(
        '.dashboard-period-final-date input[type="date"]'
    );
    const dashboard_period_search_command =
        dashboard_period.querySelector(
            '.dashboard-period-search-command'
        );

    dashboard_period_search_command.addEventListener('click', async () => {
            const initial_date =
                dashboard_initial_date.value;
            const final_date =
                dashboard_final_date.value;
            if (!initial_date || !final_date) {
                show_message(dashboard_period, 'error', 'Os campos precisam ser preenchidos');
                return;
            };
            if (final_date < initial_date) {
                show_message(dashboard_period, 'error', 'A data final precisa ser após a inicial');
                return;
            };
            const { json } =
                await get_stats(
                    'period',
                    initial_date,
                    final_date,
                    null
                );
            const { stats, initial_day, final_day } = json;
            make_dashboard_header(stats, type);
            filter_dashboard_header(employees, stats, type);
            dashboard_header_period.textContent = `${initial_day.split('-').reverse().join('-')} - ${final_day.split('-').reverse().join('-')}`;
            dashboard_period.classList.remove('opened');
            dashboard_initial_date.value = '';
            dashboard_final_date.value = '';
            show_message(dashboard, 'success', 'Período modificado com sucesso');
        }
    );
}

export default select_dashboard_period;