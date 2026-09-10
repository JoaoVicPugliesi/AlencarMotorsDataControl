async function get_goal() {
    const request = await fetch('http://127.0.0.1:3000/get_goal', {
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