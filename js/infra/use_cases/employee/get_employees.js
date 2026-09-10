async function get_employees() {
    const request = await fetch('http://127.0.0.1:3000/get_employees', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    const status = request.status;
    const employees = await request.json();

    return {
        status: status,
        employees: employees
    }
    
}

export default get_employees;