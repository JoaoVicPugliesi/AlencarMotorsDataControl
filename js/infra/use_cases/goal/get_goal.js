import base_URL from "../../base_URL.js";

async function get_goal() {
    const request = await fetch(`${base_URL}/get_goal`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    const status = request.status;
    const goal = await request.json();
    return {
        status: status,
        goal: goal
    }
    
}

export default get_goal;