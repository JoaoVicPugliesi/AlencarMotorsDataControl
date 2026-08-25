import leaderboard_component from "../components/leaderboard_component.js";
const leaderboard_ranking = document.querySelector('.leaderboard-ranking');

function leaderboard_builder (employees) {
    const employees_ordered = employees.sort((a, b) => b.current_month_counter - a.current_month_counter);
    const leaders = 
        {
            f_name: employees_ordered[0].name,
            f_number: employees_ordered[0].current_month_counter,
            s_name: employees_ordered[1].name,
            s_number: employees_ordered[1].current_month_counter,
            t_name: employees_ordered[2].name,
            t_number: employees_ordered[2].current_month_counter
        }
    
    const component = leaderboard_component(leaders);
    leaderboard_ranking.innerHTML = component;
}

export default leaderboard_builder;