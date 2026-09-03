import counters from "../../../data/counters.js";
import dashboard_header_employee_component from "../../components/dashboard_header_component.js";

function make_dashboard_header(data, type) {
    if (!data) return;

    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );
    if (!dashboard) return;

    const dashboard_display_header = dashboard.querySelector(
        '.dashboard-display-header'
    );

    dashboard_display_header.innerHTML = '';

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

        const counter = counters.find(
            counter => counter.code === code
        );

        if (!counter) return;


        const employee =
            dashboard_header_employee_component(
                counter.name,
                code,
                total,
                ''
            );


        dashboard_display_header.insertAdjacentHTML(
            'beforeend',
            employee
        );


        i++;

    });

}


export default make_dashboard_header;
