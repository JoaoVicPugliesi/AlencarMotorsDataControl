import base_URL from "../../base_URL.js";

async function post_login_employee(params) {
    const request = await fetch(`${base_URL}/post_login_employee`, {
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