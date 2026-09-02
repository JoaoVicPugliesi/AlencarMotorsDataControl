import { counter_group_map, counter_groups } from "../../data/counter_groups.js";

let donut_chart = null;

function graph_painel_donut_chart(code, data) {

    const ctx = document.querySelector(
        '.dashboard-graph-painel-display-donut-chart'
    );

    if (!ctx) return;

    const group_name = counter_group_map[code];

    if (!group_name) {
        console.log(`Counter group not found for: ${code}`);
        return;
    }

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


    /*
     * Labels
     */
    const labels = group.map(
        counter => counter.label
    );


    console.log('CLICKED:', code);
    console.log('GROUP:', group_name);
    console.log('LABELS:', labels);
    console.log('TOTALS:', totals);


    /*
     * Destroy previous chart
     */
    if (donut_chart) {
        donut_chart.destroy();
    }


    donut_chart = new Chart(ctx, {

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

                    position: 'left',

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

export default graph_painel_donut_chart;
