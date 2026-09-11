async function get_goal() {
    const request = await fetch('https://alencarmotorsdatacontrolwebservice.onrender.com/get_goal', {
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