import make_dashboard_graph_ranking from '../useCases/dashboard/make_dashboard_graph_ranking.js';
import graph_painel_bar_chart from '../charts/graph_painel_bar_chart.js';
import graph_painel_donut_chart from '../charts/graph_painel_donut_chart.js';

function filter_card(card, employees, data) {
    const cards = document.querySelectorAll('.dashboard-graph-header-card');
    const dashboard_card_dashboard_completeness = document.querySelector('.dashboard-card-dashboard-completeness');
    const goals_object = JSON.parse(localStorage.getItem('dashboard_goals'));
    cards.forEach((c) => {
        c.classList.remove('filtered');
    });
    const code = card.dataset.code;
    const total = Number(card.dataset.total);
    const goal_object = goals_object.find(
        goal => goal.code === code
    );
    if (!goal_object) {
        console.log(`Goal not found for ${code}`);
        return;
    };
    console.log(data);
    console.log(employees);
    console.log(card)
    const goal = Number(goal_object.goal);
    const percentage = goal > 0
        ? Math.round((total / goal) * 100)
        : 0;
    card.classList.add('filtered');
    dashboard_card_dashboard_completeness.innerHTML = `
            <div>
                <h3>META / COMPLETUDE</h3>
            </div>
            <div>
                <h3>${percentage}%</h3>
            </div>
            <div>
                <span>${total} / ${goal}</span>
            </div>
        `;
    const filtered_employees = employees.filter((e) => e.role != 'admin');
    make_dashboard_graph_ranking(code, filtered_employees, data);
    graph_painel_bar_chart(code, filtered_employees, data);
    graph_painel_donut_chart(code, data);
}

export default filter_card;