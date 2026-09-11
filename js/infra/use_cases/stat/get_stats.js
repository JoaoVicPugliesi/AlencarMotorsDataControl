import handle_period from "../../../helpers/handle_period.js";

async function get_stats(mode, initial_day, final_day, id) {
    const {
        initial_day: formatted_initial_day,
        final_day: formatted_final_day
    } = handle_period(mode, initial_day, final_day);
    const params = {
        mode: mode,
        initial_day: formatted_initial_day,
        final_day: formatted_final_day,
        id: id
    }

    const query = new URLSearchParams(params).toString();
    const request = await fetch(`https://alencarmotorsdatacontrolwebservice.onrender.com/get_stats?${query}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    const status = request.status;
    const json = await request.json();
    return {
        status: status,
        json: json
    }
}

export default get_stats;