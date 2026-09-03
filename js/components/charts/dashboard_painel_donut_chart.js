import {
    counter_group_map,
    counter_groups
} from "../../../data/counter_groups.js";

const donut_charts = {};

function dashboard_painel_donut_chart(
    code,
    data,
    type
) {

    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );

    if (!dashboard) return;

    const ctx = dashboard.querySelector(
        '.dashboard-painel-display-donut-chart'
    );

    if (!ctx) return;

    const group_name = counter_group_map[code];

    if (!group_name) return;
    

    const group = counter_groups[group_name];

    const totals = group.map(counter => {

        return data.reduce(
            (total, item) => {

                return total + Number(
                    item[counter.code] || 0
                );

            },
            0
        );
    });

    const labels = group.map(
        counter => counter.label
    );

    if (donut_charts[type]) {
        donut_charts[type].destroy();
    }

    donut_charts[type] = new Chart(ctx, {

        type: 'doughnut',

        data: {

            labels,

            datasets: [{
                data: totals,
                borderWidth: 0
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    position: 'top',

                    labels: {

                        color: 'white',

                        font: {
                            family: 'Outfit',
                            size: 14
                        }
                    }
                }
            },

            cutout: '65%'
        }
    });
}

export default dashboard_painel_donut_chart;