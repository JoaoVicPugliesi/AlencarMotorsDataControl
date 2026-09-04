import counters from "../../../data/counters.js";
import default_data from "../../../data/default_data.js";
import dashboard_header_employee_component from "../../components/dashboard_header_component.js";

function make_dashboard_header(data, type) {
    if (!Array.isArray(data) || data.length === 0) {
        data = [...default_data]
    }
    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );

    if (!dashboard) return;

    const dashboard_display_header = dashboard.querySelector(
        '.dashboard-display-header'
    );

    if (!dashboard_display_header) return;

    dashboard_display_header.innerHTML = '';


    const totals = {};

    data.forEach(row => {

        Object.entries(row).forEach(([key, value]) => {

            if (
                key === 'id' ||
                key === 'employee_id' ||
                key === 'date'
            ) {
                return;
            }

            if (!totals[key]) {
                totals[key] = 0;
            }

            totals[key] += Number(value) || 0;
        });

    });

    Object.entries(totals).forEach(([code, total]) => {

        const counter = counters.find(
            counter => counter.code === code
        );

        if (!counter) return;

        const employee = dashboard_header_employee_component(
            counter.name,
            code,
            total,
            ''
        );

        dashboard_display_header.insertAdjacentHTML(
            'beforeend',
            employee
        );

    });
}

export default make_dashboard_header;