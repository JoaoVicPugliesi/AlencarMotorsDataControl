async function get_employees() {
    const request = await fetch('https://alencarmotorsdatacontrolwebservice.onrender.com/get_employees', {
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