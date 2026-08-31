import make_dashboard_graph_ranking from "../useCases/make_dashboard_graph_ranking.js";

function filter_card(card, employees, data) {
    const cards = document.querySelectorAll('.dashboard-graph-header-card');
    const dashboard_card_dashboard_completeness = document.querySelector('.dashboard-card-dashboard-completeness');
    const { goals_object } = JSON.parse(localStorage.getItem('dashboard_goals'));
    cards.forEach((c) => {
        c.classList.remove('filtered');
    });
    const code = card.dataset.code;
    const total = Number(card.dataset.total);
    const goalObject = goals_object.find(
        goal => goal.code === code
    );
    if (!goalObject) {
        console.log(`Goal not found for ${code}`);
        return;
    };
    const goal = Number(goalObject.goal);
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
    make_dashboard_graph_ranking(code, employees, data);
}

export default filter_card;