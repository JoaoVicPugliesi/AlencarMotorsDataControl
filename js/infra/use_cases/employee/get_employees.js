import base_URL from "../../base_URL.js";

async function get_employees() {
    const request = await fetch(`${base_URL}/get_employees`, {
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