function graph_painel_donut_chart() {

    const ctx = document.querySelector(
        '.dashboard-graph-painel-display-donut-chart'
    );

    new Chart(ctx, {

        type: 'doughnut',

        data: {
            labels: ['Leads', 'Vendas', 'Prospects'],

            datasets: [{
                data: [40, 30, 30],

                backgroundColor: [
                    '#646eb4',
                    '#3aa9df',
                    '#d9b333'
                ],

                borderWidth: 0
            }]
        },

        options: {
            responsive: true,

            plugins: {
                legend: {
                    position: 'bottom'
                }
            },

            cutout: '25%'
        }
    });
}

export default graph_painel_donut_chart;