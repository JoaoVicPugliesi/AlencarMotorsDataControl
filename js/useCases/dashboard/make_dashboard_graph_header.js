import counters from "../../../data/counters.js";
import dashboard_graph_header_card_component
    from "../../components/dashboard_graph_header_card_component.js";

const dashboard_graph_display_header = document.querySelector(
    '.dashboard-graph-display-header'
);

function make_dashboard_graph_header(data) {
    if(!data) return;
    dashboard_graph_display_header.innerHTML = '';
    const totals = {};
    data.forEach(row => {
        Object.keys(row).forEach(key => {
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

            totals[key] += Number(row[key]) || 0;
        });

    });
    let i = 0;
    Object.entries(totals).forEach(([code, total]) => {
        const card = dashboard_graph_header_card_component(
            counters[i].name,
            code,
            total,
            ''
        );
        dashboard_graph_display_header.insertAdjacentHTML(
            'beforeend',
            card
        );
        i++;
    });
}

export default make_dashboard_graph_header;