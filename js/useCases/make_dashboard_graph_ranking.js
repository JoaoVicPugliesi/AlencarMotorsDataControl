function make_dashboard_graph_ranking(code, employees, data) {
    const dashboard_ranking_content = document.querySelector(
        '.dashboard-ranking-content'
    );
    if (!dashboard_ranking_content) return;
    const ranking = employees
        .map(employee => {

            const employeeData = data.filter(
                item => item.employee_id === employee.id
            );
            const total = employeeData.reduce(
                (sum, item) => sum + (Number(item[code]) || 0),
                0
            );
            return {
                ...employee,
                total
            };
        })
        .sort((a, b) => b.total - a.total);

    dashboard_ranking_content.innerHTML = ranking
        .map((employee, index) => `
            <div class="ranking-step">
                <i class="fa-solid fa-medal"></i>
                <h3>${employee.name}</h3>
                <strong>${employee.total}</strong>

            </div>
        `)
        .join('');
}

export default make_dashboard_graph_ranking;