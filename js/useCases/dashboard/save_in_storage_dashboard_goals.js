import fetch_dashboard_goals from "../../infra/fetch_dashboard_goals.js";

async function save_in_storage_dashboard_goals (db) {
    const { id, initial_date, goals_object }  = await fetch_dashboard_goals(db);
    localStorage.setItem('dashboard_goals', JSON.stringify({
        id: id,
        initial_date: initial_date,
        goals_object: goals_object
    }));
}

export default save_in_storage_dashboard_goals;