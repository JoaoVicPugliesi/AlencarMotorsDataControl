import show_message from "../../helpers/show_message.js";
import fetch_all_period_data from "../../infra/fetch_all_period_data.js";
import filter_dashboard_header from "./filter_dashboard_header.js";
import make_dashboard_header from "./make_dashboard_header.js";

async function update_dashboard_period(employees, db, type) {
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
            const { data: period_data, initial_day, final_day } =
                await fetch_all_period_data(
                    db,
                    initial_date,
                    final_date
                );
            console.log(period_data);
            make_dashboard_header(period_data, type);
            filter_dashboard_header(employees, period_data, type);
            dashboard_header_period.textContent = `${initial_day} - ${final_day}`;
            dashboard_period.classList.remove('opened');
            dashboard_initial_date.value = '';
            dashboard_final_date.value = '';
            show_message(dashboard, 'success', 'Período modificado com sucesso');
        }
    );
}

export default update_dashboard_period;