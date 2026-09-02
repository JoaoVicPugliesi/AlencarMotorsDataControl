function graph_painel_bar_chart() {
    const ctx = document.querySelector('.dashboard-graph-painel-display-bar-chart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Igor Morais', 'Ediely Nunes', 'Rodrigo Freitas', 'Thomas Willian'],
            datasets: [{
                label: 'LEADS CRM',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

export default graph_painel_bar_chart;