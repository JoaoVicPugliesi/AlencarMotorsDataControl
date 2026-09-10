async function post_login_employee(params) {
    const request = await fetch('http://127.0.0.1:3000/post_login_employee', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(params)
    });

    const status = request.status;
    const json = await request.json();

    return {
        status: status,
        json: json
    }
}

export default post_login_employee;