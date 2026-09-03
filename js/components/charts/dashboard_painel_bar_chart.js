import {
    counter_group_map,
    counter_groups
} from "../../../data/counter_groups.js";

const bar_charts = {};

function dashboard_painel_bar_chart(
    code,
    employees,
    data,
    type
) {

    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );

    if (!dashboard) return;

    const ctx = dashboard.querySelector(
        '.dashboard-painel-display-bar-chart'
    );

    if (!ctx) return;

    const group_name = counter_group_map[code];

    if (!group_name) return;
    
    const group = counter_groups[group_name];

    const labels = employees.map(
        employee => employee.name
    );

    const datasets = group.map(counter => {

        const values = employees.map(employee => {

            const employee_data = data.filter(
                item =>
                    Number(item.employee_id) ===
                    Number(employee.id)
            );

            return employee_data.reduce(
                (total, item) => {
                    return total + Number(
                        item[counter.code] || 0
                    );
                },
                0
            );
        });

        return {
            label: counter.label,
            data: values,
            borderWidth: 1
        };
    });


    if (bar_charts[type]) {
        bar_charts[type].destroy();
    }

    bar_charts[type] = new Chart(ctx, {

        type: 'bar',

        data: {
            labels,
            datasets
        },

        options: {

            responsive: true,
            maintainAspectRatio: false,

            plugins: {

                legend: {
                    labels: {
                        color: 'white',

                        font: {
                            family: 'Outfit',
                            size: 14
                        }
                    }
                },

                tooltip: {

                    titleColor: 'white',
                    bodyColor: 'white',

                    titleFont: {
                        family: 'Outfit',
                        size: 14
                    },

                    bodyFont: {
                        family: 'Outfit',
                        size: 13
                    }
                }
            },

            scales: {

                x: {

                    ticks: {
                        color: 'white',

                        font: {
                            family: 'Outfit',
                            size: 14
                        }
                    },

                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },

                y: {

                    beginAtZero: true,

                    ticks: {
                        color: 'white',

                        font: {
                            family: 'Outfit',
                            size: 14
                        }
                    },

                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

export default dashboard_painel_bar_chart;