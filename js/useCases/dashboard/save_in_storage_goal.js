import get_goal from "../../infra/get_goal.js";

async function save_in_storage_goal (db) {
    const { status, goal }  = await get_goal(db);
    if(status == 200) {
        const { id, initial_date, goal_object } = goal
        localStorage.setItem('goal', JSON.stringify({
            id: id,
            initial_date: initial_date,
            goal_object: goal_object
        }));
    }
}

export default save_in_storage_goal;