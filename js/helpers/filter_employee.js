import make_dashboard_ranking from '../useCases/dashboard/make_dashboard_ranking.js';
import dashboard_painel_bar_chart from '../components/charts/dashboard_painel_bar_chart.js';
import dashboard_painel_donut_chart from '../components/charts/dashboard_painel_donut_chart.js';

function filter_employee(employee, employees, data) {
    const dashboard_header = document.querySelectorAll('.dashboard-header-component');
    const dashboard_completeness = document.querySelector('.dashboard-completeness');
    const goals_object = JSON.parse(localStorage.getItem('dashboard_goals'));
    dashboard_header.forEach((c) => {
        c.classList.remove('filtered');
    });
    const code = employee.dataset.code;
    const total = Number(employee.dataset.total);
    const goal_object = goals_object.find(
        goal => goal.code === code
    );
    if (!goal_object) {
        console.log(`Goal not found for ${code}`);
        return;
    };
    console.log(data);
    console.log(employees);
    console.log(employee)
    const goal = Number(goal_object.goal);
    const percentage = goal > 0
        ? Math.round((total / goal) * 100)
        : 0;
    employee.classList.add('filtered');
    dashboard_completeness.innerHTML = `
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
    make_dashboard_ranking(code, filtered_employees, data);
    dashboard_painel_bar_chart(code, filtered_employees, data);
    dashboard_painel_donut_chart(code, data);
}

export default filter_employee;